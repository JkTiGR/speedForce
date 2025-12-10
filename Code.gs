const SHEET_NAME = 'Orders';    // имя листа
const HEADERS = {
  "Access-Control-Allow-Origin": "*",                // пока так, потом можно ограничить доменом
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};

// === Обработка preflight-запроса (OPTIONS) ===
function doOptions(e) {
  return ContentService
    .createTextOutput('')
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders(HEADERS);
}

// === Основной обработчик заказа ===
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return createCorsResponse({ ok: false, error: 'NO_POST_DATA' });
    }

    var data = JSON.parse(e.postData.contents);

    var ss = SpreadsheetApp.getActive();
    var sh = ss.getSheetByName(SHEET_NAME);
    if (!sh) {
      sh = ss.insertSheet(SHEET_NAME);
      // шапка
      sh.appendRow([
        'created_at',
        'id',
        'code',
        'status',
        'type',
        'lang',
        'table',
        'pickup_in',
        'address',
        'phone',
        'total',
        'items_json'
      ]);
    }

    var createdAt = data.created_at || new Date().toISOString();
    var lang      = data.lang  || '';
    var id        = data.id    || '';
    var code      = data.code  || '';
    var status    = data.status || 'NEW';
    var type      = data.type || '';
    var table     = data.table || '';
    var pickupIn  = data.pickup_in || '';
    var address   = data.address || '';
    var phone     = data.phone || '';
    var total     = data.total || 0;
    var itemsJson = JSON.stringify(data.items || []);

    sh.appendRow([
      createdAt,
      id,
      code,
      status,
      type,
      lang,
      table,
      pickupIn,
      address,
      phone,
      total,
      itemsJson
    ]);

    var res = {
      ok: true,
      id: id,
      code: code,
      row: sh.getLastRow()
    };
    return createCorsResponse(res);

  } catch (err) {
    var resErr = {
      ok: false,
      error: String(err)
    };
    return createCorsResponse(resErr);
  }
}

// helper для ответа с CORS-заголовками
function createCorsResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders(HEADERS);
}

// простой doGet — удобно проверять, что веб-апп живой
function doGet(e) {
  return ContentService
    .createTextOutput('OK')
    .setMimeType(ContentService.MimeType.TEXT);
}
