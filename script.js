const USD_TO_AZN = 1.7;
const MARKUP_RATE = 1.5;
const WHATSAPP_NUMBER = "994706642848";
const CART_STORAGE_KEY = "vertex-cart";

const content = {
  ru: {
    location: "Баку, Азербайджан",
    heroTitle: "Vertex — умные гаджеты для красивого дома",
    heroText:
      "Подборка актуальных smart-находок из AliExpress для безопасности, света и атмосферного интерьера с уже посчитанной розничной ценой.",
    orderNow: "Заказать сейчас",
    catalogCta: "Смотреть каталог",
    aboutLabel: "О магазине",
    aboutText:
      "Vertex собирает понятный каталог реальных товаров из AliExpress для дома и setup-зоны: мы отбираем сильные позиции, добавляем расчет с учетом доставки и показываем готовую цену для продажи в Баку.",
    aboutPoint1: "Премиальная подача и понятный выбор",
    aboutPoint2: "Только под заказ: 7-20 дней",
    aboutPoint3: "Помощь с запуском и настройкой",
    featured: "Собранная подборка",
    featuredText:
      "В каталоге только текущие позиции из AliExpress. Розничная цена считается по схеме: закупка + доставка, затем наценка 50%.",
    introTitle: "Технологии, которые делают пространство дороже на вид и удобнее в жизни",
    introText:
      "Новый каталог собран вокруг камер безопасности, RGB-подсветки и атмосферного декора для тех, кто хочет быстро обновить дом, рабочую зону или подарок без бесконечного поиска по маркетплейсам.",
    deliveryLabel1: "Формат доставки",
    deliveryValue1: "Под заказ",
    deliveryLabel2: "Средний срок",
    deliveryValue2: "7-20 дней",
    deliveryText:
      "Точный срок зависит от поставщика и подтверждается после оформления заказа.",
    productsTitle: "Каталог Vertex",
    productsText:
      "Все карточки привязаны к реальным товарам из AliExpress, а цены пересчитаны по формуле: закупка + ориентир доставки, затем розничная наценка 50%.",
    cartTitle: "Корзина покупок",
    cartText:
      "Добавляйте несколько товаров, меняйте количество и отправляйте весь заказ одним сообщением в WhatsApp.",
    cartSelected: "Выбранные товары",
    clearCart: "Очистить",
    cartEmpty: "Корзина пока пуста.",
    cartItemsCount: "Товаров",
    cartTotal: "Итого",
    cartCheckout: "Отправить корзину в WhatsApp",
    cartCheckoutOpen: "Открываем WhatsApp с корзиной.",
    cartCheckoutError: "Не удалось открыть WhatsApp. Проверьте браузер или приложение WhatsApp.",
    cartCheckoutEmpty: "Сначала добавьте товары в корзину.",
    whyTitle: "Почему покупают у Vertex",
    why1Title: "Отобранный ассортимент",
    why1Text:
      "Мы не перегружаем каталог десятками похожих позиций и показываем только сильные модели.",
    why2Title: "Локальный сервис",
    why2Text:
      "Быстрый контакт, заказ под клиента и честный срок поставки 7-20 дней без обещания наличия.",
    why3Title: "Эстетика + польза",
    why3Text:
      "Каждый товар должен не только работать, но и усиливать визуальный стиль пространства.",
    quickTitle: "Быстрый заказ",
    quickText:
      "Оставьте имя и номер телефона. После этого откроется WhatsApp с готовым сообщением для быстрого заказа.",
    productField: "Выбранный товар",
    nameField: "Имя",
    phoneField: "Номер телефона",
    submitOrder: "Отправить заявку",
    sending: "Открываем WhatsApp...",
    success: "Открываем WhatsApp с готовым сообщением.",
    error: "Не удалось открыть WhatsApp. Проверьте браузер или приложение WhatsApp.",
    consultTitle: "Нужна быстрая консультация?",
    footerText:
      "Vertex — smart living магазин в Баку с актуальной подборкой товаров из AliExpress для дома, света, безопасности и современной городской жизни.",
    stickyText: "Быстрый заказ без регистрации и лишних шагов",
    stickyCartPrefix: "Корзина",
    catalogBadge: "Vertex Select",
    inStock: "Под заказ",
    chooseProduct: "Быстрый заказ",
    addToCart: "В корзину",
    remove: "Удалить",
    waGreeting: "Здравствуйте! Хочу оформить заказ в Vertex.",
    waCartGreeting: "Здравствуйте! Хочу оформить заказ из корзины Vertex.",
    waProduct: "Товар",
    waProducts: "Товары",
    waPrice: "Цена",
    waSource: "Ссылка закупки",
    waTotal: "Итого",
    waName: "Имя",
    waPhone: "Телефон",
    waLocation: "Город",
  },
  az: {
    location: "Bakı, Azərbaycan",
    heroTitle: "Vertex — gözəl məkan üçün ağıllı qadcetlər",
    heroText:
      "AliExpress-dən seçilmiş təhlükəsizlik, işıq və dekor qadcetləri artıq çatdırılma nəzərə alınmış hazır satış qiyməti ilə təqdim olunur.",
    orderNow: "İndi sifariş et",
    catalogCta: "Kataloqa bax",
    aboutLabel: "Mağaza haqqında",
    aboutText:
      "Vertex ev və setup zonası üçün real AliExpress məhsullarından aydın kataloq qurur: güclü modelləri seçir, çatdırılmanı qiymətə əlavə edir və Bakı üçün hazır satış qiymətini göstərir.",
    aboutPoint1: "Premium təqdimat və aydın seçim",
    aboutPoint2: "Yalnız sifarişlə: 7-20 gün",
    aboutPoint3: "Quraşdırma və qoşulma dəstəyi",
    featured: "Toplanmış seçim",
    featuredText:
      "Kataloqda yalnız aktual AliExpress məhsulları var. Pərakəndə qiymət sxemi belədir: alış + çatdırılma, sonra 50% marja.",
    introTitle: "Məkana həm daha bahalı görünüş, həm də real rahatlıq verən texnologiyalar",
    introText:
      "Yeni kataloq təhlükəsizlik kameraları, RGB işıqlandırma və atmosfer dekoru üzərində qurulub ki, evi, iş zonasını və ya hədiyyə seçimini daha tez və rahat yeniləmək mümkün olsun.",
    deliveryLabel1: "Çatdırılma formatı",
    deliveryValue1: "Sifarişlə",
    deliveryLabel2: "Orta müddət",
    deliveryValue2: "7-20 gün",
    deliveryText:
      "Dəqiq müddət tədarükçüdən asılıdır və sifarişdən sonra təsdiqlənir.",
    productsTitle: "Vertex kataloqu",
    productsText:
      "Bütün kartlar real AliExpress məhsullarına bağlanıb və qiymətlər belə hesablanıb: alış + təxmini çatdırılma, daha sonra 50% satış marjası.",
    cartTitle: "Alış-veriş səbəti",
    cartText:
      "Bir neçə məhsul əlavə edin, sayını dəyişin və bütün sifarişi bir WhatsApp mesajı ilə göndərin.",
    cartSelected: "Seçilən məhsullar",
    clearCart: "Təmizlə",
    cartEmpty: "Səbət hələ boşdur.",
    cartItemsCount: "Məhsul sayı",
    cartTotal: "Cəmi",
    cartCheckout: "Səbəti WhatsApp ilə göndər",
    cartCheckoutOpen: "Səbət ilə WhatsApp açılır.",
    cartCheckoutError: "WhatsApp açılmadı. Brauzeri və ya WhatsApp tətbiqini yoxlayın.",
    cartCheckoutEmpty: "Əvvəlcə səbətə məhsul əlavə edin.",
    whyTitle: "Niyə Vertex seçilir",
    why1Title: "Seçilmiş assortiment",
    why1Text:
      "Kataloqu oxşar məhsullarla yormuruq və yalnız güclü modelləri göstəririk.",
    why2Title: "Lokal servis",
    why2Text:
      "Sürətli əlaqə, müştəriyə uyğun sifariş və stok vədi olmadan dürüst 7-20 günlük çatdırılma müddəti.",
    why3Title: "Estetika + fayda",
    why3Text:
      "Hər məhsul sadəcə işləməməli, həm də məkanın vizual stilini gücləndirməlidir.",
    quickTitle: "Sürətli sifariş",
    quickText:
      "Adınızı və telefon nömrənizi yazın. Bundan sonra sürətli sifariş üçün hazır mesajla WhatsApp açılacaq.",
    productField: "Seçilən məhsul",
    nameField: "Ad",
    phoneField: "Telefon nömrəsi",
    submitOrder: "Sifarişi göndər",
    sending: "WhatsApp açılır...",
    success: "Hazır mesajla WhatsApp açılır.",
    error: "WhatsApp açılmadı. Brauzeri və ya WhatsApp tətbiqini yoxlayın.",
    consultTitle: "Sürətli məsləhət lazımdır?",
    footerText:
      "Vertex — Bakı üçün AliExpress əsaslı ev, işıq, təhlükəsizlik və müasir şəhər həyatı məhsullarını seçən smart living mağazasıdır.",
    stickyText: "Qeydiyyatsız və əlavə addımsız sürətli sifariş",
    stickyCartPrefix: "Səbət",
    catalogBadge: "Vertex Select",
    inStock: "Sifarişlə",
    chooseProduct: "Sürətli sifariş",
    addToCart: "Səbətə at",
    remove: "Sil",
    waGreeting: "Salam! Vertex-dən sifariş vermək istəyirəm.",
    waCartGreeting: "Salam! Vertex səbətim üzrə sifariş vermək istəyirəm.",
    waProduct: "Məhsul",
    waProducts: "Məhsullar",
    waPrice: "Qiymət",
    waSource: "Alış linki",
    waTotal: "Cəmi",
    waName: "Ad",
    waPhone: "Telefon",
    waLocation: "Şəhər",
  },
};

const products = [
  {
    id: "doorview-1080",
    name: "Vertex DoorView 1080",
    image: "media/products/doorview.jpg",
    sourceStore: "AliExpress",
    sourceModel:
      "Tuya 1080P WiFi Door Bell Camera Google Alexa Smart Life Video Peephole PIR Motion Detector Digital Door Viewer with Intercom",
    sourceUrl: "https://aliexpress.ru/item/1005008424643638.html?sku_id=12000045017670074",
    basePriceUsd: 58.02,
    shippingUsd: 10,
    subtitle: {
      ru: "Умный видеоглазок с дверным звонком, PIR-датчиком и интеркомом",
      az: "Qapı zəngi, PIR sensoru və interkomu olan ağıllı video gözlük",
    },
    problem: {
      ru: "Обычный глазок не записывает визиты и не показывает, кто подошел к двери, когда вас нет дома.",
      az: "Adi gözlük səfərləri yazmır və siz evdə olmayanda qapıya kimin gəldiyini göstərmir.",
    },
    solution: {
      ru: "1080p-камера, уведомления о движении и двусторонняя связь помогают держать вход под контролем из любой точки.",
      az: "1080p kamera, hərəkət bildirişləri və iki tərəfli səs əlaqəsi girişi istənilən yerdən nəzarətdə saxlamağa kömək edir.",
    },
    features: {
      ru: ["1080p видео", "PIR-детекция", "Двусторонняя связь"],
      az: ["1080p video", "PIR deteksiya", "İki tərəfli səs"],
    },
    supplierText: {
      ru: "Подходит для квартиры, офиса, апартаментов и контроля входной двери.",
      az: "Mənzil, ofis, apartament və giriş qapısına nəzarət üçün uyğundur.",
    },
  },
  {
    id: "guard-dual-8mp",
    name: "Vertex Guard Dual 8MP",
    image: "media/products/guard-dual.jpg",
    sourceStore: "AliExpress",
    sourceModel:
      "8MP Wifi Camera Dual Lens Security Wireless Outdoor Cameras Two-way Audio AI Human Tracking Color Night Vision Baby Monitor",
    sourceUrl: "https://aliexpress.ru/item/1005011609354601.html?sku_id=12000056049026498",
    basePriceUsd: 24.6,
    shippingUsd: 10,
    subtitle: {
      ru: "Двухлинзовая уличная Wi‑Fi камера с ночным цветным режимом",
      az: "Rəngli gecə görünüşlü ikili linzalı Wi‑Fi küçə kamerası",
    },
    problem: {
      ru: "Одна камера часто оставляет слепые зоны во дворе, у входа или возле фасада.",
      az: "Tək kamera həyət, giriş və ya fasad yanında çox vaxt kor zonalar buraxır.",
    },
    solution: {
      ru: "Две линзы, AI-отслеживание человека и цветное ночное видение помогают держать периметр под более уверенным контролем.",
      az: "İki linza, AI insan izləmə və rəngli gecə görünüşü ətrafı daha inamlı nəzarətdə saxlamağa kömək edir.",
    },
    features: {
      ru: ["8MP dual lens", "Color night vision", "AI human tracking"],
      az: ["8MP dual lens", "Rəngli gecə görünüşü", "AI insan izləmə"],
    },
    supplierText: {
      ru: "Подходит для двора, магазина, фасада дома и наружного наблюдения.",
      az: "Həyət, mağaza, ev fasadı və açıq hava müşahidəsi üçün uyğundur.",
    },
  },
  {
    id: "glow-sync-rgbic",
    name: "Vertex Glow Sync RGBIC",
    image: "media/products/glow-sync.jpg",
    sourceStore: "AliExpress",
    sourceModel:
      "RGBIC LED Light Strip Camera TV Screen Synchronization Bluetooth APP Music Sync Game Bedroom TV Background Ambient Light",
    sourceUrl: "https://aliexpress.ru/item/1005004714341804.html?sku_id=12000044002460802",
    basePriceUsd: 26.86,
    shippingUsd: 6,
    subtitle: {
      ru: "RGBIC-подсветка с синхронизацией экрана для ТВ и gaming setup",
      az: "TV və gaming setup üçün ekran sinxronlu RGBIC işıqlandırma",
    },
    problem: {
      ru: "Обычный свет не дает вау-эффекта для фильмов, игр и контент-зоны.",
      az: "Adi işıq film, oyun və kontent zonasına wow effekti vermir.",
    },
    solution: {
      ru: "Подсветка повторяет цвета экрана и музыку, из-за чего ТВ-зона или desk setup выглядят заметно живее и дороже.",
      az: "İşıq ekran rənglərini və musiqini izləyir, buna görə TV zona və ya desk setup daha canlı və bahalı görünür.",
    },
    features: {
      ru: ["Screen sync", "Music mode", "APP + Bluetooth"],
      az: ["Screen sync", "Music mode", "APP + Bluetooth"],
    },
    supplierText: {
      ru: "Лучше всего раскрывается у ТВ, монитора, streaming-зоны и gaming desk.",
      az: "TV, monitor, streaming zona və gaming desk yanında daha yaxşı görünür.",
    },
  },
  {
    id: "astro-beam",
    name: "Vertex Astro Beam",
    image: "media/products/astro-beam.jpg",
    sourceStore: "AliExpress",
    sourceModel:
      "LED Star Galaxies Projector Night Light Astronaut Starry Sky Bedroom Room Decor Children's Gift - LED Atmosphere Creating Lamp",
    sourceUrl: "https://aliexpress.ru/item/1005010034390964.html?sku_id=12000050897821148",
    basePriceUsd: 11.74,
    shippingUsd: 5,
    subtitle: {
      ru: "Проектор звездного неба в форме астронавта для спальни и desk-zone",
      az: "Yataq otağı və desk-zone üçün astronavt formalı ulduz proyektoru",
    },
    problem: {
      ru: "Пустая комната вечером выглядит холодно и не создает атмосферу отдыха или подарочного wow-эффекта.",
      az: "Boş otaq axşam soyuq görünür və nə istirahət, nə də hədiyyə wow effekti yaradır.",
    },
    solution: {
      ru: "Проекция звезд и мягкое свечение быстро делают спальню, детскую или gaming-room более атмосферной.",
      az: "Ulduz proyeksiyası və yumşaq işıq yataq otağını, uşaq otağını və ya gaming-room-u daha atmosferli edir.",
    },
    features: {
      ru: ["Galaxy projection", "Atmosphere light", "Gift-ready design"],
      az: ["Galaxy projection", "Atmosfer işığı", "Hədiyyəyə uyğun dizayn"],
    },
    supplierText: {
      ru: "Подходит для спальни, детской, игровой комнаты и подарка с wow-эффектом.",
      az: "Yataq otağı, uşaq otağı, oyun otağı və wow-effektli hədiyyə üçün uyğundur.",
    },
  },
];

let currentLang = "ru";
let selectedProduct = products[0];
let cart = loadCart();

const productGrid = document.getElementById("productGrid");
const productTemplate = document.getElementById("productCardTemplate");
const productSelect = document.getElementById("productSelect");
const stickyProduct = document.getElementById("stickyProduct");
const stickyMeta = document.getElementById("stickyMeta");
const form = document.getElementById("orderForm");
const formStatus = document.getElementById("formStatus");
const cartForm = document.getElementById("cartForm");
const cartStatus = document.getElementById("cartStatus");
const cartList = document.getElementById("cartList");
const cartEmpty = document.getElementById("cartEmpty");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const cartClearButton = document.getElementById("cartClearButton");
const langButtons = document.querySelectorAll("[data-lang-btn]");

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed
      .map((item) => ({
        productId: item.productId,
        quantity: Number(item.quantity) || 0,
      }))
      .filter(
        (item) =>
          item.quantity > 0 &&
          products.some((product) => product.id === item.productId),
      );
  } catch (error) {
    console.error(error);
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (error) {
    console.error(error);
  }
}

function getProductById(productId) {
  return products.find((product) => product.id === productId) || null;
}

function calculateRetailPrice(product) {
  const landedCost = product.basePriceUsd + (product.shippingUsd || 0);
  return Math.round(landedCost * USD_TO_AZN * MARKUP_RATE * 100) / 100;
}

function getCartItemsCount() {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function getCartTotalValue() {
  return cart.reduce((sum, item) => {
    const product = getProductById(item.productId);
    if (!product) return sum;
    return sum + calculateRetailPrice(product) * item.quantity;
  }, 0);
}

function formatAzn(value) {
  try {
    return new Intl.NumberFormat(currentLang === "az" ? "az-AZ" : "ru-RU", {
      style: "currency",
      currency: "AZN",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  } catch (error) {
    console.error("Currency formatter fallback:", error);
    return `₼${Number(value).toFixed(2)}`;
  }
}

function openWhatsApp(message) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.location.href = whatsappUrl;
}

function buildSingleOrderMessage(customerName, customerPhone) {
  const price = formatAzn(calculateRetailPrice(selectedProduct));

  return [
    content[currentLang].waGreeting,
    `${content[currentLang].waProduct}: ${selectedProduct.name}`,
    `${content[currentLang].waPrice}: ${price}`,
    `${content[currentLang].waSource}: ${selectedProduct.sourceUrl}`,
    `${content[currentLang].waName}: ${customerName}`,
    `${content[currentLang].waPhone}: ${customerPhone}`,
    `${content[currentLang].waLocation}: ${content[currentLang].location}`,
  ].join("\n");
}

function buildCartMessage(customerName, customerPhone) {
  const lines = [
    content[currentLang].waCartGreeting,
    `${content[currentLang].waProducts}:`,
  ];

  cart.forEach((item, index) => {
    const product = getProductById(item.productId);
    if (!product) return;

    const price = formatAzn(calculateRetailPrice(product));
    const subtotal = formatAzn(calculateRetailPrice(product) * item.quantity);
    lines.push(`${index + 1}. ${product.name} x${item.quantity} — ${price} / ${subtotal}`);
    lines.push(`${content[currentLang].waSource}: ${product.sourceUrl}`);
  });

  lines.push(`${content[currentLang].waTotal}: ${formatAzn(getCartTotalValue())}`);
  lines.push(`${content[currentLang].waName}: ${customerName}`);
  lines.push(`${content[currentLang].waPhone}: ${customerPhone}`);
  lines.push(`${content[currentLang].waLocation}: ${content[currentLang].location}`);

  return lines.join("\n");
}

function addToCart(productId) {
  const existingItem = cart.find((item) => item.productId === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ productId, quantity: 1 });
  }

  saveCart();
  renderCart();
  syncSticky();
}

function updateCartQuantity(productId, nextQuantity) {
  if (nextQuantity <= 0) {
    cart = cart.filter((item) => item.productId !== productId);
  } else {
    cart = cart.map((item) =>
      item.productId === productId ? { ...item, quantity: nextQuantity } : item,
    );
  }

  saveCart();
  renderCart();
  syncSticky();
}

function clearCart() {
  cart = [];
  saveCart();
  renderCart();
  syncSticky();
}

function renderProducts() {
  if (!productGrid || !productTemplate || !("content" in productTemplate)) {
    return;
  }

  try {
    const nextContent = document.createDocumentFragment();

    products.forEach((product) => {
      const fragment = productTemplate.content.cloneNode(true);
      const card = fragment.querySelector(".product-card");
      const image = fragment.querySelector(".product-image");
      const name = fragment.querySelector(".product-name");
      const subtitle = fragment.querySelector(".product-subtitle");
      const price = fragment.querySelector(".product-price");
      const problem = fragment.querySelector(".product-problem");
      const solution = fragment.querySelector(".product-solution");
      const features = fragment.querySelector(".product-features");
      const supplier = fragment.querySelector(".product-supplier");
      const orderButton = fragment.querySelector(".product-button");
      const cartButton = fragment.querySelector(".product-cart-button");

      if (
        !card ||
        !image ||
        !name ||
        !subtitle ||
        !price ||
        !problem ||
        !solution ||
        !features ||
        !supplier ||
        !orderButton ||
        !cartButton
      ) {
        throw new Error("Catalog template is incomplete");
      }

      if (product.id === selectedProduct.id) {
        card.classList.add("is-selected");
      }

      image.src = product.image;
      image.alt = product.name;
      name.textContent = product.name;
      subtitle.textContent = product.subtitle[currentLang];
      price.textContent = formatAzn(calculateRetailPrice(product));
      problem.textContent = product.problem[currentLang];
      solution.textContent = product.solution[currentLang];
      supplier.textContent = product.supplierText[currentLang];
      orderButton.textContent = content[currentLang].chooseProduct;
      cartButton.textContent = content[currentLang].addToCart;

      product.features[currentLang].forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        features.appendChild(li);
      });

      orderButton.addEventListener("click", () => {
        selectedProduct = product;
        productSelect.value = product.id;
        syncSticky();
        renderProducts();
        document.getElementById("quickbuy").scrollIntoView({ behavior: "smooth", block: "start" });
      });

      cartButton.addEventListener("click", () => {
        addToCart(product.id);
        document.getElementById("cart").scrollIntoView({ behavior: "smooth", block: "start" });
      });

      nextContent.appendChild(fragment);
    });

    while (productGrid.firstChild) {
      productGrid.removeChild(productGrid.firstChild);
    }

    productGrid.appendChild(nextContent);
  } catch (error) {
    console.error("Catalog render fallback:", error);
  }
}

function renderCart() {
  cartList.innerHTML = "";
  const totalItems = getCartItemsCount();
  const totalValue = getCartTotalValue();

  cartCount.textContent = String(totalItems);
  cartTotal.textContent = formatAzn(totalValue);
  cartEmpty.style.display = totalItems === 0 ? "block" : "none";
  cartClearButton.disabled = totalItems === 0;

  cart.forEach((item) => {
    const product = getProductById(item.productId);
    if (!product) return;

    const row = document.createElement("article");
    row.className = "cart-item";

    const priceValue = calculateRetailPrice(product);
    const subtotalValue = priceValue * item.quantity;

    row.innerHTML = `
      <div class="cart-item-main">
        <div class="cart-item-media">
          <img src="${product.image}" alt="${product.name}" />
        </div>
        <div>
          <h3 class="cart-item-title">${product.name}</h3>
          <div class="cart-item-price">${formatAzn(priceValue)} x ${item.quantity}</div>
          <div class="cart-item-subtotal">${formatAzn(subtotalValue)}</div>
        </div>
      </div>
      <div class="cart-item-actions">
        <div class="cart-item-controls">
          <button type="button" class="button button-secondary button-qty" data-action="decrease">-</button>
          <span class="cart-qty">${item.quantity}</span>
          <button type="button" class="button button-secondary button-qty" data-action="increase">+</button>
        </div>
        <button type="button" class="button button-secondary button-remove" data-action="remove">${content[currentLang].remove}</button>
      </div>
    `;

    row.querySelector('[data-action="decrease"]').addEventListener("click", () => {
      updateCartQuantity(item.productId, item.quantity - 1);
    });

    row.querySelector('[data-action="increase"]').addEventListener("click", () => {
      updateCartQuantity(item.productId, item.quantity + 1);
    });

    row.querySelector('[data-action="remove"]').addEventListener("click", () => {
      updateCartQuantity(item.productId, 0);
    });

    cartList.appendChild(row);
  });
}

function fillProductSelect() {
  productSelect.innerHTML = "";

  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = `${product.name} — ${formatAzn(calculateRetailPrice(product))}`;
    option.selected = product.id === selectedProduct.id;
    productSelect.appendChild(option);
  });
}

function syncSticky() {
  const count = getCartItemsCount();
  stickyProduct.textContent = `${selectedProduct.name} • ${formatAzn(calculateRetailPrice(selectedProduct))}`;
  stickyMeta.textContent =
    count > 0
      ? `${content[currentLang].stickyCartPrefix}: ${count}`
      : content[currentLang].stickyText;
}

function applyTranslations() {
  document.documentElement.lang = currentLang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    const value = content[currentLang][key];
    if (value) node.textContent = value;
  });

  document.getElementById("nameInput").placeholder = content[currentLang].nameField;
  document.getElementById("phoneInput").placeholder = "+994 50 000 00 00";
  document.getElementById("cartNameInput").placeholder = content[currentLang].nameField;
  document.getElementById("cartPhoneInput").placeholder = "+994 50 000 00 00";

  renderProducts();
  fillProductSelect();
  renderCart();
  syncSticky();
}

function setupMotionBackground() {
  if (window.innerWidth <= 767) {
    return;
  }

  const root = document.documentElement;
  let pointerX = window.innerWidth / 2;
  let pointerY = window.innerHeight / 2;
  let ticking = false;

  const updateBackground = () => {
    ticking = false;

    const width = Math.max(window.innerWidth, 1);
    const height = Math.max(window.innerHeight, 1);
    const normalizedX = pointerX / width - 0.5;
    const normalizedY = pointerY / height - 0.5;
    const maxScroll = Math.max(
      document.documentElement.scrollHeight - window.innerHeight,
      1,
    );
    const scrollProgress = window.scrollY / maxScroll;

    root.style.setProperty("--mesh-x", `${Math.round(normalizedX * 40)}px`);
    root.style.setProperty(
      "--mesh-y",
      `${Math.round(normalizedY * 28 - scrollProgress * 85)}px`,
    );
    root.style.setProperty("--grid-offset-x", `${Math.round(normalizedX * 22)}px`);
    root.style.setProperty(
      "--grid-offset-y",
      `${Math.round(normalizedY * 18 - scrollProgress * 120)}px`,
    );
    root.style.setProperty("--orb-a-x", `${Math.round(normalizedX * -46)}px`);
    root.style.setProperty(
      "--orb-a-y",
      `${Math.round(normalizedY * -24 + scrollProgress * 64)}px`,
    );
    root.style.setProperty("--orb-b-x", `${Math.round(normalizedX * 52)}px`);
    root.style.setProperty(
      "--orb-b-y",
      `${Math.round(normalizedY * 18 - scrollProgress * 72)}px`,
    );
    root.style.setProperty("--orb-c-x", `${Math.round(normalizedX * -32)}px`);
    root.style.setProperty(
      "--orb-c-y",
      `${Math.round(normalizedY * 24 + scrollProgress * 96)}px`,
    );
    root.style.setProperty("--ring-x", `${Math.round(normalizedX * 20)}px`);
    root.style.setProperty(
      "--ring-y",
      `${Math.round(normalizedY * 12 - scrollProgress * 46)}px`,
    );
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateBackground);
  };

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.addEventListener(
      "pointermove",
      (event) => {
        pointerX = event.clientX;
        pointerY = event.clientY;
        requestUpdate();
      },
      { passive: true },
    );
  }

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener(
    "resize",
    () => {
      pointerX = window.innerWidth / 2;
      pointerY = window.innerHeight / 2;
      requestUpdate();
    },
    { passive: true },
  );

  requestUpdate();
}

function setupReveal() {
  if (window.innerWidth <= 767) {
    document.querySelectorAll(".reveal").forEach((item) => item.classList.add("visible"));
    return;
  }

  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((item) => item.classList.add("visible"));
    return;
  }

  document.body.classList.add("reveal-enabled");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.18 },
  );

  document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
}

function setupProtection() {
  document.addEventListener("contextmenu", (event) => event.preventDefault());
  document.addEventListener("selectstart", (event) => event.preventDefault());
}

async function submitOrder(event) {
  event.preventDefault();

  const customerName = document.getElementById("nameInput").value.trim();
  const customerPhone = document.getElementById("phoneInput").value.trim();
  const message = buildSingleOrderMessage(customerName, customerPhone);

  formStatus.className = "form-status";
  formStatus.textContent = content[currentLang].sending;

  try {
    form.reset();
    selectedProduct = products[0];
    productSelect.value = selectedProduct.id;
    syncSticky();
    renderProducts();
    formStatus.classList.add("success");
    formStatus.textContent = content[currentLang].success;
    openWhatsApp(message);
  } catch (error) {
    console.error(error);
    formStatus.classList.add("error");
    formStatus.textContent = content[currentLang].error;
  }
}

async function submitCart(event) {
  event.preventDefault();

  if (cart.length === 0) {
    cartStatus.className = "form-status error";
    cartStatus.textContent = content[currentLang].cartCheckoutEmpty;
    return;
  }

  const customerName = document.getElementById("cartNameInput").value.trim();
  const customerPhone = document.getElementById("cartPhoneInput").value.trim();
  const message = buildCartMessage(customerName, customerPhone);

  cartStatus.className = "form-status";
  cartStatus.textContent = content[currentLang].sending;

  try {
    cartStatus.classList.add("success");
    cartStatus.textContent = content[currentLang].cartCheckoutOpen;
    openWhatsApp(message);
  } catch (error) {
    console.error(error);
    cartStatus.classList.add("error");
    cartStatus.textContent = content[currentLang].cartCheckoutError;
  }
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentLang = button.getAttribute("data-lang-btn");
    langButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    applyTranslations();
  });
});

productSelect.addEventListener("change", () => {
  selectedProduct = getProductById(productSelect.value) || products[0];
  syncSticky();
  renderProducts();
});

cartClearButton.addEventListener("click", () => {
  clearCart();
  cartStatus.className = "form-status";
  cartStatus.textContent = "";
});

form.addEventListener("submit", submitOrder);
cartForm.addEventListener("submit", submitCart);

applyTranslations();
setupProtection();

try {
  setupMotionBackground();
} catch (error) {
  console.error("Motion background disabled:", error);
}

try {
  setupReveal();
} catch (error) {
  console.error("Reveal animation disabled:", error);
  document.querySelectorAll(".reveal").forEach((item) => item.classList.add("visible"));
}
