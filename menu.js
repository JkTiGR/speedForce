const menuData = {
  'featured': [
    {key: 'MIX_WARZYW_SMAZONY', price: 32.00, translations: {pl: 'Mix warzyw smażony', en: 'Fried vegetable mix', ru: 'Жареная овощная смесь', ua: 'Смажена овочева суміш', de: 'Gebratene Gemüsemischung', zh: '炒蔬菜混合', vn: 'Hỗn hợp rau xào'}},
    {key: 'RYZ_SMAZONY_Z_WARZYWAMI', price: 32.00, translations: {pl: 'Ryż smażony z warzywami', en: 'Fried rice with vegetables', ru: 'Жареный рис с овощами', ua: 'Смажений рис з овочами', de: 'Gebratener Reis mit Gemüse', zh: '蔬菜炒饭', vn: 'Cơm chiên rau củ'}},
    {key: 'MAKARON_SOJOWY_Z_WARZYWAMI', price: 32.00, translations: {pl: 'Makaron sojowy z warzywami', en: 'Soy noodles with vegetables', ru: 'Соевые макароны с овощами', ua: 'Соєва локшина з овочами', de: 'Sojanudeln mit Gemüse', zh: '蔬菜豆面', vn: 'Mì đậu nành với rau củ'}},
    {key: 'MAKARON_SMAZONY_Z_WARZYWAMI', price: 32.00, translations: {pl: 'Makaron smażony z warzywami', en: 'Fried noodles with vegetables', ru: 'Жареная лапша с овощами', ua: 'Смажена локшина з овочами', de: 'Gebratene Nudeln mit Gemüse', zh: '蔬菜炒面', vn: 'Mì xào rau củ'}},
    {key: 'TOFU_5_SMAKOW', price: 33.00, translations: {pl: 'Tofu 5 smaków', en: 'Tofu 5 flavors', ru: 'Тофу 5 вкусов', ua: 'Тофу 5 смаків', de: 'Tofu 5 Geschmäcker', zh: '五味豆腐', vn: 'Đậu phụ 5 vị'}},
    {key: 'TOFU_CURRY', price: 35.00, translations: {pl: 'Tofu curry', en: 'Tofu curry', ru: 'Тофу карри', ua: 'Тофу каррі', de: 'Tofu Curry', zh: '咖喱豆腐', vn: 'Đậu phụ cà ri'}},
    {key: 'TOFU_Z_WARZYWAMI', price: 33.00, translations: {pl: 'Tofu z warzywami', en: 'Tofu with vegetables', ru: 'Тофу с овощами', ua: 'Тофу з овочами', de: 'Tofu mit Gemüse', zh: '蔬菜豆腐', vn: 'Đậu phụ với rau củ'}},
    {key: 'KALMORY_Z_GORACEGO_POLMISKA', price: 50.00, translations: {pl: 'Kalmary z gorącego półmiska', en: 'Squid from hot plate', ru: 'Кальмары с горячей тарелки', ua: 'Кальмари з гарячої тарілки', de: 'Kalmar vom heißen Teller', zh: '热盘鱿鱼', vn: 'Mực từ đĩa nóng'}},
    {key: 'GOLONKA_Z_GORACEGO_POLMISKA', price: 40.00, translations: {pl: 'Golonka z gorącego półmiska', en: 'Knuckle from hot plate', ru: 'Голяшка с горячей тарелки', ua: 'Голяшка з гарячої тарілки', de: 'Haxe vom heißen Teller', zh: '热盘猪蹄', vn: 'Giò heo từ đĩa nóng'}},
    {key: 'KREWETKI_Z_GORACEGO_POLMISKA', price: 47.00, translations: {pl: 'Krewetki z gorącego półmiska', en: 'Shrimp from hot plate', ru: 'Креветки с горячей тарелки', ua: 'Креветки з гарячої тарілки', de: 'Garnelen vom heißen Teller', zh: '热盘虾', vn: 'Tôm từ đĩa nóng'}},
    {key: 'KACZKA_Z_GORACEGO_POLMISKA', price: 43.00, translations: {pl: 'Kaczka z gorącego półmiska', en: 'Duck from hot plate', ru: 'Утка с горячей тарелки', ua: 'Качки з гарячої тарілки', de: 'Ente vom heißen Teller', zh: '热盘鸭', vn: 'Vịt từ đĩa nóng'}},
    {key: 'WOLOWINA_Z_GORACEGO_POLMISKA', price: 43.00, translations: {pl: 'Wołowina z gorącego półmiska', en: 'Beef from hot plate', ru: 'Говядина с горячей тарелки', ua: 'Яловичина з гарячої тарілки', de: 'Rindfleisch vom heißen Teller', zh: '热盘牛肉', vn: 'Bò từ đĩa nóng'}} 
  ],
  'soups': [
    {key: 'ROSOL_Z_MAKARONEM_SOJOWYM_I_KURCZAKIEM', price: 18.00, translations: {pl: 'Rosół z makaronem sojowym i kurczakiem', en: 'Chicken broth with soy noodles', ru: 'Куриный бульон с соевой лапшой', ua: 'Курячий бульйон з соєвою локшиною', de: 'Hühnerbrühe mit Sojanudeln', zh: '鸡肉豆面汤', vn: 'Nước dùng gà với mì đậu nành'}},
    {key: 'ZUPA_KWASNO_PIKANTNA_Z_KURCZAKIEM', price: 25.00, translations: {pl: 'Zupa kwaśno-pikantna z kurczakiem', en: 'Sour-spicy soup with chicken', ru: 'Кисло-острый суп с курицей', ua: 'Кисло-гострий суп з куркою', de: 'Sauer-scharfe Suppe mit Huhn', zh: '酸辣鸡汤', vn: 'Súp chua cay gà'}},
    {key: 'ZUPA_WONTON', price: 25.00, translations: {pl: 'Zupa Wonton', en: 'Wonton soup', ru: 'Суп Вонтон', ua: 'Суп Вонтон', de: 'Wonton-Suppe', zh: '云吞汤', vn: 'Súp hoành thánh'}},
    {key: 'ZUPA_TOM_KHA_GAI_Z_KREWETKAMI', price: 26.00, translations: {pl: 'Zupa Tom Kha Gai z krewetkami', en: 'Tom Kha Gai soup with shrimp', ru: 'Суп Том Кха Гай с креветками', ua: 'Суп Том Кха Гай з креветками', de: 'Tom Kha Gai-Suppe mit Garnelen', zh: '虾仁冬卡盖汤', vn: 'Súp Tom Kha Gai với tôm'}},
    {key: 'ZUPA_TOM_KHA_GAI_Z_KURCZAKIEM', price: 25.00, translations: {pl: 'Zupa Tom Kha Gai z kurczakiem', en: 'Tom Kha Gai soup with chicken', ru: 'Суп Том Кха Гай с курицей', ua: 'Суп Том Кха Гай з куркою', de: 'Tom Kha Gai-Suppe mit Huhn', zh: '鸡肉冬卡盖汤', vn: 'Súp Tom Kha Gai với gà'}},
    {key: 'ZUPA_PO_TAJSKU_Z_KURCZAKIEM', price: 25.00, translations: {pl: 'Zupa po tajsku z kurczakiem', en: 'Thai soup with chicken', ru: 'Тайский суп с курицей', ua: 'Тайський суп з куркою', de: 'Thailändische Suppe mit Huhn', zh: '泰式鸡汤', vn: 'Súp Thái với gà'}},
    {key: 'ZUPA_PO_TAJSKU_Z_KREWETKAMI', price: 26.00, translations: {pl: 'Zupa po tajsku z krewetkami', en: 'Thai soup with shrimp', ru: 'Тайский суп с креветками', ua: 'Тайський суп з креветками', de: 'Thailändische Suppe mit Garnelen', zh: '泰式虾汤', vn: 'Súp Thái với tôm'}},
    {key: 'ZUPA_KREWETKOWA_PO_CHINSKU', price: 26.00, translations: {pl: 'Zupa krewetkowa po chińsku', en: 'Chinese shrimp soup', ru: 'Китайский креветочный суп', ua: 'Китайський креветковий суп', de: 'Chinesische Garnelensuppe', zh: '中式虾汤', vn: 'Súp tôm kiểu Trung Quốc'}},
    {key: 'ZUPA_PHO_Z_KURCZAKIEM', price: 33.00, translations: {pl: 'Zupa Pho z kurczakiem', en: 'Pho soup with chicken', ru: 'Суп Фо с курицей', ua: 'Суп Фо з куркою', de: 'Pho-Suppe mit Huhn', zh: '鸡肉河粉汤', vn: 'Súp Phở gà'}},
    {key: 'ZUPA_PHO_Z_WOLOWINA', price: 35.00, translations: {pl: 'Zupa Pho z wołowiną', en: 'Pho soup with beef', ru: 'Суп Фо с говядиной', ua: 'Суп Фо з яловичиною', de: 'Pho-Suppe mit Rindfleisch', zh: '牛肉河粉汤', vn: 'Súp Phở bò'}}
  ],
  'appetizers': [
    {key: 'CHIPSY_KREWETKOWE', price: 15.00, translations: {pl: 'Chipsy krewetkowe', en: 'Shrimp chips', ru: 'Креветочные чипсы', ua: 'Креветкові чіпси', de: 'Garnelenchips', zh: '虾片', vn: 'Bánh phồng tôm'}},
    {key: 'FRYTKI', price: 15.00, translations: {pl: 'Frytki', en: 'French fries', ru: 'Картофель фри', ua: 'Картопля фрі', de: 'Pommes frites', zh: '薯条', vn: 'Khoai tây chiên'}},
    {key: 'SAJGONKI_WIEPRZOWE_3_SZT', price: 22.00, translations: {pl: 'Sajgonki wieprzowe 3 szt.', en: 'Pork spring rolls 3 pcs.', ru: 'Спринг-роллы со свининой 3 шт.', ua: 'Спринг-роли зі свининою 3 шт.', de: 'Frühlingsrollen mit Schweinefleisch 3 Stk.', zh: '猪肉春卷 3 件', vn: 'Nem heo 3 cái'}},
    {key: 'SAJGONKI_WEGETARIANSKIE', price: 24.00, translations: {pl: 'Sajgonki wegetariańskie', en: 'Vegetarian spring rolls', ru: 'Вегетарианские спринг-роллы', ua: 'Вегетаріанські спринг-роли', de: 'Vegetarische Frühlingsrollen', zh: '素春卷', vn: 'Nem chay'}},
    {key: 'SAJGONKI_Z_SURO WKA_I_RYZEM', price: 24.00, translations: {pl: 'Sajgonki z surówką i ryżem', en: 'Spring rolls with salad and rice', ru: 'Спринг-роллы с салатом и рисом', ua: 'Спринг-роли з салатом і рисом', de: 'Frühlingsrollen mit Salat und Reis', zh: '春卷配沙拉和米饭', vn: 'Nem với salad và cơm'}}
  ],
  'chicken_dishes': [
    {key: 'FILET_PIECZONY_Z_WARZYWAMI', price: 34.00, translations: {pl: 'Filet pieczony z warzywami', en: 'Roasted fillet with vegetables', ru: 'Жареный филе с овощами', ua: 'Запечене філе з овочами', de: 'Gebratener Filet mit Gemüse', zh: '烤鸡柳配蔬菜', vn: 'Thịt phi lê nướng với rau củ'}},
    {key: 'KURCZAK_SMAZONY_Z_WARZYWAMI', price: 34.00, translations: {pl: 'Kurczak smażony z warzywami', en: 'Fried chicken with vegetables', ru: 'Жареная курица с овощами', ua: 'Смажена курка з овочами', de: 'Gebratenes Huhn mit Gemüse', zh: '炒鸡肉配蔬菜', vn: 'Gà xào rau củ'}},
    {key: 'KURCZAK_W_SOSIE_CURRY', price: 34.00, translations: {pl: 'Kurczak w sosie curry', en: 'Chicken in curry sauce', ru: 'Курица в соусе карри', ua: 'Курка в соусі каррі', de: 'Huhn in Currysoße', zh: '咖喱鸡肉酱', vn: 'Gà sốt cà ri'}},
    {key: 'KURCZAK_SPECJALNY', price: 34.00, translations: {pl: 'Kurczak specjalny', en: 'Special chicken', ru: 'Специальная курица', ua: 'Спеціальна курка', de: 'Speziales Huhn', zh: '特色鸡肉', vn: 'Gà đặc biệt'}},
    {key: 'KURCZAK_5_SMAKOW', price: 34.00, translations: {pl: 'Kurczak 5 smaków', en: 'Chicken 5 flavors', ru: 'Курица 5 вкусов', ua: 'Курка 5 смаків', de: 'Huhn 5 Geschmäcker', zh: '五味鸡肉', vn: 'Gà 5 vị'}},
    {key: 'KURCZAK_W_CIESCIE_KOKOSOWYM', price: 34.00, translations: {pl: 'Kurczak w cieście kokosowym', en: 'Chicken in coconut batter', ru: 'Курица в кокосовом тесте', ua: 'Курка в кокосовому тісті', de: 'Huhn in Kokosteig', zh: '椰子面糊鸡肉', vn: 'Gà tẩm bột dừa'}},
    {key: 'KURCZAK_CHRUPIACY', price: 34.00, translations: {pl: 'Kurczak chrupiący', en: 'Crispy chicken', ru: 'Хрустящая курица', ua: 'Хрустка курка', de: 'Knuspriges Huhn', zh: '脆鸡肉', vn: 'Gà giòn'}},
    {key: 'KURCZAK_W_SOSIE_SLOD KO_KWASNYM', price: 34.00, translations: {pl: 'Kurczak w sosie słodko-kwaśnym', en: 'Chicken in sweet and sour sauce', ru: 'Курица в кисло-сладком соусе', ua: 'Курка в кисло-солодкому соусі', de: 'Huhn in süß-saurer Soße', zh: '酸甜鸡肉酱', vn: 'Gà sốt chua ngọt'}},
    {key: 'KURCZAK_PO_CHINSKU', price: 35.00, translations: {pl: 'Kurczak po chińsku', en: 'Chinese chicken', ru: 'Курица по-китайски', ua: 'Курка по-китайськи', de: 'Huhn auf chinesische Art', zh: '中式鸡肉', vn: 'Gà kiểu Trung Quốc'}},
    {key: 'KURCZAK_PO_SYCZUANSKU', price: 35.00, translations: {pl: 'Kurczak po syczuańsku', en: 'Sichuan chicken', ru: 'Курица по-сычуаньски', ua: 'Курка по-сичuanськи', de: 'Huhn nach Sichuan-Art', zh: '四川鸡肉', vn: 'Gà Tứ Xuyên'}},
    {key: 'KURCZAK_HA_LINH', price: 35.00, translations: {pl: 'Kurczak Ha Linh', en: 'Ha Linh chicken', ru: 'Курица Ха Линь', ua: 'Курка Ха Лінь', de: 'Ha Linh Huhn', zh: 'Ha Linh鸡肉', vn: 'Gà Ha Linh'}},
    {key: 'FILET_PIECZONY', price: 37.00, translations: {pl: 'Filet pieczony', en: 'Roasted fillet', ru: 'Жареный филе', ua: 'Запечене філе', de: 'Gebratener Filet', zh: '烤鸡柳', vn: 'Thịt phi lê nướng'}},
    {key: 'KURCZAK_W_SEZAMIE_SMAZONY', price: 37.00, translations: {pl: 'Kurczak w sezamie (smażony)', en: 'Sesame chicken (fried)', ru: 'Курица в кунжуте (жареная)', ua: 'Курка в кунжуті (смажена)', de: 'Huhn in Sesam (gebraten)', zh: '芝麻鸡肉 (炒)', vn: 'Gà mè (chiên)'}}
  ],
  'pork_dishes': [
    {key: 'WIEPRZOWINA_W_SOSIE_CURRY', price: 35.00, translations: {pl: 'Wieprzowina w sosie curry', en: 'Pork in curry sauce', ru: 'Свинина в соусе карри', ua: 'Свинина в соусі каррі', de: 'Schweinefleisch in Currysoße', zh: '咖喱猪肉酱', vn: 'Heo sốt cà ri'}},
    {key: 'WIEPRZOWINA_5_SMAKOW', price: 35.00, translations: {pl: 'Wieprzowina 5 smaków', en: 'Pork 5 flavors', ru: 'Свинина 5 вкусов', ua: 'Свинина 5 смаків', de: 'Schweinefleisch 5 Geschmäcker', zh: '五味猪肉', vn: 'Heo 5 vị'}},
    {key: 'WIEPRZOWINA_PO_CHINSKU', price: 35.00, translations: {pl: 'Wieprzowina po chińsku', en: 'Chinese pork', ru: 'Свинина по-китайски', ua: 'Свинина по-китайськи', de: 'Schweinefleisch auf chinesische Art', zh: '中式猪肉', vn: 'Heo kiểu Trung Quốc'}}
  ],
  'beef_dishes': [
    {key: 'WOLOWINA_5_SMAKOW', price: 38.00, translations: {pl: 'Wołowina 5 smaków', en: 'Beef 5 flavors', ru: 'Говядина 5 вкусов', ua: 'Яловичина 5 смаків', de: 'Rindfleisch 5 Geschmäcker', zh: '五味牛肉', vn: 'Bò 5 vị'}},
    {key: 'WOLOWINA_W_SOSIE_CURRY', price: 38.00, translations: {pl: 'Wołowina w sosie curry', en: 'Beef in curry sauce', ru: 'Говядина в соусе карри', ua: 'Яловичина в соусі каррі', de: 'Rindfleisch in Currysoße', zh: '咖喱牛肉酱', vn: 'Bò sốt cà ri'}},
    {key: 'WOLOWINA_PO_CHINSKU', price: 38.00, translations: {pl: 'Wołowina po chińsku', en: 'Chinese beef', ru: 'Говядина по-китайски', ua: 'Яловичина по-китайськи', de: 'Rindfleisch auf chinesische Art', zh: '中式牛肉', vn: 'Bò kiểu Trung Quốc'}},
    {key: 'WOLOWINA_PO_SYCZUANSKU', price: 38.00, translations: {pl: 'Wołowina po syczuańsku', en: 'Sichuan beef', ru: 'Говядина по-сычуаньски', ua: 'Яловичина по-сичuanськи', de: 'Rindfleisch nach Sichuan-Art', zh: '四川牛肉', vn: 'Bò Tứ Xuyên'}}
  ],
  'fried_chinese_noodles': [
    {key: 'MAKARON_CHINSKI_SMAZONY', price: 35.00, translations: {pl: 'Makaron chiński smażony', en: 'Fried Chinese noodles', ru: 'Жареная китайская лапша', ua: 'Смажена китайська локшина', de: 'Gebratene chinesische Nudeln', zh: '炒中式面条', vn: 'Mì Trung Quốc xào'}}
  ],
  'fried_soy_noodles': [
    {key: 'MAKARON_SOJOWY_SMAZONY', price: 35.00, translations: {pl: 'Makaron sojowy smażony', en: 'Fried soy noodles', ru: 'Жареная соевая лапша', ua: 'Смажена соєва локшина', de: 'Gebratene Sojanudeln', zh: '炒豆面条', vn: 'Mì đậu nành xào'}}
  ],
  'udon_noodles': [
    {key: 'MAKARON_UDON_Z_TOFU', price: 35.00, translations: {pl: 'Makaron udon z tofu', en: 'Udon noodles with tofu', ru: 'Лапша удон с тофу', ua: 'Локшина удон з тофу', de: 'Udon-Nudeln mit Tofu', zh: '豆腐乌冬面', vn: 'Mì udon với đậu phụ'}},
    {key: 'MAKARON_UDON_Z_KURCZAKIEM', price: 35.00, translations: {pl: 'Makaron udon z kurczakiem', en: 'Udon noodles with chicken', ru: 'Лапша удон с курицей', ua: 'Локшина удон з куркою', de: 'Udon-Nudeln mit Huhn', zh: '鸡肉乌冬面', vn: 'Mì udon với gà'}},
    {key: 'MAKARON_UDON_Z_KURCZAKIEM_PIECZONYM', price: 40.00, translations: {pl: 'Makaron udon z kurczakiem pieczonym', en: 'Udon noodles with roasted chicken', ru: 'Лапша удон с жареной курицей', ua: 'Локшина удон з запеченою куркою', de: 'Udon-Nudeln mit gebratenem Huhn', zh: '烤鸡乌冬面', vn: 'Mì udon với gà nướng'}},
    {key: 'MAKARON_UDON_Z_WOLOWINA', price: 40.00, translations: {pl: 'Makaron udon z wołowiną', en: 'Udon noodles with beef', ru: 'Лапша удон с говядиной', ua: 'Локшина удон з яловичиною', de: 'Udon-Nudeln mit Rindfleisch', zh: '牛肉乌冬面', vn: 'Mì udon với bò'}},
    {key: 'MAKARON_UDON_Z_KREWETKAMI', price: 42.00, translations: {pl: 'Makaron udon z krewetkami', en: 'Udon noodles with shrimp', ru: 'Лапша удон с креветками', ua: 'Локшина удон з креветками', de: 'Udon-Nudeln mit Garnelen', zh: '虾仁乌冬面', vn: 'Mì udon với tôm'}}
  ],
  'pad_thai': [
    {key: 'PAD_THAI_Z_TOFU', price: 35.00, translations: {pl: 'Pad Thai z tofu', en: 'Pad Thai with tofu', ru: 'Пад Тай с тофу', ua: 'Пад Тай з тофу', de: 'Pad Thai mit Tofu', zh: '豆腐泰式炒河粉', vn: 'Pad Thai với đậu phụ'}},
    {key: 'PAD_THAI_Z_KURCZAKIEM', price: 37.00, translations: {pl: 'Pad Thai z kurczakiem', en: 'Pad Thai with chicken', ru: 'Пад Тай с курицей', ua: 'Пад Тай з куркою', de: 'Pad Thai mit Huhn', zh: '鸡肉泰式炒河粉', vn: 'Pad Thai với gà'}},
    {key: 'PAD_THAI_Z_KREWETKAMI', price: 44.00, translations: {pl: 'Pad Thai z krewetkami', en: 'Pad Thai with shrimp', ru: 'Пад Тай с креветками', ua: 'Пад Тай з креветками', de: 'Pad Thai mit Garnelen', zh: '虾仁泰式炒河粉', vn: 'Pad Thai với tôm'}},
    {key: 'PAD_THAI_Z_WOLOWINA', price: 40.00, translations: {pl: 'Pad Thai z wołowiną', en: 'Pad Thai with beef', ru: 'Пад Тай с говядиной', ua: 'Пад Тай з яловичиною', de: 'Pad Thai mit Rindfleisch', zh: '牛肉泰式炒河粉', vn: 'Pad Thai với bò'}}
  ],
  'fried_rice': [
    {key: 'RYZ_SMAZONY_Z_WARZYWAMI', price: 32.00, translations: {pl: 'Ryż smażony z warzywami', en: 'Fried rice with vegetables', ru: 'Жареный рис с овощами', ua: 'Смажений рис з овочами', de: 'Gebratener Reis mit Gemüse', zh: '蔬菜炒饭', vn: 'Cơm chiên rau củ'}},
    {key: 'RYZ_SMAZONY_Z_TOFU', price: 33.00, translations: {pl: 'Ryż smażony z tofu', en: 'Fried rice with tofu', ru: 'Жареный рис с тофу', ua: 'Смажений рис з тофу', de: 'Gebratener Reis mit Tofu', zh: '豆腐炒饭', vn: 'Cơm chiên đậu phụ'}},
    {key: 'RYZ_SMAZONY_Z_KURCZAKIEM', price: 34.00, translations: {pl: 'Ryż smażony z kurczakiem', en: 'Fried rice with chicken', ru: 'Жареный рис с курицей', ua: 'Смажений рис з куркою', de: 'Gebratener Reis mit Huhn', zh: '鸡肉炒饭', vn: 'Cơm chiên gà'}},
    {key: 'RYZ_SMAZONY_Z_WIEPRZOWINA', price: 35.00, translations: {pl: 'Ryż smażony z wieprzowiną', en: 'Fried rice with pork', ru: 'Жареный рис со свининой', ua: 'Смажений рис зі свининою', de: 'Gebratener Reis mit Schweinefleisch', zh: '猪肉炒饭', vn: 'Cơm chiên heo'}},
    {key: 'RYZ_SMAZONY_Z_WOLOWINA', price: 38.00, translations: {pl: 'Ryż smażony z wołowiną', en: 'Fried rice with beef', ru: 'Жареный рис с говядиной', ua: 'Смажений рис з яловичиною', de: 'Gebratener Reis mit Rindfleisch', zh: '牛肉炒饭', vn: 'Cơm chiên bò'}},
    {key: 'RYZ_SMAZONY_Z_KACZKA', price: 40.00, translations: {pl: 'Ryż smażony z kaczką', en: 'Fried rice with duck', ru: 'Жареный рис с уткой', ua: 'Смажений рис з качкою', de: 'Gebratener Reis mit Ente', zh: '鸭肉炒饭', vn: 'Cơm chiên vịt'}},
    {key: 'RYZ_SMAZONY_Z_KREWETKAMI', price: 42.00, translations: {pl: 'Ryż smażony z krewetkami', en: 'Fried rice with shrimp', ru: 'Жареный рис с креветками', ua: 'Смажений рис з креветками', de: 'Gebratener Reis mit Garnelen', zh: '虾仁炒饭', vn: 'Cơm chiên tôm'}}
  ],
  'duck_dishes': [
    {key: 'KACZKA_CHRUPIACA_Z_WARZYWAMI', price: 38.00, translations: {pl: 'Kaczka chrupiąca z warzywami', en: 'Crispy duck with vegetables', ru: 'Хрустящая утка с овощами', ua: 'Хрустка качка з овочами', de: 'Knusprige Ente mit Gemüse', zh: '脆鸭配蔬菜', vn: 'Vịt giòn với rau củ'}},
    {key: 'KACZKA_PO_SYCZUANSKU', price: 38.00, translations: {pl: 'Kaczka po syczuańsku', en: 'Sichuan duck', ru: 'Утка по-сычуаньски', ua: 'Качки по-сичuanськи', de: 'Ente nach Sichuan-Art', zh: '四川鸭肉', vn: 'Vịt Tứ Xuyên'}},
    {key: 'KACZKA_W_SOSIE_CURRY', price: 38.00, translations: {pl: 'Kaczka w sosie curry', en: 'Duck in curry sauce', ru: 'Утка в соусе карри', ua: 'Качки в соусі каррі', de: 'Ente in Currysoße', zh: '咖喱鸭肉酱', vn: 'Vịt sốt cà ri'}},
    {key: 'KACZKA_PO_CHINSKU', price: 38.00, translations: {pl: 'Kaczka po chińsku', en: 'Chinese duck', ru: 'Утка по-китайски', ua: 'Качки по-китайськи', de: 'Ente auf chinesische Art', zh: '中式鸭肉', vn: 'Vịt kiểu Trung Quốc'}},
    {key: 'KACZKA_SLOD KO_KWASNA', price: 38.00, translations: {pl: 'Kaczka słodko-kwaśna', en: 'Sweet and sour duck', ru: 'Утка кисло-сладкая', ua: 'Качки кисло-солодка', de: 'Süß-saure Ente', zh: '酸甜鸭肉', vn: 'Vịt chua ngọt'}},
    {key: 'KACZKA_5_SMAKOW', price: 38.00, translations: {pl: 'Kaczka 5 smaków', en: 'Duck 5 flavors', ru: 'Утка 5 вкусов', ua: 'Качки 5 смаків', de: 'Ente 5 Geschmäcker', zh: '五味鸭肉', vn: 'Vịt 5 vị'}}
  ],
  'fish_seafood': [
    {key: 'KALMARY_Z_GORACEGO_POLMISKA', price: 50.00, translations: {pl: 'Kalmary z gorącego półmiska', en: 'Squid from hot plate', ru: 'Кальмары с горячей тарелки', ua: 'Кальмари з гарячої тарілки', de: 'Kalmar vom heißen Teller', zh: '热盘鱿鱼', vn: 'Mực từ đĩa nóng'}},
    {key: 'KREWETKI_Z_GORACEGO_POLMISKA', price: 47.00, translations: {pl: 'Krewetki z gorącego półmiska', en: 'Shrimp from hot plate', ru: 'Креветки с горячей тарелки', ua: 'Креветки з гарячої тарілки', de: 'Garnelen vom heißen Teller', zh: '热盘虾', vn: 'Tôm từ đĩa nóng'}},
    {key: 'RYBA_CHRUPIACA', price: 40.00, translations: {pl: 'Ryba chrupiąca', en: 'Crispy fish', ru: 'Хрустящая рыба', ua: 'Хрустка риба', de: 'Knuspriger Fisch', zh: '脆鱼', vn: 'Cá giòn'}},
    {key: 'KALMARY_5_SMAKOW', price: 45.00, translations: {pl: 'Kalmary 5 smaków', en: 'Squid 5 flavors', ru: 'Кальмары 5 вкусов', ua: 'Кальмари 5 смаків', de: 'Kalmar 5 Geschmäcker', zh: '五味鱿鱼', vn: 'Mực 5 vị'}},
    {key: 'KREWETKI_5_SMAKOW', price: 42.00, translations: {pl: 'Krewetki 5 smaków', en: 'Shrimp 5 flavors', ru: 'Креветки 5 вкусов', ua: 'Креветки 5 смаків', de: 'Garnelen 5 Geschmäcker', zh: '五味虾', vn: 'Tôm 5 vị'}},
    {key: 'KALMARY_W_SOSIE_CURRY', price: 45.00, translations: {pl: 'Kalmary w sosie curry', en: 'Squid in curry sauce', ru: 'Кальмары в соусе карри', ua: 'Кальмари в соусі каррі', de: 'Kalmar in Currysoße', zh: '咖喱鱿鱼酱', vn: 'Mực sốt cà ri'}},
    {key: 'KREWETKI_W_SOSIE_CURRY', price: 42.00, translations: {pl: 'Krewetki w sosie curry', en: 'Shrimp in curry sauce', ru: 'Креветки в соусе карри', ua: 'Креветки в соусі каррі', de: 'Garnelen in Currysoße', zh: '咖喱虾酱', vn: 'Tôm sốt cà ri'}},
    {key: 'KREWETKI_PO_CHINSKU', price: 42.00, translations: {pl: 'Krewetki po chińsku', en: 'Chinese shrimp', ru: 'Креветки по-китайски', ua: 'Креветки по-китайськи', de: 'Garnelen auf chinesische Art', zh: '中式虾', vn: 'Tôm kiểu Trung Quốc'}}
  ],
  'knuckle_dishes': [
    {key: 'GOLONKA_Z_GORACEGO_POLMISKA', price: 40.00, translations: {pl: 'Golonka z gorącego półmiska', en: 'Knuckle from hot plate', ru: 'Голяшка с горячей тарелки', ua: 'Голяшка з гарячої тарілки', de: 'Haxe vom heißen Teller', zh: '热盘猪蹄', vn: 'Giò heo từ đĩa nóng'}},
    {key: 'GOLONKA_5_SMAKOW', price: 38.00, translations: {pl: 'Golonka 5 smaków', en: 'Knuckle 5 flavors', ru: 'Голяшка 5 вкусов', ua: 'Голяшка 5 смаків', de: 'Haxe 5 Geschmäcker', zh: '五味猪蹄', vn: 'Giò heo 5 vị'}},
    {key: 'GOLONKA_PO_CHINSKU', price: 38.00, translations: {pl: 'Golonka po chińsku', en: 'Chinese knuckle', ru: 'Голяшка по-китайски', ua: 'Голяшка по-китайськи', de: 'Haxe auf chinesische Art', zh: '中式猪蹄', vn: 'Giò heo kiểu Trung Quốc'}},
    {key: 'GOLONKA_W_SOSIE_CURRY', price: 38.00, translations: {pl: 'Golonka w sosie curry', en: 'Knuckle in curry sauce', ru: 'Голяшка в соусе карри', ua: 'Голяшка в соусі каррі', de: 'Haxe in Currysoße', zh: '咖喱猪蹄酱', vn: 'Giò heo sốt cà ri'}}
  ],
  'curry': [
    {key: 'TOFU_CURRY', price: 35.00, translations: {pl: 'Tofu curry', en: 'Tofu curry', ru: 'Тофу карри', ua: 'Тофу каррі', de: 'Tofu Curry', zh: '咖喱豆腐', vn: 'Đậu phụ cà ri'}},
    {key: 'KURCZAK_W_SOSIE_CURRY', price: 34.00, translations: {pl: 'Kurczak w sosie curry', en: 'Chicken curry', ru: 'Курица карри', ua: 'Курка каррі', de: 'Huhn Curry', zh: '咖喱鸡肉', vn: 'Gà cà ri'}},
    {key: 'WIEPRZOWINA_W_SOSIE_CURRY', price: 35.00, translations: {pl: 'Wieprzowina w sosie curry', en: 'Pork curry', ru: 'Свинина карри', ua: 'Свинина каррі', de: 'Schweinefleisch Curry', zh: '咖喱猪肉', vn: 'Heo cà ri'}},
    {key: 'WOLOWINA_W_SOSIE_CURRY', price: 38.00, translations: {pl: 'Wołowina w sosie curry', en: 'Beef curry', ru: 'Говядина карри', ua: 'Яловичина каррі', de: 'Rindfleisch Curry', zh: '咖喱牛肉', vn: 'Bò cà ri'}},
    {key: 'KACZKA_W_SOSIE_CURRY', price: 38.00, translations: {pl: 'Kaczka w sosie curry', en: 'Duck curry', ru: 'Утка карри', ua: 'Качки каррі', de: 'Ente Curry', zh: '咖喱鸭肉', vn: 'Vịt cà ri'}},
    {key: 'KREWETKI_W_SOSIE_CURRY', price: 42.00, translations: {pl: 'Krewetki w sosie curry', en: 'Shrimp curry', ru: 'Креветки карри', ua: 'Креветки каррі', de: 'Garnelen Curry', zh: '咖喱虾', vn: 'Tôm cà ri'}},
    {key: 'KALMARY_W_SOSIE_CURRY', price: 45.00, translations: {pl: 'Kalmary w sosie curry', en: 'Squid curry', ru: 'Кальмары карри', ua: 'Кальмари каррі', de: 'Kalmar Curry', zh: '咖喱鱿鱼', vn: 'Mực cà ri'}},
    {key: 'GOLONKA_W_SOSIE_CURRY', price: 38.00, translations: {pl: 'Golonka w sosie curry', en: 'Knuckle curry', ru: 'Голяшка карри', ua: 'Голяшка каррі', de: 'Haxe Curry', zh: '咖喱猪蹄', vn: 'Giò heo cà ri'}}
  ],
  'hot_plate_dishes': [
    {key: 'KURCZAK_Z_GORACEGO_POLMISKA', price: 34.00, translations: {pl: 'Kurczak z gorącego półmiska', en: 'Chicken from hot plate', ru: 'Курица с горячей тарелки', ua: 'Курка з гарячої тарілки', de: 'Huhn vom heißen Teller', zh: '热盘鸡肉', vn: 'Gà từ đĩa nóng'}},
    {key: 'WIEPRZOWINA_Z_GORACEGO_POLMISKA', price: 35.00, translations: {pl: 'Wieprzowina z gorącego półmiska', en: 'Pork from hot plate', ru: 'Свинина с горячей тарелки', ua: 'Свинина з гарячої тарілки', de: 'Schweinefleisch vom heißen Teller', zh: '热盘猪肉', vn: 'Heo từ đĩa nóng'}},
    {key: 'WOLOWINA_Z_GORACEGO_POLMISKA', price: 43.00, translations: {pl: 'Wołowina z gorącego półmiska', en: 'Beef from hot plate', ru: 'Говядина с горячей тарелки', ua: 'Яловичина з гарячої тарілки', de: 'Rindfleisch vom heißen Teller', zh: '热盘牛肉', vn: 'Bò từ đĩa nóng'}},
    {key: 'KACZKA_Z_GORACEGO_POLMISKA', price: 43.00, translations: {pl: 'Kaczka z gorącego półmiska', en: 'Duck from hot plate', ru: 'Утка с горячей тарелки', ua: 'Качки з гарячої тарілки', de: 'Ente vom heißen Teller', zh: '热盘鸭肉', vn: 'Vịt từ đĩa nóng'}},
    {key: 'KREWETKI_Z_GORACEGO_POLMISKA', price: 47.00, translations: {pl: 'Krewetki z gorącego półmiska', en: 'Shrimp from hot plate', ru: 'Креветки с горячей тарелки', ua: 'Креветки з гарячої тарілки', de: 'Garnelen vom heißen Teller', zh: '热盘虾', vn: 'Tôm từ đĩa nóng'}},
    {key: 'KALMARY_Z_GORACEGO_POLMISKA', price: 50.00, translations: {pl: 'Kalmary z gorącego półmiska', en: 'Squid from hot plate', ru: 'Кальмары с горячей тарелки', ua: 'Кальмари з гарячої тарілки', de: 'Kalmar vom heißen Teller', zh: '热盘鱿鱼', vn: 'Mực từ đĩa nóng'}}
  ],
  'vegetarian_dishes': [
    {key: 'MIX_WARZYW_SMAZONY', price: 32.00, translations: {pl: 'Mix warzyw smażony', en: 'Fried vegetable mix', ru: 'Жареная овощная смесь', ua: 'Смажена овочева суміш', de: 'Gebratene Gemüsemischung', zh: '炒蔬菜混合', vn: 'Hỗn hợp rau xào'}},
    {key: 'RYZ_SMAZONY_Z_WARZYWAMI', price: 32.00, translations: {pl: 'Ryż smażony z warzywami', en: 'Fried rice with vegetables', ru: 'Жареный рис с овощами', ua: 'Смажений рис з овочами', de: 'Gebratener Reis mit Gemüse', zh: '蔬菜炒饭', vn: 'Cơm chiên rau củ'}},
    {key: 'MAKARON_SOJOWY_Z_WARZYWAMI', price: 32.00, translations: {pl: 'Makaron sojowy z warzywami', en: 'Soy noodles with vegetables', ru: 'Соевые макароны с овощами', ua: 'Соєва локшина з овочами', de: 'Sojanudeln mit Gemüse', zh: '蔬菜豆面', vn: 'Mì đậu nành với rau củ'}},
    {key: 'MAKARON_SMAZONY_Z_WARZYWAMI', price: 32.00, translations: {pl: 'Makaron smażony z warzywami', en: 'Fried noodles with vegetables', ru: 'Жареная лапша с овощами', ua: 'Смажена локшина з овочами', de: 'Gebratene Nudeln mit Gemüse', zh: '蔬菜炒面', vn: 'Mì xào rau củ'}},
    {key: 'TOFU_5_SMAKOW', price: 33.00, translations: {pl: 'Tofu 5 smaków', en: 'Tofu 5 flavors', ru: 'Тофу 5 вкусов', ua: 'Тофу 5 смаків', de: 'Tofu 5 Geschmäcker', zh: '五味豆腐', vn: 'Đậu phụ 5 vị'}},
    {key: 'TOFU_Z_WARZYWAMI', price: 33.00, translations: {pl: 'Tofu z warzywami', en: 'Tofu with vegetables', ru: 'Тофу с овощами', ua: 'Тофу з овочами', de: 'Tofu mit Gemüse', zh: '蔬菜豆腐', vn: 'Đậu phụ với rau củ'}},
    {key: 'TOFU_CURRY', price: 35.00, translations: {pl: 'Tofu curry', en: 'Tofu curry', ru: 'Тофу карри', ua: 'Тофу каррі', de: 'Tofu Curry', zh: '咖喱豆腐', vn: 'Đậu phụ cà ri'}}
  ],
  'sides': [
    {key: 'BIALY_RYZ', price: 10.00, translations: {pl: 'Biały ryż', en: 'White rice', ru: 'Белый рис', ua: 'Білий рис', de: 'Weißer Reis', zh: '白米', vn: 'Cơm trắng'}},
    {key: 'SMAZONY_RYZ', price: 12.00, translations: {pl: 'Smażony ryż', en: 'Fried rice', ru: 'Жареный рис', ua: 'Смажений рис', de: 'Gebratener Reis', zh: '炒饭', vn: 'Cơm chiên'}},
    {key: 'MAKARON', price: 12.00, translations: {pl: 'Makaron', en: 'Noodles', ru: 'Лапша', ua: 'Локшина', de: 'Nudeln', zh: '面条', vn: 'Mì'}},
    {key: 'MAKARON_SOJOWY', price: 12.00, translations: {pl: 'Makaron sojowy', en: 'Soy noodles', ru: 'Соевые лапша', ua: 'Соєва локшина', de: 'Sojanudeln', zh: '豆面条', vn: 'Mì đậu nành'}},
    {key: 'WARZYWA_SMAZONE', price: 15.00, translations: {pl: 'Warzywa smażone', en: 'Fried vegetables', ru: 'Жареные овощи', ua: 'Смажені овочі', de: 'Gebratenes Gemüse', zh: '炒蔬菜', vn: 'Rau xào'}},
    {key: 'SUROWKA', price: 10.00, translations: {pl: 'Surówka', en: 'Salad', ru: 'Салат', ua: 'Салат', de: 'Salat', zh: '沙拉', vn: 'Salad' }}
  ],
  'drinks': [
    {key: 'COLA_0_5L', price: 15.00, translations: {pl: 'Cola 0.5 l', en: 'Cola 0.5 l', ru: 'Кола 0,5 л', ua: 'Кола 0,5 л', de: 'Cola 0,5 l', zh: '可乐 0.5升', vn: 'Coca 0.5 l'}},
    {key: 'FANTA_0_5L', price: 15.00, translations: {pl: 'Fanta 0.5 l', en: 'Fanta 0.5 l', ru: 'Фанта 0,5 л', ua: 'Фанта 0,5 л', de: 'Fanta 0,5 l', zh: '芬达 0.5升', vn: 'Fanta 0.5 l'}},
    {key: 'SPRITE_0_5L', price: 15.00, translations: {pl: 'Sprite 0.5 l', en: 'Sprite 0.5 l', ru: 'Спрайт 0,5 л', ua: 'Спрайт 0,5 л', de: 'Sprite 0,5 l', zh: '雪碧 0.5升', vn: 'Sprite 0.5 l'}},
    {key: 'WODA_0_3L', price: 13.00, translations: {pl: 'Woda 0.3 l', en: 'Water 0.3 l', ru: 'Вода 0,3 л', ua: 'Вода 0,3 л', de: 'Wasser 0,3 l', zh: '水 0.3升', vn: 'Nước 0.3 l'}},
    {key: 'WODA_GAZOWANA_0_3L', price: 13.00, translations: {pl: 'Woda gazowana 0.3 l', en: 'Sparkling water 0.3 l', ru: 'Газировання вода 0,3 л', ua: 'Газована вода 0,3 л', de: 'Sprudelwasser 0,3 l', zh: '气泡水 0.3升', vn: 'Nước có ga 0.3 l'}},
    {key: 'SOK_POMARANCZOWY', price: 15.00, translations: {pl: 'Sok pomarańczowy', en: 'Orange juice', ru: 'Апельсиновый сок', ua: 'Апельсиновий сік', de: 'Orangensaft', zh: '橙汁', vn: 'Nước cam'}},
    {key: 'ALOES', price: 19.00, translations: {pl: 'Aloes', en: 'Aloe drink', ru: 'Напиток алоэ', ua: 'Напій алое', de: 'Aloe-Getränk', zh: '芦荟饮料', vn: 'Nước nha đam'}},
    {key: 'PIWO', price: 20.00, translations: {pl: 'Piwo', en: 'Beer', ru: 'Пиво', ua: 'Пиво', de: 'Bier', zh: '啤酒', vn: 'Bia'}}
  ]
};