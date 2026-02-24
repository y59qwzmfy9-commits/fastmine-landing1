import React from "react";
import { motion } from "motion/react";
import { Server, Flame, Sparkles, TrendingUp, Building2 } from "lucide-react";
const fullCycleImage = "/assets/full-cycle.png";
const guaranteesImage = "/assets/guarantees.png";
const asicHostingImage = "/assets/asic-hosting.png";
const gpuMiningImage = "/assets/gpu-mining.png";
const weichaiImage = "/assets/weichai.png";
const gasInfraImage = "/assets/gas-infra.png";
const technicianImage = "/assets/technician.png";
const baudouinImage = "/assets/baudouin.png";
const baudouinComplexImage = "/assets/baudouin-complex.png";
const gasPipelineImage = "/assets/gas-pipeline.png";
const serviceMaintenanceImage = "/assets/service-maintenance.png";
const financialModelImage = "/assets/financial-model.png";
const supermalyGeneratorImage = "/assets/supermaly-generator.png";
const gasPipelineFieldImage = "/assets/gas-pipeline-field.png";
const engiBlueGeneratorImage = "/assets/engi-blue-generator.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Unsplash images for Invest tab
const investModelImage = "https://images.unsplash.com/photo-1759109391537-ee5aec6f1775?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwb3dlciUyMHBsYW50JTIwZWxlY3RyaWNhbCUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc3MTI1MzA0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const investFastMineImage = "https://images.unsplash.com/photo-1701146125128-b0b03267e58a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwaW5mcmFzdHJ1Y3R1cmUlMjBwaXBlbGluZSUyMGZhY2lsaXR5fGVufDF8fHx8MTc3MTI1MzIzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const investAdvantagesImage = "https://images.unsplash.com/photo-1681495628907-592089c3a546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGdlbmVyYXRpb24lMjBlcXVpcG1lbnQlMjBtdWx0aXBsZSUyMHVuaXRzfGVufDF8fHx8MTc3MTI1MzMwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const investFinancialImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBncm93dGglMjBjaGFydCUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NzExNDc0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const TOKENS = {
  bg: "#040307",
  panel: "#030303",
  text: "#dbdbdb",
  muted: "#A0A4A8",
  stroke: "#424242",
  accent: "#3342f3",
  maxW: 1200,
  radius: 0,
};

interface FormatTab {
  key: string;
  title: string;
  lead: string;
  highlights: string[];
  blocks: { title: string; items: string[] }[];
  cta: string;
  footnote?: string;
}

interface FormatsImprovedProps {
  onLead: (payload: any) => void;
  isMobile: boolean;
}

export function FormatsImproved({ onLead, isMobile }: FormatsImprovedProps) {
  const [active, setActive] = React.useState("asic");
  const [isAnimating, setIsAnimating] = React.useState(false);

  // Transition handler with animation
  const handleTabChange = (newKey: string) => {
    if (newKey === active) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActive(newKey);
      setIsAnimating(false);
    }, 150);
  };

  // Format metadata with icons - unified glassmorphism style
  const formatMeta: Record<
    string,
    {
      icon: any;
      color: string;
      accentColor: string;
      badge?: string;
      badgeBg?: string;
      label?: string;
    }
  > = {
    asic: {
      icon: Server,
      color: "#FFFFFF",
      accentColor: "rgba(255, 255, 255, 0.08)",
      badge: "от 5₽",
      badgeBg: "rgba(255, 255, 255, 0.12)",
    },
    gpu: {
      icon: Flame,
      color: "#FFFFFF",
      accentColor: "rgba(255, 255, 255, 0.08)",
      badge: "3.5₽",
      badgeBg: "rgba(255, 255, 255, 0.12)",
      label: "ПОПУЛЯРНЫЙ",
    },
    baudouin_1mw: {
      icon: Sparkles,
      color: "#FFFFFF",
      accentColor: "rgba(255, 255, 255, 0.08)",
      badge: "3₽",
      badgeBg: "rgba(255, 255, 255, 0.12)",
      label: "ЛУЧШАЯ ЦЕНА",
    },
    invest: {
      icon: TrendingUp,
      color: "#FFFFFF",
      accentColor: "rgba(255, 255, 255, 0.08)",
      badge: "до 30% годовых",
      badgeBg: "rgba(255, 255, 255, 0.12)",
    },
    dc: {
      icon: Building2,
      color: "#FFFFFF",
      accentColor: "rgba(255, 255, 255, 0.08)",
    },
  };

  const tabs: FormatTab[] = [
    {
      key: "asic",
      title: "Хостинг для ASIC",
      lead: "Полный цикл — от подбора ASIC до стабильной эксплуатации.",
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
    {
      key: "gpu",
      title: "МАЙНИНГ + ГПУ",
      lead: "Готовое решение: газовая станция Weichai + размещение с полным сопровождением. Тариф 3,5 ₽ за кВт·ч с НДС при покупке станции.",
      highlights: [
        "Тариф 3,5 ₽ за кВт·ч с НДС (при покупке ГПУ)",
        "Weichai 400 (320 кВт) — 9 500 000 ₽ с НДС, ПНР включены",
        "Размещение 80–90 устройств на 320 кВт",
        "3 станции готовы к отправке (Wuhan)",
      ],
      blocks: [
        {
          title: "Комплектация",
          items: [
            "Weichai 400 (320 кВт постоянной мощности)",
            "Стоимость: 9 500 000 ₽ с НДС, ПНР включены",
            "Размещение: 80–90 устройств",
            "Доступно: 3 станции готовы к отправке из Wuhan",
          ],
        },
        {
          title: "Условия и тариф",
          items: [
            "Итоговый тариф: 3,5 ₽/кВт·ч с НДС под ключ",
            "Тариф фиксируется в день покупки станции",
            "Официальная дистрибуция Weichai с сертификатами",
            "Лизинг для юридических лиц",
          ],
        },
        {
          title: "Полное сопровождение",
          items: [
            "Пусконаладка и постгарантийное обслуживание от завода",
            "Топливо соответствует ГОСТ с лабораторным анализом",
            "Обслуживание генераторов и майнингового оборудования включено",
            "Мониторинг 24/7, охрана и защищённая инфраструктура",
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
      lead: "Инвестирование в газовую генерацию как в промышленный актив. Вы приобретаете ГПУ, FastMine обеспечивает размещение, эксплуатацию и реализацию мощности по договорной модели.",
      highlights: [
        "Расчетная доходность проекта — до 30% годовых*",
        "Материальный актив в собственности инвестора",
        "Эксплуатация и обслуживание на стороне FastMine",
        "Выплаты по графику: ежемесячно или ежеквартально",
      ],
      blocks: [
        {
          title: "Как работает модель",
          items: [
            "Вы приобретаете современную газопоршневую установку",
            "FastMine размещает и подключает её на собственной площадке с подачей газа",
            "FastMine обеспечивает обслуживание, регламентные работы и ремонт",
            "Реализация мощности осуществляется по договорной модели с потребителями",
            "Вы получаете доход от продажи произведённой электроэнергии по условиям договора",
          ],
        },
        {
          title: "Что обеспечивает FastMine",
          items: [
            "Площадка и инфраструктура подключения",
            "Газоснабжение и контроль качества топлива",
            "Полное техническое обслуживание ГПУ",
            "Мониторинг и эксплуатация 24/7",
            "Договорная работа с потребителями мощности",
          ],
        },
        {
          title: "Преимущества инвестора",
          items: [
            "Владение оборудованием как промышленным активом",
            "Операционное управление и эксплуатация — на стороне FastMine",
            "Можно начинать с одной установки и масштабироваться",
            "Прозрачная финансовая модель и отчетность",
          ],
        },
        {
          title: "Финансовая модель",
          items: [
            "Доход от реализации произведённой электроэнергии",
            "Загрузка мощности по договорам и фактической эксплуатации",
            "Расчет доходности индивидуально под конфигурацию",
            "Сценарии: покупка, лизинг, совместная модель",
          ],
        },
      ],
      cta: "Получить расчет инвестиционной модели",
      footnote:
        "*Расчетная доходность зависит от конфигурации, загрузки мощности и рыночных условий. Детальные материалы предоставляются по запросу.",
    },
  ];

  const activeTab = tabs.find((t) => t.key === active) ?? tabs[0];

  const Card = ({ children }: { children: React.ReactNode }) => (
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

  const Button = ({
    children,
    variant = "primary",
    onClick,
  }: {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    onClick?: () => void;
  }) => {
    const p = variant === "primary";
    return (
      <button
        onClick={onClick}
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
        }}
      >
        {children}
      </button>
    );
  };

  const BulletList = ({ items }: { items: string[] }) => (
    <ul style={{ margin: 0, paddingLeft: 18, color: TOKENS.text, lineHeight: 1.8 }}>
      {items.map((x) => (
        <li key={x} style={{ marginBottom: 10 }}>
          <span style={{ color: TOKENS.text, opacity: 0.92 }}>{x}</span>
        </li>
      ))}
    </ul>
  );

  // Simple text list styled like Infrastructure section
  const SimpleTextList = ({ items }: { items: string[] }) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map((item, idx) => (
        <div
          key={idx}
          style={{
            color: TOKENS.muted,
            fontSize: 13,
            lineHeight: 1.55,
            padding: "8px 12px",
            background: "rgba(255,255,255,0.03)",
            border: `1px solid ${TOKENS.stroke}`,
            borderRadius: 4,
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );

  // Wrapper with divider
  const SimpleTextListWithDivider = ({ items }: { items: string[] }) => (
    <div style={{ borderTop: `1px solid ${TOKENS.stroke}`, paddingTop: 12 }}>
      <SimpleTextList items={items} />
    </div>
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
  
  // Compact badges for image cards - glassmorphism unified style
  const CompactBadge = ({ text, color }: { text: string; color: string }) => (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        background: "rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(12px)",
        padding: "5px 9px",
        borderRadius: 4,
        color: TOKENS.text,
        fontSize: 11.5,
        lineHeight: 1.35,
        fontWeight: 600,
        boxShadow: "0 1px 6px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.1)",
      }}
    >
      {text}
    </div>
  );

  const Content = ({ t }: { t: FormatTab }) => {
    const m = formatMeta[t.key];
    const IconComponent = m.icon;
    
    // Check tabs for hero card background
    const isAsicTab = t.key === "asic";
    const isGpuTab = t.key === "gpu";
    const isBaudouinTab = t.key === "baudouin_1mw";
    const isInvestTab = t.key === "invest";

    return (
      <div
        style={{
          display: "grid",
          gap: 14,
          opacity: isAnimating ? 0 : 1,
          transform: isAnimating ? "translateY(10px)" : "translateY(0)",
          transition: "opacity 200ms ease, transform 200ms ease",
        }}
      >
        <div
          style={{
            position: "relative",
            background: TOKENS.panel,
            border: `1px solid ${TOKENS.stroke}`,
            borderRadius: TOKENS.radius,
            padding: isMobile ? 20 : 28,
            overflow: "hidden",
            minHeight: isMobile ? 280 : 320,
          }}
        >
          {/* Background image for ASIC tab */}
          {isAsicTab && (
            <>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${asicHostingImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "saturate(0.95) brightness(0.85)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(3,3,3,0.45) 0%, rgba(3,3,3,0.65) 100%)",
                }}
              />
            </>
          )}
          
          {/* Background image for GPU tab */}
          {isGpuTab && (
            <>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${gpuMiningImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "saturate(0.95) brightness(0.85)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(3,3,3,0.45) 0%, rgba(3,3,3,0.65) 100%)",
                }}
              />
            </>
          )}
          
          {/* Background image for Baudouin 1MW tab */}
          {isBaudouinTab && (
            <>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${baudouinImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "saturate(0.95) brightness(0.85)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(3,3,3,0.45) 0%, rgba(3,3,3,0.65) 100%)",
                }}
              />
            </>
          )}
          
          {/* Background image for Invest tab */}
          {isInvestTab && (
            <>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${baudouinComplexImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "saturate(0.95) brightness(0.85)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(3,3,3,0.45) 0%, rgba(3,3,3,0.65) 100%)",
                }}
              />
            </>
          )}

          {/* Content */}
          <div style={{ position: "relative", zIndex: 2 }}>
            {/* Header with icon and badge - glassmorphism */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 12 }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: TOKENS.radius,
                  background: "rgba(255, 255, 255, 0.08)",
                  display: "grid",
                  placeItems: "center",
                  flexShrink: 0,
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <IconComponent size={24} strokeWidth={2} color="#FFFFFF" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 6 }}>
                  <div style={{ color: TOKENS.text, fontWeight: 900, fontSize: 18, lineHeight: 1.25 }}>{t.title}</div>
                  {m.badge && (
                    <div
                      style={{
                        background: "rgba(255, 255, 255, 0.12)",
                        color: TOKENS.text,
                        padding: "4px 10px",
                        borderRadius: 4,
                        fontSize: 12,
                        fontWeight: 800,
                        letterSpacing: 0.3,
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {m.badge}
                    </div>
                  )}
                  {m.label && (
                    <div
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        color: TOKENS.text,
                        padding: "4px 8px",
                        borderRadius: 4,
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: 0.5,
                        textTransform: "uppercase",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {m.label}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <p style={{ margin: "0 0 0", color: TOKENS.muted, lineHeight: 1.7, fontSize: isMobile ? 15 : 14, maxWidth: 760 }}>{t.lead}</p>

            {/* Glassmorphism pills for all tabs */}
            {isInvestTab || isBaudouinTab || isGpuTab || isAsicTab ? (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 14 }}>
                {t.highlights.map((h) => (
                  <div
                    key={h}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      border: "1px solid rgba(255, 255, 255, 0.18)",
                      background: "rgba(255, 255, 255, 0.08)",
                      backdropFilter: "blur(12px)",
                      padding: "8px 14px",
                      borderRadius: 6,
                      color: TOKENS.text,
                      fontSize: 13,
                      lineHeight: 1.4,
                      fontWeight: 700,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
                    }}
                  >
                    {h}
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ display: "grid", gap: 10, marginTop: 14 }}>
                {t.highlights.map((h) => (
                  <Pill key={h} text={h} />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Special layout for Invest tab */}
        {isInvestTab ? (
          <>
            {/* First block "Как работает модель" - full width */}
            {t.blocks.filter(b => b.title === "Как работает модель").map((b) => (
              <div
                key={b.title}
                style={{
                  position: "relative",
                  background: TOKENS.panel,
                  border: `1px solid ${TOKENS.stroke}`,
                  borderRadius: TOKENS.radius,
                  padding: isMobile ? 20 : 32,
                  overflow: "hidden",
                  minHeight: isMobile ? 300 : 360,
                }}
              >
                {/* Background image - gas pipeline field for Invest model */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${gasPipelineImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "saturate(0.95) brightness(0.85)",
                  }}
                />
                
                {/* Overlay for readability */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, rgba(3,3,3,0.5) 0%, rgba(3,3,3,0.7) 100%)",
                  }}
                />

                {/* Content */}
                <div style={{ position: "relative", zIndex: 2 }}>
                  <div style={{ color: TOKENS.text, fontWeight: 900, fontSize: 16, textTransform: "uppercase", letterSpacing: 0.4, marginBottom: 14 }}>
                    {b.title}
                  </div>
                  <SimpleTextListWithDivider items={b.items} />
                </div>
              </div>
            ))}
            
            {/* Remaining blocks in 2x2 grid */}
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 14 }}>
              {t.blocks.filter(b => b.title !== "Как работает модель").map((b) => {
                const isChtoObespechit = b.title === "Что обеспечивает FastMine";
                const isPreimushchestva = b.title === "Преимущества инвестора";
                const isFinansovajaModel = b.title === "Финансовая модель";
                
                // "Chto obespechit FastMine"
                if (isChtoObespechit) {
                  return (
                    <div
                      key={b.title}
                      style={{
                        position: "relative",
                        background: TOKENS.panel,
                        border: `1px solid ${TOKENS.stroke}`,
                        borderRadius: TOKENS.radius,
                        padding: 26,
                        overflow: "hidden",
                        minHeight: 260,
                      }}
                    >
                      {/* Background image - Gas Pipeline Field */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          backgroundImage: `url(${gasPipelineFieldImage})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          filter: "saturate(0.95) brightness(0.85)",
                        }}
                      />
                      
                      {/* Overlay for readability */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(180deg, rgba(3,3,3,0.5) 0%, rgba(3,3,3,0.7) 100%)",
                        }}
                      />

                      {/* Content */}
                      <div style={{ position: "relative", zIndex: 2 }}>
                        <div style={{ color: TOKENS.text, fontWeight: 900, fontSize: 14, textTransform: "uppercase", letterSpacing: 0.4, marginBottom: 10 }}>
                          {b.title}
                        </div>
                        <SimpleTextListWithDivider items={b.items} />
                      </div>
                    </div>
                  );
                }
                
                // "Preimushchestva investora"
                if (isPreimushchestva) {
                  return (
                    <div
                      key={b.title}
                      style={{
                        position: "relative",
                        background: TOKENS.panel,
                        border: `1px solid ${TOKENS.stroke}`,
                        borderRadius: TOKENS.radius,
                        padding: 26,
                        overflow: "hidden",
                        minHeight: 260,
                      }}
                    >
                      {/* Background image - ENGI Blue Generator */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          backgroundImage: `url(${engiBlueGeneratorImage})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          filter: "saturate(0.95) brightness(0.85)",
                        }}
                      />
                      
                      {/* Overlay for readability */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(180deg, rgba(3,3,3,0.5) 0%, rgba(3,3,3,0.7) 100%)",
                        }}
                      />

                      {/* Content */}
                      <div style={{ position: "relative", zIndex: 2 }}>
                        <div style={{ color: TOKENS.text, fontWeight: 900, fontSize: 14, textTransform: "uppercase", letterSpacing: 0.4, marginBottom: 10 }}>
                          {b.title}
                        </div>
                        <SimpleTextListWithDivider items={b.items} />
                      </div>
                    </div>
                  );
                }
                
                // "Finansovaja model"
                if (isFinansovajaModel) {
                  return (
                    <div
                      key={b.title}
                      style={{
                        position: "relative",
                        background: TOKENS.panel,
                        border: `1px solid ${TOKENS.stroke}`,
                        borderRadius: TOKENS.radius,
                        padding: 24,
                        overflow: "hidden",
                        minHeight: 240,
                      }}
                    >
                      {/* Background image - Financial Analytics */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          backgroundImage: `url(${investFinancialImage})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          filter: "saturate(0.95) brightness(0.85)",
                        }}
                      />
                      
                      {/* Overlay for readability - lighter for better visibility */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(180deg, rgba(3,3,3,0.45) 0%, rgba(3,3,3,0.65) 100%)",
                        }}
                      />

                      {/* Content */}
                      <div style={{ position: "relative", zIndex: 2 }}>
                        <div style={{ color: TOKENS.text, fontWeight: 900, fontSize: 14, textTransform: "uppercase", letterSpacing: 0.4, marginBottom: 10 }}>
                          {b.title}
                        </div>
                        <SimpleTextListWithDivider items={b.items} />
                      </div>
                    </div>
                  );
                }
                
                return null;
              })}
            </div>
          </>
        ) : (
          // Original layout for other tabs
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 14 }}>
            {t.blocks.map((b, idx) => {
              // Special cards with background images
              const isFullCycle = b.title === "Полный цикл услуг";
              const isGuarantees = b.title === "Гарантии FastMine";
              const isKomplektaciya = b.title === "Комплектация";
              const isKomplektaciyaComplexa = b.title === "Комплектация комплекса";
              const isGeneraciyaToplivo = b.title === "Генерация и топливо";
              const isEkspluataciyaServis = b.title === "Эксплуатация и сервис";
              const isFinansovajaModel = b.title === "Финансовая модель";
              const isUsloviyaTarif = b.title === "Условия и тариф";
              const isPolnoeSoprovojdenie = b.title === "Полное сопровождение";
              const isKakRabotaetModel = b.title === "Как работает модель";
              const isChtoObespechit = b.title === "Что обеспечивает FastMine";
              const isPreimushchestva = b.title === "Преимущества инвестора";
            
            // Check if we're in GPU or Baudouin or Invest tab for specific images
            const isGpuTab = t.key === "gpu";
            const isBaudouinTab = t.key === "baudouin_1mw";
            const isInvestTab = t.key === "invest";
            
            if (isFullCycle) {
              return (
                <div
                  key={b.title}
                  style={{
                    position: "relative",
                    background: TOKENS.panel,
                    border: `1px solid ${TOKENS.stroke}`,
                    borderRadius: TOKENS.radius,
                    padding: 24,
                    overflow: "hidden",
                    minHeight: 280,
                  }}
                >
                  {/* Background image */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: `url(${fullCycleImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "saturate(0.95) brightness(0.85)",
                    }}
                  />
                  
                  {/* Overlay for readability - lighter */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, rgba(3,3,3,0.45) 0%, rgba(3,3,3,0.65) 100%)",
                    }}
                  />

                  {/* Content */}
                  <div style={{ position: "relative", zIndex: 2 }}>
                    <div style={{ color: TOKENS.text, fontWeight: 900, fontSize: 14, textTransform: "uppercase", letterSpacing: 0.4, marginBottom: 10 }}>
                      {b.title}
                    </div>
                    <SimpleTextListWithDivider items={b.items} />
                  </div>
                </div>
              );
            }
            
            if (isGuarantees) {
              return (
                <div
                  key={b.title}
                  style={{
                    position: "relative",
                    background: TOKENS.panel,
                    border: `1px solid ${TOKENS.stroke}`,
                    borderRadius: TOKENS.radius,
                    padding: 24,
                    overflow: "hidden",
                    minHeight: 280,
                  }}
                >
                  {/* Background image */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: `url(${guaranteesImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "saturate(0.95) brightness(0.85)",
                    }}
                  />
                  
                  {/* Overlay for readability - lighter */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, rgba(3,3,3,0.45) 0%, rgba(3,3,3,0.65) 100%)",
                    }}
                  />

                  {/* Content */}
                  <div style={{ position: "relative", zIndex: 2 }}>
                    <div style={{ color: TOKENS.text, fontWeight: 900, fontSize: 14, textTransform: "uppercase", letterSpacing: 0.4, marginBottom: 10 }}>
                      {b.title}
                    </div>
                    <SimpleTextListWithDivider items={b.items} />
                  </div>
                </div>
              );
            }
            
            // Weichai image for GPU Komplektaciya
            if (isKomplektaciya && isGpuTab) {
              return (
                <div
                  key={b.title}
                  style={{
                    position: "relative",
                    background: TOKENS.panel,
                    border: `1px solid ${TOKENS.stroke}`,
                    borderRadius: TOKENS.radius,
                    padding: 24,
                    overflow: "hidden",
                    minHeight: 240,
                  }}
                >
                  {/* Background image */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: `url(${weichaiImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "saturate(0.95) brightness(0.85)",
                    }}
                  />
                  
                  {/* Overlay for readability - lighter */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, rgba(3,3,3,0.45) 0%, rgba(3,3,3,0.65) 100%)",
                    }}
                  />

                  {/* Content */}
                  <div style={{ position: "relative", zIndex: 2 }}>
                    <div style={{ color: TOKENS.text, fontWeight: 900, fontSize: 14, textTransform: "uppercase", letterSpacing: 0.4, marginBottom: 10 }}>
                      {b.title}
                    </div>
                    <SimpleTextListWithDivider items={b.items} />
                  </div>
                </div>
              );
            }
            
            // Weichai image for GPU Polnoe Soprovojdenie
            if (isPolnoeSoprovojdenie && isGpuTab) {
              return (
                <div
                  key={b.title}
                  style={{
                    position: "relative",
                    background: TOKENS.panel,
                    border: `1px solid ${TOKENS.stroke}`,
                    borderRadius: TOKENS.radius,
                    padding: 24,
                    overflow: "hidden",
                    minHeight: 240,
                  }}
                >
                  {/* Background image - Gas Infrastructure */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: `url(${gasInfraImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "saturate(0.95) brightness(0.85)",
                    }}
                  />
                  
                  {/* Overlay for readability - lighter */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, rgba(3,3,3,0.45) 0%, rgba(3,3,3,0.65) 100%)",
                    }}
                  />

                  {/* Content */}
                  <div style={{ position: "relative", zIndex: 2 }}>
                    <div style={{ color: TOKENS.text, fontWeight: 900, fontSize: 14, textTransform: "uppercase", letterSpacing: 0.4, marginBottom: 10 }}>
                      {b.title}
                    </div>
                    <SimpleTextList items={b.items} />
                  </div>
                </div>
              );
            }
            
            // Technician image for GPU Usloviya Tarif
            if (isUsloviyaTarif && isGpuTab) {
              return (
                <div
                  key={b.title}
                  style={{
                    position: "relative",
                    background: TOKENS.panel,
                    border: `1px solid ${TOKENS.stroke}`,
                    borderRadius: TOKENS.radius,
                    padding: 24,
                    overflow: "hidden",
                    minHeight: 240,
                  }}
                >
                  {/* Background image - Technician */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: `url(${technicianImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "saturate(0.95) brightness(0.85)",
                    }}
                  />
                  
                  {/* Overlay for readability - lighter */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, rgba(3,3,3,0.45) 0%, rgba(3,3,3,0.65) 100%)",
                    }}
                  />

                  {/* Content */}
                  <div style={{ position: "relative", zIndex: 2 }}>
                    <div style={{ color: TOKENS.text, fontWeight: 900, fontSize: 14, textTransform: "uppercase", letterSpacing: 0.4, marginBottom: 10 }}>
                      {b.title}
                    </div>
                    <SimpleTextList items={b.items} />
                  </div>
                </div>
              );
            }
            
            // BAUDOUIN Complex image for "Komplektaciya komplexa"
            if (isKomplektaciyaComplexa && isBaudouinTab) {
              return (
                <div
                  key={b.title}
                  style={{
                    position: "relative",
                    background: TOKENS.panel,
                    border: `1px solid ${TOKENS.stroke}`,
                    borderRadius: TOKENS.radius,
                    padding: 24,
                    overflow: "hidden",
                    minHeight: 240,
                  }}
                >
                  {/* Background image - BAUDOUIN Complex */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: `url(${baudouinComplexImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "saturate(0.95) brightness(0.85)",
                    }}
                  />
                  
                  {/* Overlay for readability - lighter */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, rgba(3,3,3,0.45) 0%, rgba(3,3,3,0.65) 100%)",
                    }}
                  />

                  {/* Content */}
                  <div style={{ position: "relative", zIndex: 2 }}>
                    <div style={{ color: TOKENS.text, fontWeight: 900, fontSize: 14, textTransform: "uppercase", letterSpacing: 0.4, marginBottom: 10 }}>
                      {b.title}
                    </div>
                    <SimpleTextList items={b.items} />
                  </div>
                </div>
              );
            }
            
            // Gas Pipeline image for "Generaciya i toplivo"
            if (isGeneraciyaToplivo && isBaudouinTab) {
              return (
                <div
                  key={b.title}
                  style={{
                    position: "relative",
                    background: TOKENS.panel,
                    border: `1px solid ${TOKENS.stroke}`,
                    borderRadius: TOKENS.radius,
                    padding: 24,
                    overflow: "hidden",
                    minHeight: 240,
                  }}
                >
                  {/* Background image - Gas Pipeline */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: `url(${gasPipelineFieldImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "saturate(0.95) brightness(0.85)",
                    }}
                  />
                  
                  {/* Overlay for readability - lighter */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, rgba(3,3,3,0.45) 0%, rgba(3,3,3,0.65) 100%)",
                    }}
                  />

                  {/* Content */}
                  <div style={{ position: "relative", zIndex: 2 }}>
                    <div style={{ color: TOKENS.text, fontWeight: 900, fontSize: 14, textTransform: "uppercase", letterSpacing: 0.4, marginBottom: 10 }}>
                      {b.title}
                    </div>
                    <SimpleTextList items={b.items} />
                  </div>
                </div>
              );
            }
            
            // Service & Maintenance image for "Ekspluataciya i servis"
            if (isEkspluataciyaServis && isBaudouinTab) {
              return (
                <div
                  key={b.title}
                  style={{
                    position: "relative",
                    background: TOKENS.panel,
                    border: `1px solid ${TOKENS.stroke}`,
                    borderRadius: TOKENS.radius,
                    padding: 24,
                    overflow: "hidden",
                    minHeight: 240,
                  }}
                >
                  {/* Background image - Weichai Power Gen */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: `url(${serviceMaintenanceImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "saturate(0.95) brightness(0.85)",
                    }}
                  />
                  
                  {/* Overlay for readability - lighter */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, rgba(3,3,3,0.45) 0%, rgba(3,3,3,0.65) 100%)",
                    }}
                  />

                  {/* Content */}
                  <div style={{ position: "relative", zIndex: 2 }}>
                    <div style={{ color: TOKENS.text, fontWeight: 900, fontSize: 14, textTransform: "uppercase", letterSpacing: 0.4, marginBottom: 10 }}>
                      {b.title}
                    </div>
                    <SimpleTextList items={b.items} />
                  </div>
                </div>
              );
            }
            
            // Financial Model image for "Finansovaja model"
            if (isFinansovajaModel && isBaudouinTab) {
              return (
                <div
                  key={b.title}
                  style={{
                    position: "relative",
                    background: TOKENS.panel,
                    border: `1px solid ${TOKENS.stroke}`,
                    borderRadius: TOKENS.radius,
                    padding: 24,
                    overflow: "hidden",
                    minHeight: 280,
                  }}
                >
                  {/* Background image - Financial Model */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: `url(${financialModelImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "saturate(0.95) brightness(0.85)",
                    }}
                  />
                  
                  {/* Overlay for readability - lighter */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, rgba(3,3,3,0.45) 0%, rgba(3,3,3,0.65) 100%)",
                    }}
                  />

                  {/* Content */}
                  <div style={{ position: "relative", zIndex: 2 }}>
                    <div style={{ color: TOKENS.text, fontWeight: 900, fontSize: 14, textTransform: "uppercase", letterSpacing: 0.4, marginBottom: 10 }}>
                      {b.title}
                    </div>
                    <SimpleTextList items={b.items} />
                  </div>
                </div>
              );
            }
            
            // Regular card
            return (
              <Card key={b.title}>
                <div style={{ color: TOKENS.text, fontWeight: 900, fontSize: 14, textTransform: "uppercase", letterSpacing: 0.4 }}>
                  {b.title}
                </div>
                <div style={{ marginTop: 12 }}>
                  <SimpleTextListWithDivider items={b.items} />
                </div>
              </Card>
            );
          })}
          </div>
        )}

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Button variant="primary" onClick={() => onLead({ source: "formats_cta", format: t.key })}>
            {t.cta}
          </Button>
        </div>

        {/* Footnote if present */}
        {t.footnote && (
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
            {t.footnote}
          </div>
        )}
      </div>
    );
  };

  if (isMobile) {
    return (
      <div style={{ display: "grid", gap: 10 }}>
        {tabs.map((t) => {
          const m = formatMeta[t.key];
          const IconComponent = m.icon;

          return (
            <details
              key={t.key}
              style={{
                border: `1px solid ${TOKENS.stroke}`,
                borderLeft: `3px solid ${m.color}`,
                background: TOKENS.panel,
                padding: 14,
                borderRadius: TOKENS.radius,
              }}
            >
              <summary
                style={{
                  color: TOKENS.text,
                  fontWeight: 900,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: TOKENS.radius,
                    background: m.accentColor,
                    display: "grid",
                    placeItems: "center",
                    flexShrink: 0,
                    border: `1px solid ${m.color}33`,
                  }}
                >
                  <IconComponent size={18} strokeWidth={2} color={m.color} />
                </div>
                <div style={{ flex: 1 }}>
                  {t.title}
                  {m.badge && (
                    <span
                      style={{
                        marginLeft: 8,
                        background: m.badgeBg,
                        color: m.color,
                        padding: "2px 8px",
                        borderRadius: 3,
                        fontSize: 11,
                        fontWeight: 700,
                      }}
                    >
                      {m.badge}
                    </span>
                  )}
                </div>
              </summary>
              <div style={{ marginTop: 12 }}>
                <Content t={t} />
              </div>
            </details>
          );
        })}
      </div>
    );
  }

  // Desktop layout
  return (
    <div style={{ display: "grid", gridTemplateColumns: "340px 1fr", gap: 18, alignItems: "start" }}>
      {/* Left tabs */}
      <div style={{ display: "grid", gap: 10 }}>
        {tabs.map((t) => {
          const on = t.key === active;
          const m = formatMeta[t.key];
          const IconComponent = m.icon;

          return (
            <button
              key={t.key}
              onClick={() => handleTabChange(t.key)}
              style={{
                cursor: "pointer",
                textAlign: "left",
                borderRadius: TOKENS.radius,
                border: `1px solid ${on ? m.color + "66" : TOKENS.stroke}`,
                borderLeft: `3px solid ${on ? m.color : "transparent"}`,
                background: on ? m.accentColor : TOKENS.panel,
                color: TOKENS.text,
                padding: "16px 14px",
                transition: "all 200ms ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                if (!on) {
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  e.currentTarget.style.borderLeftColor = m.color + "44";
                }
              }}
              onMouseLeave={(e) => {
                if (!on) {
                  e.currentTarget.style.background = TOKENS.panel;
                  e.currentTarget.style.borderLeftColor = "transparent";
                }
              }}
            >
              {/* Top badges */}
              <div style={{ display: "flex", gap: 6, marginBottom: 10, flexWrap: "wrap" }}>
                {m.badge && (
                  <div
                    style={{
                      background: m.badgeBg,
                      color: m.color,
                      padding: "4px 8px",
                      borderRadius: 3,
                      fontSize: 11,
                      fontWeight: 800,
                      letterSpacing: 0.3,
                      border: `1px solid ${m.color}44`,
                    }}
                  >
                    {m.badge}
                  </div>
                )}
                {m.label && (
                  <div
                    style={{
                      background: "rgba(255,255,255,0.12)",
                      color: TOKENS.text,
                      padding: "4px 7px",
                      borderRadius: 3,
                      fontSize: 9,
                      fontWeight: 700,
                      letterSpacing: 0.5,
                      textTransform: "uppercase",
                    }}
                  >
                    {m.label}
                  </div>
                )}
              </div>

              {/* Icon + Title */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: TOKENS.radius,
                    background: on ? m.color + "22" : "rgba(255,255,255,0.05)",
                    display: "grid",
                    placeItems: "center",
                    flexShrink: 0,
                    border: `1px solid ${on ? m.color + "44" : TOKENS.stroke}`,
                    transition: "all 200ms ease",
                  }}
                >
                  <IconComponent size={20} strokeWidth={2} color={on ? m.color : TOKENS.muted} />
                </div>
                <div
                  style={{
                    fontWeight: 900,
                    fontSize: 14,
                    lineHeight: 1.3,
                    letterSpacing: 0.3,
                  }}
                >
                  {t.title}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Right content */}
      <motion.div
        key={activeTab.key}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <Content t={activeTab} />
      </motion.div>
    </div>
  );
}