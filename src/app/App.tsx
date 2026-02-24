import React, { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Cpu, Zap, Truck, Settings, Server, TrendingUp, Building2, Flame, Sparkles, Shield, Award, Phone, Mail, MapPin, Send } from "lucide-react";
import { FormatsImproved } from "./components/FormatsImproved";

const heroImage = "/assets/hero.png";
const logoImage = "/assets/logo.png";
const gpuImage = "/assets/gpu.png";
const asicImage = "/assets/asic.png";
const deliveryImage = "/assets/delivery.png";
const commissioningImage = "/assets/commissioning.png";
const gridImage = "/assets/grid.png";
const fastmineImage = "/assets/fastmine.png";
const containerModulesImage = "/assets/container-modules.png";
const personnelImage = "/assets/personnel.png";
const aerialViewImage = "/assets/aerial-view.png";
const maintenanceImage = "/assets/maintenance.png";
const newStationsImage = "/assets/new-stations.png";
const monitoringImage = "/assets/monitoring.png";

/** FASTMINE GPU sub-landing (Figma Make / React) */

const TOKENS = {
  bg: "#040307",
  panel: "#030303",
  text: "#e8e8e8",
  muted: "#b8bcc0",
  stroke: "#424242",
  accent: "#3342f3",
  // Light theme for alternating sections
  lightBg: "#ffffff",
  lightPanel: "#f8f9fa",
  lightText: "#1a1a1a",
  lightMuted: "#6b6b6b",
  lightStroke: "#e5e5e5",
  maxW: 1200,
  radius: 0,
};

type LeadModel = "Хостинг для ASIC" | "Майнинг на ГПУ" | "Инвестиции в ГПУ";

type HotCard = { title: string; description: string; status: string };

const CONTENT = {
  hero: {
    h1: "Майнинг на собственной генерации",
    sub: "Фиксированный тариф от 3₽/кВт·ч на газовой ГПУ. Промышленная площадка и сервис 24/7.",
    badge: "5 лет на рынке • 10 000+ единиц оборудования • 99.8% uptime",
    pricing: {
      main: "от 3 ₽",
      unit: "/кВт·ч",
      comparison: "Обычный тариф: от 5,7 ₽",
      savings: "Экономия 47%"
    },
    utp: [
      "Ваше оборудование под охраной 24/7 на промышленной территории",
      "Планируйте прибыль: тариф не зависит от колебаний рынка",
      "Индивидуальный расчет тарифа от 3 ₽ за кВт·ч",
      "Спите спокойно: наша команда следит за оборудованием круглосуточно",
    ],
    ctaPrimary: "Рассчитать экономию",
    ctaSecondary: "Консультация в Telegram",
    formTitle: "Расчет экономии",
    phonePh: "Телефон или Telegram",
    selectLabel: "Выберите модель работы",
    selectOptions: ["Хостинг для ASIC", "Майнинг на ГПУ", "Инвестиции в ГПУ"] as LeadModel[],
    formBtn: "Получить персональный расчет",
  },

  how: {
    title: "Как это работает",
    subtitle: "Размещение майнингового оборудования на собственной генерации — под ключ, за 4 шага.",
    steps: [
      { t: "1. Выбор модели работы", d: "Определяем формат: хостинг, майнинг на ГПУ или инвестиции." },
      { t: "2. Запрос предложения", d: "Согласуем параметры и подготовим коммерческое предложение." },
      { t: "3. Введение в работу", d: "Подключаем, запускаем, сопровождаем. Мониторинг и сервис включены." },
    ],
  },

  why: {
    title: "Почему майнеры переходят на собственную генерацию",
    subtitle: "Сравните тарифы и посчитайте реальную экономию на вашем объеме",
    leftTitle: "Сетевая мощность",
    left: [
      "Тарифы для майнинга от 5,7 ₽ за кВт·ч и выше",
      "При таких ставках майнинг становится чувствительным к рынку: вне периода роста маржинальность снижается",
      "Рост сложности сети и высокая себестоимость кВт·ч ухудшают экономику и увеличивают сроки окупаемости",
    ],
    rightTitle: "Собственная генерация FastMine",
    right: [
      "Тариф от 3 ₽ за кВт·ч по расчету под объем",
      "Прогнозируемая себестоимость и снижение рыночных рисков",
      "Стабильная эксплуатация и контроль эффективности",
    ],
    rightFooter: "Экономия на каждый 1 МВт: до 1 944 000 ₽/год",
    example: "Пример: 100 ASIC Antminer S19 Pro (310 кВт) → экономия 598 320 ₽/месяц",
  },

  infra: {
    title: "Инфраструктура площадки",
    subtitle: "Промышленная площадка и сервис для стабильной работы оборудования.",
    items: [
      "Общий вид",
      "Контейнерные модули",
      "Квалифицированный персонал",
      "Серверная с мониторингом ГПУ + ASIC",
      "Регламентное обслуживание оборудования",
      "Telegram-бот по статусу оборудования",
    ],
  },

  formats: {
    title: "Форматы работы",
    subtitle: "Выберите удобный формат — рассчитаем условия под вашу задачу.",
    cta: "Получить расчет под мой формат",
    items: [
      {
        key: "asic",
        title: "Хостинг для ASIC",
        desc: "Размещение вашего ASIC-оборудования на промышленной площадке с обслуживанием 24/7.",
      },
    ],
  },

  docs: {
    title: "Документы и юридическая чистота",
    subtitle: "Работаем по договору, предоставляем пакет документов и подтверждения.",
    items: [
      "FastMine — сертифицированный оператор майнинговой инфраструктуры",
      "Сертификаты соответствия на ГПУ",
      "Официальное партнерство Weichai",
      "Договор газоснабжения",
      "Технические условия",
    ],
    leasingTitle: "Лизинг (партнеры):",
    leasing: ["Альфа", "Сбер", "Дельта Лизинг", "Эконом Лизинг", "ВТБ Лизинг"],
  },

  gallery: {
    title: "Галерея и кейсы",
    subtitle: "Если фото мало — запросите видео-обзор площадки.",
    cta: "Запросить видео-обзор",
  },

  final: {
    title: "Получите расчет и КП сегодня",
    subtitle: "Ответим в течение 2 часов в рабочее время. Ваши данные защищены.",
    namePh: "Имя",
    contactPh: "Телефон или Telegram (обязательно)",
    powerPh: "Мощность (кВт) или количество ASIC",
    btn: "Получить персональный расчет за 2 часа",
  },
  
  faq: {
    title: "Часто задаваемые вопросы",
    subtitle: "Ответы на ключевые вопросы. Не нашли свой? Напишите нам.",
    items: [
      {
        q: "А если оборудование сломается?",
        a: "Бесплатное обслуживание 24/7 входит в стоимость хостинга. Наша инженерная команда на площадке круглосуточно следит за состоянием оборудования и оперативно устраняет любые неисправности."
      },
      {
        q: "Почему ваш тариф ниже, чем у сети?",
        a: "Собственная газовая генерация без посредников. Мы не платим за присоединение к сетям, не зависим от сетевых компаний и можем предложить тариф от 3 ₽/кВт·ч."
      },
      {
        q: "Что если курс биткоина упадет?",
        a: "Фиксированный низкий тариф защищает вас от волатильности. При тарифе 3₽ вместо 5.7₽ у вас больше маржи безопасности даже в периоды падения курса."
      },
      {
        q: "Как быстро окупятся вложения?",
        a: "В среднем 12-18 месяцев при текущих условиях. Точный расчет зависит от модели ASIC, курса и сложности сети. Предоставим детальный финансовый план."
      },
      {
        q: "Какой минимальный объем для размещения?",
        a: "От 50 кВт (примерно 15-20 ASIC Antminer S19 Pro). Для меньших объемов рассмотрим индивидуально."
      },
      {
        q: "Можно ли посетить площадку перед размещением?",
        a: "Да, организуем экскурсию по площадке. Также можем отправить видео-обзор и фото текущего состояния инфраструктуры."
      },
    ],
  },
};

function Container({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  return (
    <div
      style={{
        maxWidth: TOKENS.maxW,
        margin: "0 auto",
        padding: isMobile ? "0 16px" : "0 20px",
      }}
    >
      {children}
    </div>
  );
}

const fadeInViewport = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
};

function useIsMobile() {
  const [m, setM] = React.useState(false);
  React.useEffect(() => {
    const f = () => setM(window.innerWidth < 760);
    f();
    window.addEventListener("resize", f);
    return () => window.removeEventListener("resize", f);
  }, []);
  return m;
}

function Section({
  id,
  title,
  subtitle,
  tone = "default",
  theme = "dark",
  children,
  spacing = 22,
}: {
  id?: string;
  title?: string;
  subtitle?: string;
  tone?: "default" | "panel";
  theme?: "dark" | "light";
  children: React.ReactNode;
  spacing?: number;
}) {
  const isMobile = useIsMobile();
  const isDark = theme === "dark";
  const bgColor = isDark 
    ? (tone === "panel" ? TOKENS.panel : TOKENS.bg)
    : (tone === "panel" ? TOKENS.lightPanel : TOKENS.lightBg);
  const textColor = isDark ? TOKENS.text : TOKENS.lightText;
  const mutedColor = isDark ? TOKENS.muted : TOKENS.lightMuted;
  const strokeColor = isDark ? TOKENS.stroke : TOKENS.lightStroke;

  return (
    <motion.section
      id={id}
      style={{
        background: bgColor,
        padding: isMobile ? "48px 0" : "64px 0",
        borderTop: `1px solid ${strokeColor}`,
      }}
      initial={fadeInViewport.initial}
      whileInView={fadeInViewport.whileInView}
      viewport={fadeInViewport.viewport}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Container>
        {(title || subtitle) && (
          <div style={{ marginBottom: spacing }}>
            {title && <h2 style={{ margin: 0, color: textColor, fontSize: isMobile ? 24 : 28, lineHeight: 1.2, fontWeight: 800 }}>{title}</h2>}
            {subtitle && <p style={{ margin: "10px 0 0", color: mutedColor, fontSize: 16, lineHeight: 1.7 }}>{subtitle}</p>}
          </div>
        )}
        {children}
      </Container>
    </motion.section>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: TOKENS.panel,
        border: `1px solid ${TOKENS.stroke}`,
        borderRadius: TOKENS.radius,
        padding: 18,
      }}
    >
      {children}
    </div>
  );
}

function Button({
  children,
  variant = "primary",
  onClick,
  style,
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  style?: React.CSSProperties;
}) {
  const p = variant === "primary";
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        cursor: "pointer",
        borderRadius: TOKENS.radius,
        border: p ? "1px solid transparent" : `1px solid ${TOKENS.stroke}`,
        background: p ? TOKENS.accent : "transparent",
        color: p ? "#fff" : TOKENS.text,
        padding: "12px 16px",
        fontSize: 13,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: 0.3,
        transition: "all 200ms ease",
        boxShadow: p && isHovered ? "0 0 20px rgba(51, 66, 243, 0.5)" : "none",
        transform: isHovered ? "translateY(-1px)" : "translateY(0)",
        ...style,
      }}
    >
      {children}
    </button>
  );
}

function Input({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      style={{
        width: "100%",
        background: TOKENS.bg,
        border: `1px solid ${TOKENS.stroke}`,
        borderRadius: TOKENS.radius,
        padding: "14px 14px",
        color: TOKENS.text,
        fontSize: 16,
        outline: "none",
      }}
    />
  );
}

function Select<T extends string>({
  value,
  onChange,
  options,
}: {
  value: T;
  onChange: (v: T) => void;
  options: T[];
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as T)}
      style={{
        width: "100%",
        background: TOKENS.bg,
        border: `1px solid ${TOKENS.stroke}`,
        borderRadius: TOKENS.radius,
        padding: "12px 12px",
        color: TOKENS.text,
        fontSize: 14,
        outline: "none",
      }}
    >
      {options.map((o) => (
        <option key={o} value={o} style={{ color: "#000" }}>
          {o}
        </option>
      ))}
    </select>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const links = [
    { t: "Как это работает", href: "#how" },
    { t: "Инфраструктура", href: "#infra" },
    { t: "Форматы", href: "#formats" },
    { t: "Документы", href: "#docs" },
  ];

  const handleScrollToContact = () => {
    if (isMobile) setMenuOpen(false);
    // Скролл к форме обратной связи внизу страницы
    setTimeout(() => {
      const contactSection = document.querySelector('#contact-form');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }
    }, isMobile ? 100 : 0);
  };

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    if (isMobile) setMenuOpen(false);
    
    // Плавный скролл к секции
    setTimeout(() => {
      const targetId = href.replace('#', '');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, isMobile ? 100 : 0);
  };

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: TOKENS.panel,
        borderBottom: `1px solid ${TOKENS.stroke}`,
        backdropFilter: "blur(10px)",
      }}
    >
      <Container>
        <div style={{ height: isMobile ? 56 : 64, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{ display: "flex", gap: 10, alignItems: "center", flexShrink: 0, textDecoration: "none", cursor: "pointer" }}
          >
            <img src={logoImage} alt="FastMine" style={{ width: 36, height: 36 }} />
            <div style={{ color: TOKENS.text, fontWeight: 800, letterSpacing: 0.6, fontSize: 14 }}>FASTMINE</div>
          </a>

          {/* Desktop Navigation */}
          {!isMobile && (
            <>
              <nav style={{ display: "flex", gap: 24, alignItems: "center" }}>
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={(e) => handleLinkClick(e, l.href)}
                    data-active={activeSection === l.href.replace("#", "")}
                    style={{
                      color:
                        activeSection === l.href.replace("#", "")
                          ? TOKENS.accent
                          : TOKENS.text,
                      textDecoration: "none",
                      fontSize: 13,
                      fontWeight:
                        activeSection === l.href.replace("#", "") ? 700 : 400,
                      textTransform: "uppercase",
                      letterSpacing: 0.3,
                      transition: "color 0.2s ease",
                      cursor: "pointer",
                      borderBottom:
                        activeSection === l.href.replace("#", "")
                          ? `2px solid ${TOKENS.accent}`
                          : "2px solid transparent",
                      paddingBottom: 4,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = TOKENS.accent)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = TOKENS.text)}
                  >
                    {l.t}
                  </a>
                ))}
              </nav>

              {/* Contact & CTA */}
              <div style={{ display: "flex", gap: 16, alignItems: "center", flexShrink: 0 }}>
                <a
                  href="https://t.me/fastmineru"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Написать в Telegram @fastmineru"
                  style={{
                    color: TOKENS.muted,
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    fontWeight: 500,
                    transition: "color 0.2s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = TOKENS.accent)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = TOKENS.muted)}
                >
                  <Send size={16} />
                  <span>Telegram</span>
                </a>
                <Button
                  variant="primary"
                  onClick={handleScrollToContact}
                  style={{ fontSize: 13, padding: "10px 20px", height: "auto" }}
                >
                  Получить расчет
                </Button>
              </div>
            </>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "transparent",
                border: "none",
                color: TOKENS.text,
                cursor: "pointer",
                padding: 12,
                minWidth: 44,
                minHeight: 44,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: -4,
              }}
              aria-label="Меню"
            >
              {menuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && menuOpen && (
          <div
            style={{
              borderTop: `1px solid ${TOKENS.stroke}`,
              paddingTop: 20,
              paddingBottom: 24,
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleLinkClick(e, l.href)}
                style={{
                  color:
                    activeSection === l.href.replace("#", "")
                      ? TOKENS.accent
                      : TOKENS.text,
                  textDecoration: "none",
                  fontSize: 15,
                  fontWeight:
                    activeSection === l.href.replace("#", "") ? 700 : 600,
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                  padding: "14px 0",
                  cursor: "pointer",
                  minHeight: 48,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {l.t}
              </a>
            ))}
            <div style={{ height: 1, background: TOKENS.stroke, margin: "12px 0" }} />
            <a
              href="https://t.me/fastmineru"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: TOKENS.muted,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 15,
                fontWeight: 500,
                padding: "14px 0",
                minHeight: 48,
                cursor: "pointer",
              }}
            >
              <Send size={20} />
              <span>Telegram</span>
            </a>
            <Button
              variant="primary"
              onClick={handleScrollToContact}
              style={{ width: "100%", fontSize: 14, padding: "14px 20px", marginTop: 8 }}
            >
              Получить расчет
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
}

function Hero({ onLead }: { onLead: (payload: any) => void }) {
  const isMobile = useIsMobile();
  const [showAllUtp, setShowAllUtp] = useState(false);

  const utpItems =
    isMobile && !showAllUtp ? CONTENT.hero.utp.slice(0, 3) : CONTENT.hero.utp;

  return (
    <motion.section
      style={{
        background: TOKENS.bg,
        padding: isMobile ? "44px 0" : "72px 0",
        position: "relative",
        overflow: "hidden",
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Container>
        <div style={{ position: "relative", zIndex: 1, maxWidth: isMobile ? "100%" : "60%" }}>
          <h1 style={{ margin: 0, color: TOKENS.text, fontSize: isMobile ? 30 : 44, lineHeight: 1.15, fontWeight: 900, marginTop: 0 }}>
            {CONTENT.hero.h1}
          </h1>
          <p style={{ margin: "14px 0 0", color: TOKENS.muted, fontSize: 16, lineHeight: 1.7 }}>{CONTENT.hero.sub}</p>
          <ul style={{ margin: "16px 0 0", paddingLeft: 18, color: TOKENS.text, lineHeight: 1.9 }}>
            {utpItems.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          {isMobile && CONTENT.hero.utp.length > 3 && (
            <button
              type="button"
              onClick={() => setShowAllUtp((v) => !v)}
              style={{
                marginTop: 8,
                background: "transparent",
                border: "none",
                padding: 0,
                color: TOKENS.accent,
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              {showAllUtp ? "Скрыть подробности" : "Показать все преимущества"}
            </button>
          )}
          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              marginTop: 24,
              flexDirection: isMobile ? "column" : "row",
            }}
          >
            <Button
              variant="primary"
              onClick={() => onLead({ source: "hero_primary" })}
              style={isMobile ? { width: "100%", padding: "14px 20px", fontSize: 14 } : undefined}
            >
              {CONTENT.hero.ctaPrimary}
            </Button>
            <Button
              variant="secondary"
              onClick={() => onLead({ source: "hero_telegram" })}
              style={isMobile ? { width: "100%", padding: "14px 20px", fontSize: 14 } : undefined}
            >
              {CONTENT.hero.ctaSecondary}
            </Button>
          </div>
        </div>

        {/* Desktop hero background on the right, separate image on mobile */}
        {!isMobile && (
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: "50%",
              backgroundImage: `url(${heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 1,
              pointerEvents: "none",
            }}
            initial={{ scale: 1.06, opacity: 0.7 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        )}

        {isMobile && (
          <div style={{ marginTop: 28 }}>
            <img
              src={heroImage}
              alt="Газовая ГПУ и инфраструктура FastMine"
              style={{
                width: "100%",
                height: 220,
                objectFit: "cover",
                borderRadius: 8,
                border: `1px solid ${TOKENS.stroke}`,
              }}
            />
          </div>
        )}
      </Container>
    </motion.section>
  );
}

function How() {
  const isMobile = useIsMobile();

  const STEP_IMAGES = {
    s1: asicImage,
    s2: gpuImage,
    s3: deliveryImage,
    s4: commissioningImage,
  };

  const steps = [
    {
      num: "01",
      title: "Определяем конфигурацию ASIC и требуемую мощность",
      desc: "Фиксируем модель, количество и целевое потребление в кВт.",
      footer: "Вводные: ASIC, количество, кВт",
      Icon: Cpu,
      bg: STEP_IMAGES.s1,
      overlayStrength: "light", // lighter overlay for ASIC photo
    },
    {
      num: "02",
      title: "Подбираем ГПУ под мощность и бюджет",
      desc: "Формируем конфигурацию генерации под режим работы и масштабирование.",
      footer: "Конфигурация ГПУ под задачу",
      Icon: Zap,
      bg: STEP_IMAGES.s2,
      overlayStrength: "lighter",
    },
    {
      num: "03",
      title: "Поставка и размещение оборудования",
      desc: "Логистика, подготовка площадки и размещение инфраструктуры под запуск.",
      footer: "Поставка и подготовка площадки",
      Icon: Truck,
      bg: STEP_IMAGES.s3,
      overlayStrength: "default",
    },
    {
      num: "04",
      title: "ПНР и ввод в эксплуатацию",
      desc: "Пусконаладка, запуск, мониторинг и сопровождение 24/7.",
      footer: "Запуск и сопровождение 24/7",
      Icon: Settings,
      bg: STEP_IMAGES.s4,
      overlayStrength: "default",
    },
  ];

  const cols = isMobile ? "1fr" : "repeat(4, 1fr)";

  return (
    <Section
      id="how"
      theme="light"
      title="Как это работает"
      subtitle="Размещение майнингового оборудования на собственной генерации — под ключ, за 4 шага."
    >
      <div style={{ display: "grid", gridTemplateColumns: cols, gap: 14 }}>
        {steps.map((s) => {
          // Determine overlay based on strength setting
          const isLight = s.overlayStrength === "light";
          const isLighter = s.overlayStrength === "lighter";
          const linearGradient = isLight
            ? "linear-gradient(180deg, rgba(3,3,3,0.35) 0%, rgba(3,3,3,0.45) 60%, rgba(3,3,3,0.55) 100%)"
            : isLighter
            ? "linear-gradient(180deg, rgba(3,3,3,0.3) 0%, rgba(3,3,3,0.4) 60%, rgba(3,3,3,0.5) 100%)"
            : "linear-gradient(180deg, rgba(3,3,3,0.4) 0%, rgba(3,3,3,0.5) 60%, rgba(3,3,3,0.6) 100%)";
          const vignetteGradient = isLight
            ? "radial-gradient(circle at 50% 50%, rgba(3,3,3,0) 0%, rgba(3,3,3,0.15) 100%)"
            : isLighter
            ? "radial-gradient(circle at 50% 50%, rgba(3,3,3,0) 0%, rgba(3,3,3,0.1) 100%)"
            : "radial-gradient(circle at 50% 50%, rgba(3,3,3,0) 0%, rgba(3,3,3,0.2) 100%)";

          return (
            <motion.div
              key={s.num}
              style={{
                position: "relative",
                border: `1px solid ${TOKENS.stroke}`,
                borderRadius: TOKENS.radius,
                overflow: "hidden",
                minHeight: isMobile ? 280 : 260,
                backgroundColor: TOKENS.panel,
              }}
              whileHover={{ scale: 1.02, translateY: -4 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {/* BG image */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${s.bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "saturate(0.95) brightness(0.9)",
                }}
              />

              {/* Stronger overlay + vignette */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: linearGradient,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: vignetteGradient,
                }}
              />

              {/* Watermark number */}
              <div
                style={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  fontSize: isMobile ? 72 : 96,
                  fontWeight: 900,
                  color: TOKENS.text,
                  opacity: 0.07,
                  lineHeight: 1,
                  pointerEvents: "none",
                }}
              >
                {s.num}
              </div>

              {/* Content */}
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  padding: 18,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                {/* Header with icon */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      background: "rgba(4,3,7,0.5)",
                      display: "grid",
                      placeItems: "center",
                      flexShrink: 0,
                    }}
                  >
                    <s.Icon size={24} strokeWidth={1.5} color={TOKENS.muted} />
                  </div>
                  <div style={{ flex: 1 }}>
                    {/* Label */}
                    <div
                      style={{
                        color: TOKENS.muted,
                        fontSize: 12,
                        textTransform: "uppercase",
                        letterSpacing: 0.5,
                        fontWeight: 700,
                        marginBottom: 4,
                      }}
                    >
                      ШАГ {s.num}
                    </div>
                    {/* Title */}
                    <div
                      style={{
                        color: TOKENS.text,
                        fontWeight: 800,
                        fontSize: 15,
                        lineHeight: 1.3,
                      }}
                    >
                      {s.title}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p
                  style={{
                    margin: 0,
                    color: TOKENS.muted,
                    lineHeight: 1.55,
                    fontSize: 13,
                    flex: 1,
                  }}
                >
                  {s.desc}
                </p>

                {/* Footer */}
                <div
                  style={{
                    marginTop: 16,
                    paddingTop: 12,
                    borderTop: `1px solid ${TOKENS.stroke}`,
                    color: TOKENS.muted,
                    fontSize: 12,
                    lineHeight: 1.4,
                  }}
                >
                  {s.footer}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

function Why() {
  const isMobile = useIsMobile();
  
  return (
    <section
      style={{
        background: TOKENS.lightBg,
        padding: isMobile ? "64px 0" : "80px 0",
        borderTop: `1px solid ${TOKENS.lightStroke}`,
      }}
    >
      <Container>
        {/* Section header */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ margin: 0, color: TOKENS.lightText, fontSize: 28, lineHeight: 1.2, fontWeight: 800 }}>
            {CONTENT.why.title}
          </h2>
          <p style={{ margin: "10px 0 0", color: TOKENS.lightMuted, fontSize: 16, lineHeight: 1.7 }}>
            {CONTENT.why.subtitle}
          </p>
        </div>

        {/* Two column comparison */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 20 : 36 }}>
          {/* LEFT CARD: Network Power */}
          <div
            style={{
              position: "relative",
              border: `1px solid ${TOKENS.lightStroke}`,
              borderRadius: TOKENS.radius,
              overflow: "hidden",
              minHeight: isMobile ? 380 : 450,
            }}
          >
            {/* Background image */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${gridImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "saturate(0.6) brightness(0.75)",
              }}
            />

            {/* Darker gradient overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, rgba(3,3,3,0.70) 0%, rgba(3,3,3,0.82) 70%, rgba(3,3,3,0.90) 100%)",
              }}
            />

            {/* Content */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                padding: isMobile ? "28px" : "40px 36px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Column title */}
              <div 
                style={{ 
                  color: "#E8E8E8", 
                  fontWeight: 700, 
                  fontSize: 20, 
                  lineHeight: 1.25, 
                  marginBottom: 24,
                  maxWidth: "85%",
                }}
              >
                {CONTENT.why.leftTitle}
              </div>
              
              {/* List items with dash */}
              <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: "85%" }}>
                {CONTENT.why.left.map((x, idx) => (
                  <div 
                    key={x} 
                    style={{ 
                      color: idx === 0 ? "#FFFFFF" : "#CFCFCF", 
                      lineHeight: 1.6, 
                      fontSize: 15, 
                      fontWeight: 400 
                    }}
                  >
                    — {x}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT CARD: FastMine Generation */}
          <div
            style={{
              position: "relative",
              border: `1px solid ${TOKENS.lightStroke}`,
              borderRadius: TOKENS.radius,
              overflow: "hidden",
              minHeight: isMobile ? 380 : 450,
            }}
          >
            {/* Background image */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${fastmineImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "saturate(0.85) brightness(0.9)",
              }}
            />

            {/* Gradient overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, rgba(3,3,3,0.55) 0%, rgba(3,3,3,0.68) 70%, rgba(3,3,3,0.78) 100%)",
              }}
            />

            {/* Content */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                padding: isMobile ? "28px" : "40px 36px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Column title */}
              <div 
                style={{ 
                  color: "#E8E8E8", 
                  fontWeight: 700, 
                  fontSize: 20, 
                  lineHeight: 1.25, 
                  marginBottom: 24,
                  maxWidth: "85%",
                }}
              >
                {CONTENT.why.rightTitle}
              </div>
              
              {/* List items with dash */}
              <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: "85%" }}>
                {CONTENT.why.right.map((x, idx) => (
                  <div 
                    key={x} 
                    style={{ 
                      color: idx === 0 ? "#FFFFFF" : "#CFCFCF", 
                      lineHeight: 1.6, 
                      fontSize: 15, 
                      fontWeight: 400 
                    }}
                  >
                    — {x}
                  </div>
                ))}
              </div>
              {/* Footer */}
              <div
                style={{
                  marginTop: 16,
                  paddingTop: 12,
                  borderTop: `1px solid ${TOKENS.stroke}`,
                  color: TOKENS.text,
                  fontSize: 14,
                  fontWeight: 700,
                  lineHeight: 1.4,
                }}
              >
                {CONTENT.why.rightFooter}
              </div>
            </div>
          </div>
        </div>
        
        {/* Example calculation */}
        <div 
          style={{ 
            marginTop: 32,
            background: "linear-gradient(135deg, rgba(51, 66, 243, 0.08) 0%, rgba(51, 66, 243, 0.03) 100%)",
            border: `1px solid ${TOKENS.lightStroke}`,
            borderRadius: TOKENS.radius,
            padding: isMobile ? 20 : 24,
            textAlign: "center",
          }}
        >
          <div style={{ color: TOKENS.lightText, fontSize: 15, fontWeight: 700, lineHeight: 1.6 }}>
            {CONTENT.why.example}
          </div>
        </div>
        
        {/* CTA after Why section */}
        <div style={{ marginTop: 40, textAlign: "center" }}>
          <Button variant="primary" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}>
            Рассчитать мою экономию
          </Button>
          <p style={{ marginTop: 12, color: TOKENS.lightMuted, fontSize: 13 }}>
            Бесплатный расчет за 2 часа • Без обязательств
          </p>
        </div>
      </Container>
    </section>
  );
}

function Infra() {
  const isMobile = useIsMobile();
  const [hovered, setHovered] = React.useState<number | null>(null);

  const items = [
    {
      title: "Общий вид площадки",
      desc: "Территория промышленного назначения, подготовленная под энергоёмкую нагрузку.",
      img: aerialViewImage,
      meta: "Промышленная территория",
    },
    {
      title: "Контейнерные модули",
      desc: "Модульная инфраструктура размещения оборудования с быстрым масштабированием.",
      img: containerModulesImage,
      meta: "Модульное размещение",
    },
    {
      title: "Квалифицированный персонал",
      desc: "Инженерная команда на объекте, эксплуатация и контроль регламентов.",
      img: personnelImage,
      meta: "Эксплуатация и контроль",
    },
    {
      title: "Серверная и мониторинг ГПУ + ASIC",
      desc: "Сбор телеметрии и контроль параметров. Статусы и события по оборудованию.",
      img: monitoringImage,
      meta: "Мониторинг и телеметрия",
    },
    {
      title: "Регламентное обслуживание оборудования",
      desc: "Плановое ТО, диагностика и устранение неисправностей по регламенту.",
      img: maintenanceImage,
      meta: "ТО по регламенту",
    },
    {
      title: "Telegram-бот по статусу оборудования",
      desc: "Уведомления и быстрые статусы по работе оборудования и событиям на площадке.",
      img: "https://images.unsplash.com/photo-1654764450278-17bb78c00eb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxlZ3JhbSUyMGJvdCUyMHNtYXJ0cGhvbmUlMjBub3RpZmljYXRpb258ZW58MXx8fHwxNzcxMDE3NzU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      meta: "Статусы и уведомления",
    },
  ];

  const cols = isMobile ? "1fr" : "repeat(3, 1fr)";
  const cardH = isMobile ? 240 : 285;

  return (
    <Section
      id="infra"
      title="Инфраструктура площадки"
      subtitle="Фотографии ключевых модулей инфраструктуры и краткое описание каждого."
    >
      <div
        style={
          isMobile
            ? {
                display: "flex",
                gap: 14,
                overflowX: "auto",
                paddingBottom: 4,
                scrollSnapType: "x mandatory",
              }
            : {
                display: "grid",
                gridTemplateColumns: cols,
                gap: 22,
              }
        }
      >
        {items.map((it, idx) => {
          const isHover = hovered === idx;

          return (
            <div
              key={it.title}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "relative",
                height: cardH,
                minWidth: isMobile ? "82vw" : undefined,
                borderRadius: TOKENS.radius,
                border: `1px solid ${TOKENS.stroke}`,
                overflow: "hidden",
                background: TOKENS.panel,
                transform: !isMobile && isHover ? "scale(1.015)" : "scale(1)",
                transition: "transform 180ms ease, border-color 180ms ease",
                scrollSnapAlign: isMobile ? "start" : undefined,
              }}
            >
              {/* Background image */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${it.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  transform: "scale(1.03)",
                  filter: "saturate(1.05) contrast(1.05)",
                }}
              />

              {/* Overlay for readability - lighter and uniform */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: idx === 1 || idx === 3
                    ? "linear-gradient(180deg, rgba(3,3,3,0.15) 0%, rgba(3,3,3,0.52) 72%, rgba(3,3,3,0.62) 100%)"
                    : "linear-gradient(180deg, rgba(3,3,3,0.25) 0%, rgba(3,3,3,0.62) 72%, rgba(3,3,3,0.72) 100%)",
                  transition: "background 180ms ease",
                }}
              />

              {/* Subtle vignette */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  boxShadow: "inset 0 0 110px rgba(0,0,0,0.55)",
                }}
              />

              {/* Content */}
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: isMobile ? 16 : 18,
                  gap: 10,
                }}
              >
                <div>
                  <div
                    style={{
                      color: TOKENS.text,
                      fontWeight: 900,
                      fontSize: 16,
                      lineHeight: 1.25,
                      marginBottom: 8,
                      maxWidth: "92%",
                    }}
                  >
                    {it.title}
                  </div>

                  <div
                    style={{
                      color: TOKENS.muted,
                      fontSize: 13,
                      lineHeight: 1.55,
                      maxWidth: "92%",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {it.desc}
                  </div>
                </div>

                {/* Meta line */}
                <div
                  style={{
                    paddingTop: 10,
                    borderTop: `1px solid rgba(255,255,255,0.12)`,
                    color: TOKENS.text,
                    opacity: 0.85,
                    fontSize: 12,
                    lineHeight: 1.3,
                    letterSpacing: 0.2,
                  }}
                >
                  {it.meta}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function Formats({ onLead }: { onLead: (payload: any) => void }) {
  const isMobile = useIsMobile();
  const [active, setActive] = React.useState("asic");

  const tabs = [
    {
      key: "asic",
      title: "Хостинг для ASIC",
      lead: "350 мест для размещения. Полный цикл — от подбора ASIC до стабильной эксплуатации.",
      highlights: [
        "Фиксированный тариф от 5 ₽ за кВт·ч с НДС",
        "Аптайм до 99% и круглосуточный мониторинг",
        "Полностью легальное электроснабжение и работа по договору",
        "Личный менеджер на всех этапах",
      ],
      blocks: [
        {
          title: "Полный цикл услуг",
          items: [
            "Подбор ASIC под ваш бюджет и экономику",
            "Официальная поставка: ГТД РФ, НДС, логистика по РФ и СНГ",
            "Размещение, настройка и запуск на пуле",
            "Регламентное обслуживание и техническое сопровождение 24/7",
          ],
        },
        {
          title: "Гарантии FastMine",
          items: [
            "10 000+ единиц оборудования размещено за 5 лет",
            "Хостинг входит в реестр операторов майнинга РФ",
            "Прозрачные условия: договор, сопровождение, отчётность",
            "Безопасность: охрана ЧОП и Росгвардия",
          ],
        },
      ],
      cta: "Получить расчет под мой объем",
    },

    // Placeholder tabs (fill later)
    {
      key: "gpu",
      title: "МАЙНИНГ + ГПУ",
      lead: "Готовое решение на газовой генерации Weichai: станция + тариф + размещение с сопровождением. Тариф 3,5 ₽ за кВт·ч с НДС — при приобретении станции.",
      highlights: [
        "Тариф 3,5 ₽ за кВт·ч с НДС (при покупке ГПУ)",
        "Weichai 400 (320) кВт — 9 500 000 ₽ с НДС, ПНР включены",
        "Размещение 80–90 устройсв на 320 кВт постоянной нагрузки",
        "3 станции выкуплены и готовы к отправке (Wuhan)",
      ],
      blocks: [
        {
          title: "Комплектация и размещение",
          items: [
            "Нагрузка: 320 кВт постоянной мощности",
            "Размещение: 80–90 устройств под заданную нагрузку",
            "Станция: Weichai 400 (320) кВт",
            "Стоимость станции: 9 500 000 ₽ с НДС, ПНР включены",
          ],
        },
        {
          title: "Экономика и условия тарифа",
          items: [
            "Итоговый тариф: 3,5 ₽ за кВт·ч с НДС — под ключ (при покупке станции)",
            "Тариф закрепляется за вами в день приобретения станции",
            "Расчет и конфигурация — под ваш объем и сценарий размещения",
          ],
        },
        {
          title: "Генераторы Weichai",
          items: [
            "Официальная дистрибуция Weichai",
            "Пусконаладка и постгарантийное сопровождение от завода",
            "Сертификаты и таможенные декларации в комплекте",
            "Лизинг для юридических лиц",
          ],
        },
        {
          title: "Эксплуатация и сопровождение",
          items: [
            "Топливо очищено и соответствует ГОСТ",
            "Обслуживание генераторов включено в тариф",
            "Подбор ГСМ с лабораторным анализом",
            "Мониторинг и обслуживание майнингового оборудования",
            "Круглосуточная техническая поддержка",
            "Стабильный интернет и защищённая инфраструктура",
            "Охраняемые территории и полная коммуникация комплексов",
          ],
        },
      ],
      cta: "Запросить расчет по ГПУ",
    },
    {
      key: "baudouin_1mw",
      title: "ASIC + ГПУ 1 МВт + Модуль 270 мест",
      lead: "Готовый мегаваттный комплекс на действующей площадке FastMine. BAUDOUIN 1280 (1000 кВт) в наличии в РФ, станции прошли ПНР и введены в эксплуатацию.",
      highlights: [
        "BAUDOUIN 1280 / 1000 кВт — формат от 1 МВт",
        "Итоговый тариф: 3 ₽ за кВт·ч с НДС",
        "Модуль размещения на 270 мест",
        "Комплекс под ключ: генерация + сервис + эксплуатация",
      ],
      blocks: [
        {
          title: "Комплектация комплекса",
          items: [
            "ГПУ BAUDOUIN 1280 (1000 кВт)",
            "Контейнерный модуль на 270 мест",
            "Инженерная инфраструктура подключения",
            "ПНР выполнены, готовность к эксплуатации",
          ],
        },
        {
          title: "Генерация и топливо",
          items: [
            "Газ соответствует ГОСТ",
            "Ресурс до капитального ремонта — от 5 лет",
            "Оптимизированный расход топлива",
            "Работа на действующей промышленной площадке",
          ],
        },
        {
          title: "Эксплуатация и сервис",
          items: [
            "Обслуживание ГПУ с комплектующими",
            "Обслуживание ASIC и модульной инфраструктуры",
            "Интервалы ТО: 1500–2000 моточасов",
            "Снижение удельных затрат на сервис по сравнению с 400-кВт моделями",
          ],
        },
        {
          title: "Финансовая модель",
          items: [
            "BAUDOUIN 1280 (1000 кВт): 38 000 000 ₽ с НДС",
            "Модуль 270 мест: 3 000 000 ₽",
            "Итоговый тариф: 3 ₽ за кВт·ч с НДС",
            "Лизинг, переуступка, аренда с правом выкупа",
            "Тариф фиксируется за заказчиком с момента оплаты комплекса",
          ],
        },
      ],
      cta: "Запросить расчет от 1 МВт",
    },
    {
      key: "invest",
      title: "Инвестиции в генерацию",
      lead: "Станьте владельцем энергоактива, получайте пассивный доход от реализации электроэнергии. Мы берём на себя всю операционную работу — от размещения до эксплуатации.",
      highlights: [
        "До 30% годовых — расчётная доходность*",
        "Реальный актив в вашей собственности",
        "Полное операционное сопровождение FastMine",
        "Начните с 1 установки, масштабируйте портфель",
      ],
      blocks: [
        {
          title: "Ваша роль — владелец актива",
          items: [
            "Вы приобретаете газопоршневую установку (ГПУ) и становитесь владельцем промышленного энергоактива",
            "Получаете регулярный доход от реализации электроэнергии по договору",
            "Контролируете финансовые показатели через прозрачную отчётность",
          ],
        },
        {
          title: "Роль FastMine — операционный партнёр",
          items: [
            "Размещаем оборудование на действующей площадке с газоснабжением",
            "Обеспечиваем техническое обслуживание и регламентные работы 24/7",
            "Ведём договорную работу с потребителями и реализуем мощность",
            "Предоставляем ежемесячную финансовую и техническую отчётность",
          ],
        },
        {
          title: "Финансовые сценарии",
          items: [
            "Прямая покупка — полное владение, максимальная доходность",
            "Лизинг — снижение первоначальных вложений, сохранение контроля",
            "Совместная модель — софинансирование с FastMine по индивидуальной схеме",
            "Расчёт доходности выполняется индивидуально под конфигурацию и загрузку",
          ],
        },
      ],
      cta: "Получить расчет инвестиционной модели",
      footnote: "*Расчетная доходность зависит от конфигурации, загрузки мощности и рыночных условий. Материалы предоставляются по запросу и не являются публичной офертой.",
    },
    {
      key: "dc",
      title: "Дата-центр под ключ",
      lead: "Проектирование и строительство инфраструктуры: от идеи до запуска.",
      highlights: ["Инжиниринг и проект", "Поставка и монтаж", "ПНР и ввод", "Эксплуатация и сервис"],
      blocks: [],
      cta: "Запросить расчет проекта",
    },
  ];

  const activeTab = tabs.find((t) => t.key === active) ?? tabs[0];

  const BulletList = ({ items }: { items: string[] }) => (
    <ul style={{ margin: 0, paddingLeft: 18, color: TOKENS.text, lineHeight: 1.8 }}>
      {items.map((x) => (
        <li key={x} style={{ marginBottom: 10 }}>
          <span style={{ color: TOKENS.text, opacity: 0.92 }}>{x}</span>
        </li>
      ))}
    </ul>
  );

  const Pill = ({ text }: { text: string }) => (
    <div
      style={{
        border: `1px solid ${TOKENS.stroke}`,
        background: TOKENS.bg,
        padding: "10px 12px",
        borderRadius: TOKENS.radius,
        color: TOKENS.text,
        fontSize: 13,
        lineHeight: 1.4,
        fontWeight: 700,
      }}
    >
      {text}
    </div>
  );

  const Content = ({ t }: { t: typeof tabs[number] }) => (
    <div style={{ display: "grid", gap: 14 }}>
      <Card>
        <div style={{ color: TOKENS.text, fontWeight: 900, fontSize: 18, lineHeight: 1.25 }}>{t.title}</div>
        <p style={{ margin: "10px 0 0", color: TOKENS.muted, lineHeight: 1.7, fontSize: 14, maxWidth: 760 }}>{t.lead}</p>

        <div style={{ display: "grid", gap: 10, marginTop: 14 }}>
          {t.highlights.map((h) => (
            <Pill key={h} text={h} />
          ))}
        </div>
      </Card>

      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 14 }}>
        {t.blocks.map((b) => (
          <Card key={b.title}>
            <div style={{ color: TOKENS.text, fontWeight: 900, fontSize: 14, textTransform: "uppercase", letterSpacing: 0.4 }}>
              {b.title}
            </div>
            <div style={{ marginTop: 12 }}>
              <BulletList items={b.items} />
            </div>
          </Card>
        ))}
      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Button variant="primary" onClick={() => onLead({ source: "formats_cta", format: t.key })}>
          {t.cta}
        </Button>
      </div>

      {/* Footnote if present */}
      {(t as any).footnote && (
        <div
          style={{
            marginTop: 14,
            padding: "12px 14px",
            background: TOKENS.bg,
            border: `1px solid ${TOKENS.stroke}`,
            borderRadius: TOKENS.radius,
            color: TOKENS.muted,
            fontSize: 12,
            lineHeight: 1.6,
          }}
        >
          {(t as any).footnote}
        </div>
      )}
    </div>
  );

  return (
    <Section
      id="formats"
      title="Форматы работы"
      subtitle="Выберите формат взаимодействия — покажем условия и подготовим расчет под ваш объем."
    >
      {isMobile ? (
        <div style={{ display: "grid", gap: 10 }}>
          {tabs.map((t) => (
            <details
              key={t.key}
              style={{
                border: `1px solid ${TOKENS.stroke}`,
                background: TOKENS.panel,
                padding: 14,
                borderRadius: TOKENS.radius,
              }}
            >
              <summary style={{ color: TOKENS.text, fontWeight: 900, cursor: "pointer" }}>{t.title}</summary>
              <div style={{ marginTop: 12 }}>
                <Content t={t} />
              </div>
            </details>
          ))}
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: 16, alignItems: "start" }}>
          {/* Left tabs */}
          <div style={{ display: "grid", gap: 10 }}>
            {tabs.map((t) => {
              const on = t.key === active;
              return (
                <button
                  key={t.key}
                  onClick={() => setActive(t.key)}
                  style={{
                    cursor: "pointer",
                    textAlign: "left",
                    borderRadius: TOKENS.radius,
                    border: `1px solid ${on ? "rgba(255,255,255,0.22)" : TOKENS.stroke}`,
                    background: on ? "rgba(255,255,255,0.06)" : TOKENS.panel,
                    color: TOKENS.text,
                    padding: "18px 16px",
                    transition: "all 160ms ease",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 900,
                      fontSize: 15,
                      textTransform: "uppercase",
                      letterSpacing: 0.5,
                    }}
                  >
                    {t.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right content */}
          <div>
            <Content t={activeTab} />
          </div>
        </div>
      )}
    </Section>
  );
}

function Docs() {
  const isMobile = useIsMobile();
  
  // Document categories with lucide-react icons
  const docCategories = [
    {
      category: "Юридическая база",
      icon: Shield,
      items: [
        { text: "Договор на размещение с полным пакетом закрывающих документов", label: "Официально" },
        { text: "Запись в реестре операторов майнинговой инфраструктуры РФ", label: "Лицензия" },
      ]
    },
    {
      category: "Сертификация",
      icon: Award,
      items: [
        { text: "Сертификаты соответствия на GPU и генерирующее оборудование", label: "ГОСТ" },
        { text: "ГТД РФ и таможенные декларации на всё оборудование", label: "Импорт" },
      ]
    },
    {
      category: "Партнёрства",
      icon: Building2,
      items: [
        { text: "Официальный дистрибьютор Weichai в РФ", label: "Прямые поставки" },
        { text: "Контракт газоснабжения и технические условия подключения", label: "Энергия" },
      ]
    },
  ];
  
  return (
    <Section 
      id="docs"
      theme="light"
      title="Работаем по закону — все документы в порядке"
      subtitle="Полный пакет документов, сертификатов и лицензий. Прозрачность на каждом этапе."
    >
      {/* Hero card with key message */}
      <div
        style={{
          background: "linear-gradient(135deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.02) 100%)",
          border: `1px solid ${TOKENS.lightStroke}`,
          borderRadius: TOKENS.radius,
          padding: isMobile ? 24 : 32,
          marginBottom: 32,
          backdropFilter: "blur(12px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative accent */}
        <div
          style={{
            position: "absolute",
            top: -40,
            right: -40,
            width: 180,
            height: 180,
            background: "radial-gradient(circle, rgba(51, 66, 243, 0.12) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
            <div
              style={{
                width: 52,
                height: 52,
                background: "rgba(51, 66, 243, 0.12)",
                border: "1px solid rgba(51, 66, 243, 0.25)",
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
                flexShrink: 0,
              }}
            >
              <Shield size={28} strokeWidth={2} color="#3342f3" />
            </div>
            <div>
              <div style={{ color: TOKENS.lightText, fontSize: 22, fontWeight: 900, lineHeight: 1.2 }}>
                5 лет безупречной работы
              </div>
              <div style={{ color: TOKENS.lightMuted, fontSize: 14, marginTop: 4 }}>
                10 000+ единиц оборудования размещено
              </div>
            </div>
          </div>
          
          <p style={{ 
            margin: 0, 
            color: TOKENS.lightMuted, 
            fontSize: 15, 
            lineHeight: 1.7,
            maxWidth: 720,
          }}>
            Работаем только по официальным договорам с полным пакетом документов. 
            Все разрешения, сертификаты и лицензии — в наличии. Никаких рисков для вашего бизнеса.
          </p>
        </div>
      </div>

      {/* Document categories grid */}
      <div 
        style={{ 
          display: "grid", 
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", 
          gap: 18,
          marginBottom: 32,
        }}
      >
        {docCategories.map((category) => {
          const IconComponent = category.icon;
          return (
            <div
              key={category.category}
              style={{
                background: "rgba(0, 0, 0, 0.02)",
                border: `1px solid ${TOKENS.lightStroke}`,
                borderRadius: TOKENS.radius,
                padding: 22,
                backdropFilter: "blur(8px)",
                transition: "all 240ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0, 0, 0, 0.04)";
                e.currentTarget.style.borderColor = "#cccccc";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(0, 0, 0, 0.02)";
                e.currentTarget.style.borderColor = TOKENS.lightStroke;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Category header with icon */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    background: "rgba(0, 0, 0, 0.05)",
                    border: `1px solid ${TOKENS.lightStroke}`,
                    borderRadius: TOKENS.radius,
                    display: "grid",
                    placeItems: "center",
                    flexShrink: 0,
                  }}
                >
                  <IconComponent size={22} strokeWidth={2} color={TOKENS.lightMuted} />
                </div>
                <div 
                  style={{ 
                    color: TOKENS.lightText, 
                    fontSize: 16, 
                    fontWeight: 800,
                    letterSpacing: 0.3,
                  }}
                >
                  {category.category}
                </div>
              </div>

              {/* Items list */}
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {category.items.map((item) => (
                  <div key={item.text}>
                    {/* Label badge */}
                    <div
                      style={{
                        display: "inline-flex",
                        background: "rgba(0, 0, 0, 0.06)",
                        border: `1px solid ${TOKENS.lightStroke}`,
                        padding: "3px 8px",
                        borderRadius: 3,
                        fontSize: 10,
                        fontWeight: 700,
                        color: TOKENS.lightText,
                        letterSpacing: 0.5,
                        textTransform: "uppercase",
                        marginBottom: 6,
                      }}
                    >
                      {item.label}
                    </div>
                    {/* Text */}
                    <div 
                      style={{ 
                        color: TOKENS.lightText, 
                        fontSize: 13, 
                        lineHeight: 1.6,
                        fontWeight: 500,
                      }}
                    >
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Leasing partners - reimagined */}
      <div
        style={{
          background: "rgba(0, 0, 0, 0.03)",
          border: `1px solid ${TOKENS.lightStroke}`,
          borderRadius: TOKENS.radius,
          padding: isMobile ? 20 : 28,
          backdropFilter: "blur(8px)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <TrendingUp size={24} strokeWidth={2} color={TOKENS.accent} />
          <div>
            <div style={{ color: TOKENS.lightText, fontSize: 18, fontWeight: 800 }}>
              Лизинговые программы
            </div>
            <div style={{ color: TOKENS.lightMuted, fontSize: 13, marginTop: 2 }}>
              Работаем с ведущими лизинговыми компаниями РФ
            </div>
          </div>
        </div>
        
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {CONTENT.docs.leasing.map((partner) => (
            <div
              key={partner}
              style={{
                background: "rgba(0, 0, 0, 0.06)",
                border: `1px solid ${TOKENS.lightStroke}`,
                padding: "10px 18px",
                borderRadius: 6,
                color: TOKENS.lightText,
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 0.3,
                transition: "all 180ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0, 0, 0, 0.10)";
                e.currentTarget.style.borderColor = "#cccccc";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(0, 0, 0, 0.06)";
                e.currentTarget.style.borderColor = TOKENS.lightStroke;
              }}
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Gallery({ onLead }: { onLead: (payload: any) => void }) {
  const isMobile = useIsMobile();
  
  const galleryImages = [
    {
      img: aerialViewImage,
      title: "Общий вид площадки",
      desc: "Территория промышленного назначения",
    },
    {
      img: containerModulesImage,
      title: "Контейнерные модули",
      desc: "Модульная инфраструктура размещения",
    },
    {
      img: personnelImage,
      title: "Квалифицированный персонал",
      desc: "Инженерная команда на объекте",
    },
    {
      img: maintenanceImage,
      title: "Регламентное обслуживание",
      desc: "Плановое ТО и диагностика",
    },
    {
      img: newStationsImage,
      title: "Каждый месяц поступление новых станций",
      desc: "Регулярные поставки оборудования",
    },
  ];
  
  return (
    <Section theme="dark" title={CONTENT.gallery.title} subtitle={CONTENT.gallery.subtitle} tone="panel">
      {/* Gallery grid */}
      <div
        style={
          isMobile
            ? {
                display: "flex",
                gap: 14,
                overflowX: "auto",
                paddingBottom: 4,
                marginBottom: 24,
                scrollSnapType: "x mandatory",
              }
            : {
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 14,
                marginBottom: 24,
              }
        }
      >
        {galleryImages.map((item, idx) => (
          <div
            key={idx}
            style={{
              position: "relative",
              height: isMobile ? 220 : 280,
              minWidth: isMobile ? "82vw" : undefined,
              borderRadius: TOKENS.radius,
              border: `1px solid ${TOKENS.stroke}`,
              overflow: "hidden",
              background: TOKENS.panel,
              scrollSnapAlign: isMobile ? "start" : undefined,
            }}
          >
            {/* Background image */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "saturate(1.05) contrast(1.05)",
              }}
            />
            
            {/* Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, rgba(3,3,3,0.25) 0%, rgba(3,3,3,0.65) 70%, rgba(3,3,3,0.75) 100%)",
              }}
            />
            
            {/* Content */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: 18,
              }}
            >
              <div style={{ color: TOKENS.text, fontWeight: 900, fontSize: 16, lineHeight: 1.25, marginBottom: 6 }}>
                {item.title}
              </div>
              <div style={{ color: TOKENS.muted, fontSize: 13, lineHeight: 1.5 }}>
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* CTA Card */}
      <div
        style={{
          background: TOKENS.panel,
          border: `1px solid ${TOKENS.stroke}`,
          borderRadius: TOKENS.radius,
          padding: 18,
        }}
      >
        <div style={{ color: TOKENS.text, fontWeight: 900, fontSize: 16 }}>Нужна демонстрация площадки?</div>
        <p style={{ margin: "10px 0 0", color: TOKENS.muted, lineHeight: 1.7 }}>
          Запросите видео-обзор, отправим материалы в удобный мессенджер.
        </p>
        <div style={{ marginTop: 14 }}>
          <Button variant="primary" onClick={() => onLead({ source: "video_request" })}>
            {CONTENT.gallery.cta}
          </Button>
        </div>
      </div>
    </Section>
  );
}

function FAQ() {
  const isMobile = useIsMobile();
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <Section
      theme="light"
      title={CONTENT.faq.title}
      subtitle={CONTENT.faq.subtitle}
    >
      <div style={{ display: "grid", gap: 14, maxWidth: 900, margin: "0 auto" }}>
        {CONTENT.faq.items.map((item, idx) => {
          const isOpen = openIndex === idx;
          
          return (
            <div
              key={idx}
              style={{
                background: TOKENS.lightPanel,
                border: `1px solid ${isOpen ? TOKENS.accent : TOKENS.lightStroke}`,
                borderRadius: TOKENS.radius,
                overflow: "hidden",
                transition: "all 200ms ease",
              }}
            >
              {/* Question header */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  padding: isMobile ? "18px 20px" : "20px 24px",
                  textAlign: "left",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                }}
              >
                <div style={{ color: TOKENS.lightText, fontSize: 16, fontWeight: 800, lineHeight: 1.4 }}>
                  {item.q}
                </div>
                <div
                  style={{
                    color: isOpen ? TOKENS.accent : TOKENS.lightMuted,
                    fontSize: 20,
                    fontWeight: 700,
                    flexShrink: 0,
                    transition: "transform 200ms ease",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </div>
              </button>

              {/* Answer */}
              {isOpen && (
                <div
                  style={{
                    padding: `0 ${isMobile ? "20px" : "24px"} ${isMobile ? "18px" : "20px"}`,
                    color: TOKENS.lightMuted,
                    fontSize: 15,
                    lineHeight: 1.7,
                    borderTop: `1px solid ${TOKENS.lightStroke}`,
                  }}
                >
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      {/* CTA after FAQ */}
      <div style={{ textAlign: "center", marginTop: 32 }}>
        <p style={{ color: TOKENS.lightMuted, marginBottom: 14 }}>
          Остались вопросы?
        </p>
        <Button variant="primary" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}>
          Получить консультацию
        </Button>
      </div>
    </Section>
  );
}

function Final({ onLead }: { onLead: (payload: any) => void }) {
  const isMobile = useIsMobile();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [power, setPower] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section id="contact-form" style={{ background: TOKENS.bg, padding: isMobile ? "48px 0" : "72px 0", borderTop: `1px solid ${TOKENS.stroke}` }}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.1fr 0.9fr", gap: isMobile ? 24 : 18 }}>
          <div>
            <h2 style={{ margin: 0, color: TOKENS.text, fontSize: isMobile ? 24 : 28, fontWeight: 900 }}>{CONTENT.final.title}</h2>
            <p style={{ margin: "10px 0 0", color: TOKENS.muted, lineHeight: 1.7 }}>{CONTENT.final.subtitle}</p>
          </div>

          <Card>
            <div style={{ display: "grid", gap: isMobile ? 14 : 12 }}>
              <Input value={name} onChange={setName} placeholder={CONTENT.final.namePh} />
              <Input value={contact} onChange={setContact} placeholder={CONTENT.final.contactPh} />
              <Input value={power} onChange={setPower} placeholder={CONTENT.final.powerPh} />
              <Button
                variant="primary"
                onClick={() => {
                  onLead({ source: "final_form", name, contact, power });
                  setSent(true);
                  setTimeout(() => setSent(false), 4000);
                }}
                style={isMobile ? { padding: "14px 20px", fontSize: 14 } : undefined}
              >
                {CONTENT.final.btn}
              </Button>
              {sent && (
                <div
                  style={{
                    marginTop: 4,
                    padding: "8px 10px",
                    borderRadius: 4,
                    background: "rgba(51, 66, 243, 0.12)",
                    border: `1px solid ${TOKENS.accent}`,
                    color: TOKENS.text,
                    fontSize: 12,
                    textAlign: "center",
                  }}
                >
                  Заявка отправлена. Ответим в течение 2 часов в рабочее время.
                </div>
              )}
              
              {/* Security badge */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "center", marginTop: 4 }}>
                <Shield size={14} color={TOKENS.muted} />
                <span style={{ color: TOKENS.muted, fontSize: 11 }}>
                  Ваши данные защищены
                </span>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  const isMobile = useIsMobile();
  
  const contactInfo = [
    {
      icon: Phone,
      label: "Телефон / WhatsApp",
      value: "+7 953 670 0933",
      href: "tel:+79536700933",
    },
    {
      icon: Mail,
      label: "Email",
      value: "fastminesales@gmail.com",
      href: "mailto:fastminesales@gmail.com",
    },
    {
      icon: Send,
      label: "Telegram",
      value: "@fastmineru",
      href: "https://t.me/fastmineru",
    },
    {
      icon: MapPin,
      label: "Адрес",
      value: "г. Москва, Большой Знаменский пер. 2 с 7",
      href: null,
    },
  ];
  
  const quickLinks = [
    { label: "Как это работает", href: "#how" },
    { label: "Инфраструктура", href: "#infra" },
    { label: "Форматы работы", href: "#formats" },
    { label: "Документы", href: "#docs" },
  ];
  
  return (
    <footer style={{ background: TOKENS.panel, borderTop: `1px solid ${TOKENS.stroke}` }}>
      <Container>
        {/* Main footer content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1.2fr 1fr 1fr",
            gap: isMobile ? 32 : 48,
            padding: "56px 0 40px",
          }}
        >
          {/* Company info */}
          <div>
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 16 }}>
              <img src={logoImage} alt="FastMine" style={{ width: 36, height: 36 }} />
              <div style={{ color: TOKENS.text, fontWeight: 800, letterSpacing: 0.6, fontSize: 18 }}>FASTMINE</div>
            </div>
            <p style={{ margin: 0, color: TOKENS.muted, fontSize: 14, lineHeight: 1.7, maxWidth: 340 }}>
              Промышленная площадка для майнинга на собственной газовой генерации. Стабильная инфраструктура и предсказуемые тарифы.
            </p>
            
            {/* Work hours */}
            <div style={{ marginTop: 20, padding: "12px 14px", background: "rgba(255,255,255,0.03)", border: `1px solid ${TOKENS.stroke}`, borderRadius: 4 }}>
              <div style={{ color: TOKENS.text, fontSize: 12, fontWeight: 700, marginBottom: 4, textTransform: "uppercase", letterSpacing: 0.4 }}>
                Режим работы
              </div>
              <div style={{ color: TOKENS.muted, fontSize: 13, lineHeight: 1.5 }}>
                Ежедневно с 10:00 до 20:00
              </div>
            </div>
            
            {/* Legal info */}
            <div style={{ marginTop: 24, paddingTop: 20, borderTop: `1px solid ${TOKENS.stroke}` }}>
              <div style={{ color: TOKENS.muted, fontSize: 11, lineHeight: 1.6 }}>
                <div style={{ marginBottom: 4 }}>ООО "ДСК-ГРУПП"</div>
                <div style={{ marginBottom: 4 }}>ИНН: 9704133660</div>
                <div style={{ marginBottom: 4 }}>КПП: 770401001</div>
                <div style={{ marginTop: 8, paddingTop: 8, borderTop: `1px solid rgba(255,255,255,0.05)` }}>
                  <div style={{ color: TOKENS.text, fontSize: 10, fontWeight: 700, marginBottom: 4, textTransform: "uppercase", letterSpacing: 0.3 }}>
                    Юридический адрес
                  </div>
                  <div>119019, г. Москва, вн.тер.г. Муниципальный Округ Хамовники, пер. Большой Знаменский, д. 2, стр. 10</div>
                </div>
                <div style={{ marginTop: 10, padding: "8px 10px", background: "rgba(51, 66, 243, 0.08)", border: "1px solid rgba(51, 66, 243, 0.2)", borderRadius: 3 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: TOKENS.accent }}>
                    Безналичный расчёт с НДС и УСН
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <div style={{ color: TOKENS.text, fontSize: 14, fontWeight: 800, marginBottom: 18, textTransform: "uppercase", letterSpacing: 0.5 }}>
              Навигация
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    color: TOKENS.muted,
                    textDecoration: "none",
                    fontSize: 13,
                    lineHeight: 1.5,
                    transition: "color 160ms ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = TOKENS.text)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = TOKENS.muted)}
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            {/* Bank details */}
            <div style={{ marginTop: 24, paddingTop: 20, borderTop: `1px solid ${TOKENS.stroke}` }}>
              <div style={{ color: TOKENS.text, fontSize: 12, fontWeight: 800, marginBottom: 12, textTransform: "uppercase", letterSpacing: 0.4 }}>
                Банковские реквизиты
              </div>
              <div style={{ color: TOKENS.muted, fontSize: 11, lineHeight: 1.7 }}>
                <div style={{ marginBottom: 6 }}>
                  <span style={{ color: TOKENS.text, fontWeight: 600 }}>Банк:</span> АО "АЛЬФА-БАНК"
                </div>
                <div style={{ marginBottom: 6 }}>
                  <span style={{ color: TOKENS.text, fontWeight: 600 }}>БИК:</span> 044525593
                </div>
                <div style={{ marginBottom: 6 }}>
                  <span style={{ color: TOKENS.text, fontWeight: 600 }}>Кор. счёт:</span> 30101810200000000593
                </div>
                <div style={{ marginBottom: 6 }}>
                  <span style={{ color: TOKENS.text, fontWeight: 600 }}>Расчётный счёт:</span> 40702810002620011362
                </div>
                <div>
                  <span style={{ color: TOKENS.text, fontWeight: 600 }}>Валюта:</span> RUR
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact info */}
          <div>
            <div style={{ color: TOKENS.text, fontSize: 14, fontWeight: 800, marginBottom: 18, textTransform: "uppercase", letterSpacing: 0.5 }}>
              Контакты
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {contactInfo.map((item) => {
                const IconComponent = item.icon;
                const content = (
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        background: "rgba(255, 255, 255, 0.05)",
                        border: `1px solid ${TOKENS.stroke}`,
                        borderRadius: TOKENS.radius,
                        display: "grid",
                        placeItems: "center",
                        flexShrink: 0,
                      }}
                    >
                      <IconComponent size={16} strokeWidth={2} color={TOKENS.muted} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ color: TOKENS.muted, fontSize: 10, textTransform: "uppercase", letterSpacing: 0.4, marginBottom: 2 }}>
                        {item.label}
                      </div>
                      <div style={{ color: TOKENS.text, fontSize: 13, fontWeight: 600, lineHeight: 1.4 }}>
                        {item.value}
                      </div>
                    </div>
                  </div>
                );
                
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    style={{ textDecoration: "none", transition: "opacity 160ms ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div
          style={{
            borderTop: `1px solid ${TOKENS.stroke}`,
            padding: "24px 0",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "center",
            gap: 16,
          }}
        >
          <div style={{ color: TOKENS.muted, fontSize: 12 }}>
            © 2026 FastMine. Все права защищены.
          </div>
          
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <a
              href="#privacy"
              style={{
                color: TOKENS.muted,
                textDecoration: "none",
                fontSize: 12,
                transition: "color 160ms ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = TOKENS.text)}
              onMouseLeave={(e) => (e.currentTarget.style.color = TOKENS.muted)}
            >
              Политика конфиденциальности
            </a>
            <a
              href="#terms"
              style={{
                color: TOKENS.muted,
                textDecoration: "none",
                fontSize: 12,
                transition: "color 160ms ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = TOKENS.text)}
              onMouseLeave={(e) => (e.currentTarget.style.color = TOKENS.muted)}
            >
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default function App() {
  const [events, setEvents] = useState<any[]>([]);
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  const onLead = (payload: any) => {
    const item = { ts: new Date().toISOString(), ...payload };
    setEvents((p) => [item, ...p].slice(0, 6));
    alert("Демо: заявка зафиксирована. В Tilda подключишь формы/CRM/Telegram.");
  };

  const last = useMemo(() => events, [events]);

  // Sticky CTA logic
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      setShowStickyCTA(scrollPercentage > 30 && scrollPercentage < 90);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: TOKENS.bg, color: TOKENS.text, fontFamily: "Montserrat, Arial, sans-serif" }}>
      <Header />
      <Hero onLead={onLead} />
      <How />
      <Why />
      <Infra />
      <Section
        id="formats"
        title="Форматы работы"
        subtitle="Выберите формат взаимодействия — покажем условия и подготовим расчет под ваш объем."
      >
        <FormatsImproved onLead={onLead} isMobile={useIsMobile()} />
      </Section>
      <Docs />
      <Gallery onLead={onLead} />
      <FAQ />
      <Final onLead={onLead} />
      <Footer />

      {/* Sticky CTA Bar */}
      {showStickyCTA && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            background: TOKENS.panel,
            borderTop: `2px solid ${TOKENS.accent}`,
            padding: "14px 0",
            boxShadow: "0 -4px 20px rgba(0,0,0,0.4)",
            animation: "slideUp 0.3s ease",
          }}
        >
          <Container>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Zap size={24} color={TOKENS.accent} strokeWidth={2.5} />
                <div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: TOKENS.text }}>
                    Экономия на каждый 1 МВт: до 1 944 000 ₽/год
                  </div>
                  <div style={{ fontSize: 12, color: TOKENS.muted }}>
                    Рассчитаем персональный тариф за 2 часа
                  </div>
                </div>
              </div>
              <Button variant="primary" onClick={() => {
                const contactSection = document.querySelector('#contact-form');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                }
              }}>
                Получить расчет
              </Button>
            </div>
          </Container>
        </div>
      )}
      
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}