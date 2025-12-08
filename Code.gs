// === CONFIG ===

// Если скрипт привязан к самой таблице, можно не трогать ID:
const SPREADSHEET_ID = SpreadsheetApp.getActive().getId();
// Имя листа с заказами:
const ORDERS_SHEET_NAME = 'Orders';

// Порядок колонок в листе:
const HEADERS = [
  'id',          // длинный ID, типа CD-20250203123456
  'code',        // короткий код для табло: a123
  'status',      // NEW / IN_PROGRESS / READY / DONE / CANCELED
  'type',        // on_site / takeaway / delivery
  'table',       // номер стола
  'pickup_in',   // через сколько минут забрать
  'address',     // адрес доставки
  'phone',       // телефон
  'items_json',  // JSON со списком блюд
  'total',       // сумма
  'created_at',  // ISO
  'updated_at'   // ISO
];

// === ENTRY POINTS ===

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || '{}');
    const action = (data.action || 'create').toLowerCase();

    let result;
    switch (action) {
      case 'create':
        result = createOrder_(data);
        break;
      case 'list':
        result = listOrders_(data);
        break;
      case 'updatestatus':
        result = updateOrderStatus_(data);
        break;
      default:
        throw new Error('Unknown action: ' + action);
    }

    return jsonResponse_(result);
  } catch (err) {
    return jsonError_(err);
  }
}

function doGet(e) {
  // Для отладки: GET ?action=list
  try {
    const action = (e.parameter.action || 'ping').toLowerCase();
    if (action === 'list') {
      const result = listOrders_({});
      return jsonResponse_(result);
    }
    return jsonResponse_({ ok: true, message: 'CYBER DRAGON API OK' });
  } catch (err) {
    return jsonError_(err);
  }
}

// === CORE ===

/**
 * Создание заказа (action: "create")
 * Ожидает payload из menu.html:
 * {
 *   id, code, status, type, table, pickup_in,
 *   address, phone, items, total, created_at
 * }
 */
function createOrder_(data) {
  const sheet = getOrdersSheet_();

  const nowIso = new Date().toISOString();
  const id = data.id || ('CD-' + nowIso.replace(/[-:TZ.]/g, '').slice(0, 14));
  const code = data.code || generateShortCode_(); // запасной вариант, если фронт не пришлёт

  const rowObj = {
    id:          id,
    code:        code,
    status:      data.status || 'NEW',
    type:        data.type   || '',
    table:       data.table  || '',
    pickup_in:   data.pickup_in || '',
    address:     data.address || '',
    phone:       data.phone   || '',
    items_json:  JSON.stringify(data.items || []),
    total:       Number(data.total || 0),
    created_at:  data.created_at || nowIso,
    updated_at:  nowIso
  };

  const headers = ensureHeaders_(sheet);
  const row = headers.map(function (h) { return rowObj[h] !== undefined ? rowObj[h] : ''; });

  const nextRow = sheet.getLastRow() + 1;
  sheet.getRange(nextRow, 1, 1, headers.length).setValues([row]);

  return {
    ok: true,
    id: id,
    code: code,
    row: nextRow
  };
}

/**
 * Получить список заказов (action: "list")
 * Можно потом фильтровать по статусу, дате и т.д.
 */
function listOrders_(data) {
  const sheet = getOrdersSheet_();
  const values = sheet.getDataRange().getValues();
  if (values.length < 2) {
    return { ok: true, orders: [] };
  }

  const headers = values[0];
  const rows = values.slice(1);

  const orders = rows.map(function (row) {
    const obj = {};
    headers.forEach(function (h, i) {
      obj[h] = row[i];
    });

    // items_json -> items (parsed)
    if (obj.items_json) {
      try {
        obj.items = JSON.parse(obj.items_json);
      } catch (e) {
        obj.items = [];
      }
    } else {
      obj.items = [];
    }

    return obj;
  });

  // Можно сюда добавить сортировку по created_at, если надо
  return {
    ok: true,
    count: orders.length,
    orders: orders
  };
}

/**
 * Обновить статус заказа (action: "updateStatus")
 * Ожидает:
 *   { action:"updateStatus", id:"...", status:"READY" }
 *   или     { action:"updateStatus", code:"a123", status:"READY" }
 */
function updateOrderStatus_(data) {
  const sheet = getOrdersSheet_();
  const headers = ensureHeaders_(sheet);

  const idxId     = headers.indexOf('id');
  const idxCode   = headers.indexOf('code');
  const idxStatus = headers.indexOf('status');
  const idxUpd    = headers.indexOf('updated_at');

  if (idxId < 0 || idxStatus < 0) {
    throw new Error('Headers not found. Check Orders sheet.');
  }

  const id   = data.id   || '';
  const code = data.code || '';
  const newStatus = data.status || '';

  if (!id && !code) {
    throw new Error('id or code required');
  }
  if (!newStatus) {
    throw new Error('status required');
  }

  const values = sheet.getDataRange().getValues();
  if (values.length < 2) {
    throw new Error('No rows in Orders');
  }

  let updatedRow = -1;

  for (var r = 1; r < values.length; r++) {
    const row = values[r];
    const rowId   = idxId   >= 0 ? row[idxId]   : '';
    const rowCode = idxCode >= 0 ? row[idxCode] : '';
    if ((id && rowId === id) || (code && rowCode === code)) {
      // нашли строку
      if (idxStatus >= 0) {
        sheet.getRange(r + 1, idxStatus + 1).setValue(newStatus);
      }
      if (idxUpd >= 0) {
        sheet.getRange(r + 1, idxUpd + 1).setValue(new Date().toISOString());
      }
      updatedRow = r + 1;
      break;
    }
  }

  if (updatedRow === -1) {
    throw new Error('Order not found for id/code');
  }

  return {
    ok: true,
    row: updatedRow,
    status: newStatus
  };
}

// === HELPERS ===

function getOrdersSheet_() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = ss.getSheetByName(ORDERS_SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(ORDERS_SHEET_NAME);
  }
  return sheet;
}

function ensureHeaders_(sheet) {
  const firstRow = sheet.getRange(1, 1, 1, sheet.getLastColumn() || HEADERS.length).getValues()[0];
  const hasAny = firstRow.some(function (v) { return v && String(v).trim() !== ''; });

  if (!hasAny) {
    // Пустой лист — ставим наши заголовки
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    return HEADERS;
  }

  // Если заголовки уже есть, используем их (чтобы не ломать, если ты вручную что-то допишешь)
  const lastCol = sheet.getLastColumn();
  const headerValues = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
  return headerValues;
}

function jsonResponse_(obj) {
  const out = ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
  return out;
}

function jsonError_(err) {
  const payload = {
    ok: false,
    error: err && err.message ? err.message : String(err)
  };
  return jsonResponse_(payload);
}

/**
 * Запасная генерация короткого кода (если не пришёл с фронта).
 * Формат: a001–z999.
 */
function generateShortCode_() {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const letter = letters[Math.floor(Math.random() * letters.length)];
  const num = Math.floor(Math.random() * 999) + 1;
  return letter + ('000' + num).slice(-3);
}
