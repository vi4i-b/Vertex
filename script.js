const USD_TO_AZN = 1.7;
const MARKUP_RATE = 1.5;
const WHATSAPP_NUMBER = "994706642848";
const CART_STORAGE_KEY = "vertex-cart";

const content = {
  ru: {
    location: "Баку, Азербайджан",
    heroTitle: "Vertex — умные гаджеты для красивого дома",
    heroText:
      "Магазин smart living решений для людей, которые любят комфорт, чистую эстетику и ощущение будущего в повседневной жизни.",
    orderNow: "Заказать сейчас",
    catalogCta: "Смотреть каталог",
    aboutLabel: "О магазине",
    aboutText:
      "Vertex подбирает современные устройства для дома и setup-зоны без дешевого маркетингового шума: только те гаджеты, которые реально выглядят эффектно, решают бытовые задачи и подходят под быстрый городской ритм Баку.",
    aboutPoint1: "Премиальная подача и понятный выбор",
    aboutPoint2: "Только под заказ: 7-20 дней",
    aboutPoint3: "Помощь с запуском и настройкой",
    featured: "Собранная подборка",
    featuredText:
      "Реальные найденные товары уже добавлены в каталог с обновленными фото и локальной розничной ценой.",
    introTitle: "Технологии, которые делают пространство дороже на вид и удобнее в жизни",
    introText:
      "Vertex ориентирован на молодых специалистов, геймеров и любителей гаджетов, которые хотят не просто купить устройство, а собрать вокруг себя современную и эстетичную среду.",
    deliveryLabel1: "Формат доставки",
    deliveryValue1: "Под заказ",
    deliveryLabel2: "Средний срок",
    deliveryValue2: "7-20 дней",
    deliveryText:
      "Точный срок зависит от поставщика и подтверждается после оформления заказа.",
    productsTitle: "Каталог Vertex",
    productsText:
      "Витрина построена на реальных товарах: мы обновили карточки, подставили их фотографии и выставили готовую цену для магазина.",
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
      "Vertex — smart living магазин в Баку с curated-подборкой гаджетов для дома, gaming-setup и современной городской жизни.",
    stickyText: "Быстрый заказ без регистрации и лишних шагов",
    stickyCartPrefix: "Корзина",
    catalogBadge: "Vertex Select",
    inStock: "В наличии",
    chooseProduct: "Быстрый заказ",
    addToCart: "В корзину",
    remove: "Удалить",
    waGreeting: "Здравствуйте! Хочу оформить заказ в Vertex.",
    waCartGreeting: "Здравствуйте! Хочу оформить заказ из корзины Vertex.",
    waProduct: "Товар",
    waProducts: "Товары",
    waPrice: "Цена",
    waTotal: "Итого",
    waName: "Имя",
    waPhone: "Телефон",
    waLocation: "Город",
  },
  az: {
    location: "Bakı, Azərbaycan",
    heroTitle: "Vertex — gözəl məkan üçün ağıllı qadcetlər",
    heroText:
      "Rahatlığı, təmiz estetikanı və gündəlik həyatda gələcək hissini sevən insanlar üçün smart living mağazası.",
    orderNow: "İndi sifariş et",
    catalogCta: "Kataloqa bax",
    aboutLabel: "Mağaza haqqında",
    aboutText:
      "Vertex ev və setup zonası üçün müasir cihazları ucuz bazar səs-küyü olmadan seçir: yalnız həqiqətən effektli görünən, gündəlik problemi həll edən və Bakının sürətli ritminə uyğun qadcetlər.",
    aboutPoint1: "Premium təqdimat və aydın seçim",
    aboutPoint2: "Yalnız sifarişlə: 7-20 gün",
    aboutPoint3: "Quraşdırma və qoşulma dəstəyi",
    featured: "Toplanmış seçim",
    featuredText:
      "Tapılmış real məhsullar artıq kataloqa yenilənmiş foto və yerli pərakəndə qiymətlə əlavə olunub.",
    introTitle: "Məkana həm daha bahalı görünüş, həm də real rahatlıq verən texnologiyalar",
    introText:
      "Vertex gənc mütəxəssislər, geymerlər və qadcet sevənlər üçün sadəcə cihaz deyil, estetik və müasir mühit qurmağa kömək edir.",
    deliveryLabel1: "Çatdırılma formatı",
    deliveryValue1: "Sifarişlə",
    deliveryLabel2: "Orta müddət",
    deliveryValue2: "7-20 gün",
    deliveryText:
      "Dəqiq müddət tədarükçüdən asılıdır və sifarişdən sonra təsdiqlənir.",
    productsTitle: "Vertex kataloqu",
    productsText:
      "Vitrin real məhsullar üzərində qurulub: kartlara faktiki şəkillər əlavə edildi və mağaza üçün hazır qiymət hesablandı.",
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
      "Vertex — Bakı üçün ev, gaming-setup və müasir şəhər həyatı üzrə seçilmiş smart living mağazasıdır.",
    stickyText: "Qeydiyyatsız və əlavə addımsız sürətli sifariş",
    stickyCartPrefix: "Səbət",
    catalogBadge: "Vertex Select",
    inStock: "Stokda var",
    chooseProduct: "Sürətli sifariş",
    addToCart: "Səbətə at",
    remove: "Sil",
    waGreeting: "Salam! Vertex-dən sifariş vermək istəyirəm.",
    waCartGreeting: "Salam! Vertex səbətim üzrə sifariş vermək istəyirəm.",
    waProduct: "Məhsul",
    waProducts: "Məhsullar",
    waPrice: "Qiymət",
    waTotal: "Cəmi",
    waName: "Ad",
    waPhone: "Telefon",
    waLocation: "Şəhər",
  },
};

const products = [
  {
    id: "gravity",
    name: "Vertex Gravity",
    image: "media/products/gravity.jpg",
    sourceStore: "Humiii",
    sourceModel: "Zero Gravity Humidifier",
    sourceUrl: "https://humiii.com/products/zero-gravity-humidifier",
    basePriceUsd: 49.99,
    subtitle: {
      ru: "Антигравитационный увлажнитель с атмосферной подсветкой",
      az: "Atmosferik işıqla antigravitasiya nəmləndiricisi",
    },
    problem: {
      ru: "Сухой воздух и скучная атмосфера быстро убивают ощущение уюта.",
      az: "Quru hava və darıxdırıcı mühit rahatlıq hissini tez zəiflədir.",
    },
    solution: {
      ru: "Эффект падающих капель и мягкий свет превращают спальню или desk-zone в premium mood-space.",
      az: "Damcı effekti və yumşaq işıq yataq otağını və ya desk-zone-u premium mood-space-a çevirir.",
    },
    features: {
      ru: ["Ультразвуковое увлажнение", "Подсветка", "Эффектный интерьерный акцент"],
      az: ["Ultrasəs nəmləndirmə", "İşıqlandırma", "Effektli interyer aksenti"],
    },
    supplierText: {
      ru: "Подходит для спальни, кабинета и минималистичного интерьера.",
      az: "Yataq otağı, iş guşəsi və minimalist interyer üçün uyğundur.",
    },
  },
  {
    id: "secure-touch",
    name: "Vertex Secure Touch",
    image: "media/products/secure-touch.jpg",
    sourceStore: "IRONZON",
    sourceModel: "191Y Fingerprint Door Lock with Keypad & Handle",
    sourceUrl: "https://ironzon.com/products/191y-fingerprint-door-lock",
    basePriceUsd: 59.99,
    subtitle: {
      ru: "Биометрическая ручка-замок с клавиатурой и smart-доступом",
      az: "Klaviaturalı və smart girişli biometrik qapı dəstəyi",
    },
    problem: {
      ru: "Ключи теряются, а обычный замок не дает ощущения современного контроля.",
      az: "Açarlar itir və adi qıfıl müasir nəzarət hissi vermir.",
    },
    solution: {
      ru: "Отпечаток, PIN и приложение делают вход быстрым, безопасным и визуально дорогим.",
      az: "Barmaq izi, PIN və tətbiq girişi həm sürətli, həm təhlükəsiz, həm də premium edir.",
    },
    features: {
      ru: ["Fingerprint + PIN", "App-ready", "Современный lever-дизайн"],
      az: ["Barmaq izi + PIN", "Tətbiq dəstəyi", "Müasir lever dizayn"],
    },
    supplierText: {
      ru: "Хорошо подходит для квартиры, кабинета или private-room зоны.",
      az: "Mənzil, kabinet və ya private-room zonası üçün uyğundur.",
    },
  },
  {
    id: "glide",
    name: "Vertex Glide",
    image: "media/products/glide.png",
    sourceStore: "Adaprox",
    sourceModel: "CurtainBot",
    sourceUrl: "https://www.adaprox.io/ja/products/curtain-robot",
    basePriceUsd: 64.99,
    subtitle: {
      ru: "Умный робот для штор и ежедневных light-сценариев",
      az: "Pərdələr və gündəlik işıq ssenariləri üçün ağıllı robot",
    },
    problem: {
      ru: "Рутина со шторами каждый день съедает ощущение технологичного дома.",
      az: "Pərdə rutini hər gün ağıllı ev hissini zəiflədir.",
    },
    solution: {
      ru: "Автоматическое открытие и закрытие штор добавляет дому комфорт и cinematic-ритм.",
      az: "Pərdələrin avtomatik açılıb-bağlanması evə həm rahatlıq, həm cinematic ritm verir.",
    },
    features: {
      ru: ["App control", "Сценарии по времени", "Быстрый домашний upgrade"],
      az: ["Tətbiq idarəsi", "Vaxta görə ssenarilər", "Sürətli home upgrade"],
    },
    supplierText: {
      ru: "Для спальни, гостиной и умного morning-routine сценария.",
      az: "Yataq otağı, qonaq otağı və smart morning-routine üçün.",
    },
  },
  {
    id: "prism",
    name: "Vertex Prism",
    image: "media/products/prism.jpg",
    sourceStore: "Best Buy",
    sourceModel: "Nanoleaf Shapes Hexagons Smarter Kit (7 Panels)",
    sourceUrl: "https://www.bestbuy.com/site/nanoleaf-shapes-hexagons-smarter-kit-7-panels-multicolor/6426520.p",
    basePriceUsd: 134.99,
    subtitle: {
      ru: "Гексагоновые smart-панели для gaming и content setup",
      az: "Gaming və content setup üçün heksaqon smart panellər",
    },
    problem: {
      ru: "Обычная стена не создает wow-эффект для игр, стримов и контента.",
      az: "Adi divar oyun, strim və kontent üçün wow effekti yaratmır.",
    },
    solution: {
      ru: "RGB-сценарии превращают комнату в signature-зону с дорогим digital-настроением.",
      az: "RGB ssenariləri otağı bahalı digital mood verən signature-zonaya çevirir.",
    },
    features: {
      ru: ["Modular design", "Music sync", "Setup-зона с характером"],
      az: ["Modul dizayn", "Musiqi sinxronu", "Xarakterli setup-zona"],
    },
    supplierText: {
      ru: "Идеально для gaming-room, streaming background и creative space.",
      az: "Gaming-room, streaming background və creative space üçün idealdır.",
    },
  },
  {
    id: "pulse-dock",
    name: "Vertex Pulse Dock",
    image: "media/products/pulse-dock.jpg",
    sourceStore: "Shopenzer",
    sourceModel: "3 In 1 Wireless Charger Station",
    sourceUrl: "https://www.shopenzer.com/products/3-In-1-Wireless-Charger-Station",
    basePriceUsd: 89.99,
    subtitle: {
      ru: "3-in-1 зарядка с часами и ambient-light модулем",
      az: "Saat və ambient-light modullu 3-ü 1-də şarj stansiyası",
    },
    problem: {
      ru: "Провода и хаос на столе убивают clean setup и удобство.",
      az: "Naqillər və qarışıqlıq həm clean setup-ı, həm rahatlığı pozur.",
    },
    solution: {
      ru: "Одна док-станция собирает телефон, часы и наушники в аккуратный premium desk-center.",
      az: "Bir dock stansiyası telefon, saat və qulaqcığı səliqəli premium desk-center-a yığır.",
    },
    features: {
      ru: ["3-in-1 charging", "Clock display", "RGB night light"],
      az: ["3-ü 1-də şarj", "Saat ekranı", "RGB night light"],
    },
    supplierText: {
      ru: "Лучше всего раскрывается в рабочем setup и прикроватной зоне.",
      az: "İş setup-ında və çarpayı yanında daha yaxşı görünür.",
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

function calculateRetailPrice(basePriceUsd) {
  return Math.round(basePriceUsd * USD_TO_AZN * MARKUP_RATE * 100) / 100;
}

function getCartItemsCount() {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function getCartTotalValue() {
  return cart.reduce((sum, item) => {
    const product = getProductById(item.productId);
    if (!product) return sum;
    return sum + calculateRetailPrice(product.basePriceUsd) * item.quantity;
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
  const price = formatAzn(calculateRetailPrice(selectedProduct.basePriceUsd));

  return [
    content[currentLang].waGreeting,
    `${content[currentLang].waProduct}: ${selectedProduct.name}`,
    `${content[currentLang].waPrice}: ${price}`,
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

    const price = formatAzn(calculateRetailPrice(product.basePriceUsd));
    const subtotal = formatAzn(calculateRetailPrice(product.basePriceUsd) * item.quantity);
    lines.push(`${index + 1}. ${product.name} x${item.quantity} — ${price} / ${subtotal}`);
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
  productGrid.innerHTML = "";

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

    if (product.id === selectedProduct.id) {
      card.classList.add("is-selected");
    }

    image.src = product.image;
    image.alt = product.name;
    name.textContent = product.name;
    subtitle.textContent = product.subtitle[currentLang];
    price.textContent = formatAzn(calculateRetailPrice(product.basePriceUsd));
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

    productGrid.appendChild(fragment);
  });
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

    const priceValue = calculateRetailPrice(product.basePriceUsd);
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
    option.textContent = `${product.name} — ${formatAzn(calculateRetailPrice(product.basePriceUsd))}`;
    option.selected = product.id === selectedProduct.id;
    productSelect.appendChild(option);
  });
}

function syncSticky() {
  const count = getCartItemsCount();
  stickyProduct.textContent = `${selectedProduct.name} • ${formatAzn(
    calculateRetailPrice(selectedProduct.basePriceUsd),
  )}`;
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
