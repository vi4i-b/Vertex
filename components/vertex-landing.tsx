"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

type Locale = "ru" | "az";

type Product = {
  id: string;
  name: string;
  subtitle: Record<Locale, string>;
  problem: Record<Locale, string>;
  solution: Record<Locale, string>;
  price: string;
  accent: string;
  features: Record<Locale, string[]>;
};

const whatsappHref = "https://wa.me/994706642848";

const products: Product[] = [
  {
    id: "gravity",
    name: "Vertex Gravity",
    subtitle: {
      ru: "Антигравитационный увлажнитель с атмосферным светом",
      az: "Atmosferik işıqla antigravitasiya nəmləndiricisi",
    },
    problem: {
      ru: "Сухой воздух и скучная атмосфера портят настроение и концентрацию.",
      az: "Quru hava və cansıxıcı mühit həm rahatlığı, həm də fokusunu pozur.",
    },
    solution: {
      ru: "Паровой поток и световой режим создают эффект премиального lounge-пространства.",
      az: "Buxar axını və işıq rejimi məkanı premium lounge atmosferinə çevirir.",
    },
    price: "₼149",
    accent: "linear-gradient(135deg, rgba(85, 199, 255, 0.28), rgba(30, 32, 36, 0.2))",
    features: {
      ru: ["Тихая работа", "USB-C питание", "Видео-loop demo ready"],
      az: ["Səssiz iş", "USB-C qidalanma", "Video-loop demo hazırdır"],
    },
  },
  {
    id: "secure-touch",
    name: "Vertex Secure Touch",
    subtitle: {
      ru: "Биометрическая ручка-замок для квартиры и офиса",
      az: "Mənzil və ofis üçün biometrik qapı dəstəyi",
    },
    problem: {
      ru: "Забыли ключи? Теперь доступ всегда с вами.",
      az: "Açarları unutdunuz? Giriş artıq həmişə sizinlədir.",
    },
    solution: {
      ru: "Отпечаток пальца открывает дверь за секунду и добавляет чувство контроля.",
      az: "Barmaq izi qapını saniyələr içində açır və nəzarət hissi yaradır.",
    },
    price: "₼389",
    accent: "linear-gradient(135deg, rgba(73, 140, 255, 0.32), rgba(27, 29, 34, 0.18))",
    features: {
      ru: ["Biometric unlock", "App-ready", "Для входных дверей"],
      az: ["Biometrik açılış", "Tətbiq dəstəyi", "Giriş qapıları üçün"],
    },
  },
  {
    id: "glide",
    name: "Vertex Glide",
    subtitle: {
      ru: "Роботизированный мотор для штор и сценариев света",
      az: "Pərdələr və işıq ssenariləri üçün robotik motor",
    },
    problem: {
      ru: "Рутина утром и вечером съедает ощущение комфорта.",
      az: "Səhər və axşam rutini rahatlıq hissini azaldır.",
    },
    solution: {
      ru: "Автоматическое открытие штор запускает день красиво и без усилий.",
      az: "Pərdələrin avtomatik açılması günü estetik və rahat başlayır.",
    },
    price: "₼229",
    accent: "linear-gradient(135deg, rgba(108, 242, 191, 0.22), rgba(30, 32, 36, 0.2))",
    features: {
      ru: ["Тихий ход", "Автосценарии", "Монтаж за 2 минуты"],
      az: ["Səssiz işləmə", "Avto-senarilər", "2 dəqiqəyə quraşdırma"],
    },
  },
  {
    id: "prism",
    name: "Vertex Prism",
    subtitle: {
      ru: "Гексагоновые light-панели для setup-зоны",
      az: "Setup zonası üçün heksaqon işıq panelləri",
    },
    problem: {
      ru: "Обычная комната не дает wow-эффекта для игр, стримов и контента.",
      az: "Adi otaq oyun, strim və kontent üçün wow effekti yaratmır.",
    },
    solution: {
      ru: "Сценарии подсветки превращают стену в визуальный signature вашего пространства.",
      az: "İşıq ssenariləri divarı məkanınızın vizual imzasına çevirir.",
    },
    price: "₼179",
    accent: "linear-gradient(135deg, rgba(119, 97, 255, 0.26), rgba(20, 24, 31, 0.18))",
    features: {
      ru: ["Sync с музыкой", "Gaming mood", "Модульная форма"],
      az: ["Musiqi ilə sinxron", "Gaming mood", "Modul dizayn"],
    },
  },
  {
    id: "pulse-dock",
    name: "Vertex Pulse Dock",
    subtitle: {
      ru: "3-in-1 беспроводная зарядка для телефона, часов и наушников",
      az: "Telefon, saat və qulaqcıq üçün 3-ü 1-də simsiz şarj",
    },
    problem: {
      ru: "Провода и хаос на столе мешают эстетике и фокусу.",
      az: "Naqillər və qarışıqlıq həm estetikanı, həm də fokusunu pozur.",
    },
    solution: {
      ru: "Единая docking-станция собирает весь setup в один чистый жест.",
      az: "Vahid docking stansiyası bütün setup-ı səliqəli şəkildə birləşdirir.",
    },
    price: "₼119",
    accent: "linear-gradient(135deg, rgba(85, 199, 255, 0.24), rgba(32, 38, 52, 0.2))",
    features: {
      ru: ["Fast charge", "Desk aesthetic", "Travel friendly"],
      az: ["Sürətli şarj", "Desk aesthetics", "Daşımaq rahatdır"],
    },
  },
];

const copy = {
  ru: {
    location: "Баку, Азербайджан",
    badge: "Smart Living & Future Home",
    title: "Vertex — Технологии, которые меняют пространство",
    subtitle:
      "Премиальные гаджеты для дома, setup-зоны и жизни без лишних действий. Выглядят дорого, работают быстро, заказываются в два касания.",
    ctaPrimary: "Заказать сейчас",
    ctaSecondary: "Консультация в WhatsApp",
    heroCard: "Флагманская подборка",
    heroCardText: "Gravity, Secure Touch, Glide и другие устройства с видео-превью и быстрым заказом.",
    productsTitle: "5 устройств, которые продают ощущение будущего",
    productsText:
      "Крупные карточки, акцент на ценности и готовность к коротким видео-loop превью под Instagram/TikTok трафик.",
    whyTitle: "Почему Vertex?",
    reasons: [
      {
        title: "Гарантия качества",
        text: "Премиальная подача, проверенные модели и помощь с выбором без лишнего шума.",
      },
      {
        title: "Экспресс-доставка по Баку",
        text: "Сценарий заказа заточен под быстрый контакт и оперативную передачу клиенту.",
      },
      {
        title: "Умная настройка за 2 минуты",
        text: "Продукты подобраны так, чтобы установка ощущалась легко даже для новичка.",
      },
    ],
    formTitle: "QuickBuy",
    formText: "Оставьте только имя и номер. Vertex отправит заявку напрямую владельцу в Telegram.",
    name: "Имя",
    phone: "Номер телефона",
    product: "Выбранный товар",
    submit: "Отправить заявку",
    sending: "Отправка...",
    success: "Заявка отправлена. Jalil получит уведомление в Telegram.",
    failure: "Не удалось отправить заявку. Проверьте настройки Telegram и повторите.",
    footer: "Двухъязычный mobile-first прототип для премиального smart living бренда.",
    consult: "Нужна живая консультация?",
    videoLabel: "Video preview ready",
    stickyText: "Быстрый заказ без регистрации",
  },
  az: {
    location: "Bakı, Azərbaycan",
    badge: "Smart Living & Future Home",
    title: "Vertex — Məkanı dəyişən texnologiyalar",
    subtitle:
      "Ev, setup zonası və rahat gündəlik həyat üçün premium qadcetlər. Bahalı görünür, sürətli işləyir, iki toxunuşla sifariş olunur.",
    ctaPrimary: "İndi sifariş et",
    ctaSecondary: "WhatsApp ilə məsləhət",
    heroCard: "Flagship seçim",
    heroCardText: "Gravity, Secure Touch, Glide və digər cihazlar video preview və sürətli sifarişlə.",
    productsTitle: "Gələcək hissini satan 5 cihaz",
    productsText:
      "Böyük kartlar, dəyər yönümlü təqdimat və Instagram/TikTok trafik üçün qısa video-loop preview hazırlığı.",
    whyTitle: "Niyə Vertex?",
    reasons: [
      {
        title: "Keyfiyyət zəmanəti",
        text: "Premium təqdimat, yoxlanılmış modellər və artıq səs-küysüz seçim dəstəyi.",
      },
      {
        title: "Bakı üzrə ekspress çatdırılma",
        text: "Sifariş ssenarisi sürətli əlaqə və operativ çatdırılma üçün qurulub.",
      },
      {
        title: "2 dəqiqəyə ağıllı quraşdırma",
        text: "Məhsullar yeni başlayanlar üçün belə asan qurulum hissi vermək üçün seçilib.",
      },
    ],
    formTitle: "QuickBuy",
    formText: "Yalnız ad və nömrə buraxın. Vertex sifarişi birbaşa Telegram-da sahibə göndərir.",
    name: "Ad",
    phone: "Telefon nömrəsi",
    product: "Seçilən məhsul",
    submit: "Sifarişi göndər",
    sending: "Göndərilir...",
    success: "Sifariş göndərildi. Jalil Telegram-da bildiriş alacaq.",
    failure: "Sifariş göndərilmədi. Telegram ayarlarını yoxlayın və yenidən cəhd edin.",
    footer: "Premium smart living brendi üçün ikidilli mobile-first prototip.",
    consult: "Canlı məsləhət lazımdır?",
    videoLabel: "Video preview hazırdır",
    stickyText: "Qeydiyyatsız sürətli sifariş",
  },
} as const;

export function VertexLanding() {
  const [locale, setLocale] = useState<Locale>("ru");
  const [selectedProductId, setSelectedProductId] = useState(products[0].id);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );

  const t = copy[locale];
  const selectedProduct = useMemo(
    () => products.find((product) => product.id === selectedProductId) ?? products[0],
    [selectedProductId],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.18 },
    );

    const revealNodes = document.querySelectorAll("[data-reveal]");
    revealNodes.forEach((node) => observer.observe(node));

    const preventMenu = (event: MouseEvent) => event.preventDefault();
    const preventSelect = (event: Event) => event.preventDefault();

    document.addEventListener("contextmenu", preventMenu);
    document.addEventListener("selectstart", preventSelect);

    return () => {
      revealNodes.forEach((node) => observer.unobserve(node));
      observer.disconnect();
      document.removeEventListener("contextmenu", preventMenu);
      document.removeEventListener("selectstart", preventSelect);
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          locale,
          name,
          phone,
          product: selectedProduct.name,
          location: copy[locale].location,
        }),
      });

      if (!response.ok) {
        throw new Error("Order request failed");
      }

      setStatus("success");
      setName("");
      setPhone("");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <main className="vertex-shell">
      <section className="hero" data-reveal>
        <div className="hero__video">
          <div className="hero__video-overlay" />
          <div className="hero__scan" />
          <div className="hero__orb hero__orb--one" />
          <div className="hero__orb hero__orb--two" />
          <div className="hero__caption">{t.videoLabel}</div>
        </div>

        <div className="hero__content">
          <div className="topbar">
            <div>
              <p className="eyebrow">{t.badge}</p>
              <p className="location">{t.location}</p>
            </div>
            <div className="locale-switch" aria-label="Language switch">
              <button
                className={locale === "ru" ? "is-active" : ""}
                onClick={() => setLocale("ru")}
                type="button"
              >
                RU
              </button>
              <button
                className={locale === "az" ? "is-active" : ""}
                onClick={() => setLocale("az")}
                type="button"
              >
                AZ
              </button>
            </div>
          </div>

          <div className="hero__copy">
            <h1>{t.title}</h1>
            <p>{t.subtitle}</p>
          </div>

          <div className="hero__actions">
            <a className="button button--primary" href="#quickbuy">
              {t.ctaPrimary}
            </a>
            <a
              className="button button--secondary"
              href={whatsappHref}
              rel="noreferrer"
              target="_blank"
            >
              {t.ctaSecondary}
            </a>
          </div>

          <aside className="hero-card">
            <span>{t.heroCard}</span>
            <strong>{t.heroCardText}</strong>
          </aside>
        </div>
      </section>

      <section className="section section--tight" data-reveal>
        <div className="section-heading">
          <p className="eyebrow">Curated Devices</p>
          <h2>{t.productsTitle}</h2>
          <p>{t.productsText}</p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article
              key={product.id}
              className={`product-card ${
                selectedProductId === product.id ? "is-selected" : ""
              }`}
              style={{ background: product.accent }}
              onClick={() => setSelectedProductId(product.id)}
            >
              <div className="product-card__media">
                <div className="loop-chip">{t.videoLabel}</div>
                <div className="media-glow" />
              </div>
              <div className="product-card__body">
                <div className="product-card__heading">
                  <div>
                    <h3>{product.name}</h3>
                    <p>{product.subtitle[locale]}</p>
                  </div>
                  <strong>{product.price}</strong>
                </div>

                <div className="problem-solution">
                  <p>{product.problem[locale]}</p>
                  <p>{product.solution[locale]}</p>
                </div>

                <ul>
                  {product.features[locale].map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section reasons" data-reveal>
        <div className="section-heading">
          <p className="eyebrow">Brand Promise</p>
          <h2>{t.whyTitle}</h2>
        </div>

        <div className="reason-grid">
          {t.reasons.map((reason) => (
            <article className="reason-card" key={reason.title}>
              <div className="reason-icon" />
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section quickbuy" data-reveal id="quickbuy">
        <div className="quickbuy__intro">
          <p className="eyebrow">QuickBuy</p>
          <h2>{t.formTitle}</h2>
          <p>{t.formText}</p>
        </div>

        <form className="quickbuy__form" onSubmit={handleSubmit}>
          <label>
            <span>{t.product}</span>
            <select
              onChange={(event) => setSelectedProductId(event.target.value)}
              value={selectedProductId}
            >
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span>{t.name}</span>
            <input
              onChange={(event) => setName(event.target.value)}
              placeholder={t.name}
              required
              value={name}
            />
          </label>

          <label>
            <span>{t.phone}</span>
            <input
              inputMode="tel"
              onChange={(event) => setPhone(event.target.value)}
              placeholder="+994 50 000 00 00"
              required
              value={phone}
            />
          </label>

          <button className="button button--primary button--full" type="submit">
            {status === "sending" ? t.sending : t.submit}
          </button>

          {status === "success" ? <p className="status status--success">{t.success}</p> : null}
          {status === "error" ? <p className="status status--error">{t.failure}</p> : null}
        </form>
      </section>

      <section className="section consult" data-reveal>
        <div>
          <p className="eyebrow">WhatsApp</p>
          <h2>{t.consult}</h2>
        </div>
        <a className="button button--secondary" href={whatsappHref} rel="noreferrer" target="_blank">
          WhatsApp
        </a>
      </section>

      <footer className="footer">{t.footer}</footer>

      <div className="sticky-bar">
        <div>
          <strong>{selectedProduct.name}</strong>
          <span>{t.stickyText}</span>
        </div>
        <a className="button button--primary" href="#quickbuy">
          {t.ctaPrimary}
        </a>
      </div>
    </main>
  );
}
