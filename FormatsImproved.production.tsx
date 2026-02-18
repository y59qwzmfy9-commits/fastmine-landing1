import React from "react";
import { Server, Flame, Sparkles, TrendingUp, Building2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Production paths for Vercel deployment
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

// Unsplash images for Invest tab
const investStationUrl = "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80";
const investGasUrl = "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80";
const investFinanceUrl = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80";

type TabId = "hosting" | "mining" | "asic" | "invest";

export function FormatsImproved() {
  const [activeTab, setActiveTab] = React.useState<TabId>("hosting");

  const tabs: { id: TabId; label: string; icon: typeof Server }[] = [
    { id: "hosting", label: "Хостинг для ASIC", icon: Server },
    { id: "mining", label: "МАЙНИНГ + ГПУ", icon: Flame },
    { id: "asic", label: "ASIC + ГПУ 1 МВт", icon: Sparkles },
    { id: "invest", label: "Инвестиции в генерацию", icon: Building2 }
  ];

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-lg transition-all
                ${activeTab === tab.id
                  ? "bg-[#3342f3] text-white"
                  : "bg-[#030303] text-[#dbdbdb]/70 hover:bg-[#030303]/70 hover:text-[#dbdbdb]"
                }
              `}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="bg-[#030303] rounded-2xl overflow-hidden">
        {activeTab === "hosting" && (
          <div>
            {/* Hero Card */}
            <div className="relative h-80 overflow-hidden">
              <img src={asicHostingImage} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">Хостинг для ASIC</h3>
                <p className="text-lg text-[#dbdbdb]/80">Размещение вашего оборудования на нашей площадке с готовой инфраструктурой</p>
              </div>
            </div>

            {/* Details */}
            <div className="p-8 space-y-8">
              {/* Pricing */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#040307] rounded-xl p-6 border border-[#dbdbdb]/10">
                  <div className="text-[#3342f3] text-4xl font-bold mb-2">3.2–4.5 ₽</div>
                  <div className="text-xl mb-1">за кВт·ч</div>
                  <p className="text-[#dbdbdb]/70">Электричество от собственных ГПУ</p>
                </div>
                <div className="bg-[#040307] rounded-xl p-6 border border-[#dbdbdb]/10">
                  <div className="text-[#3342f3] text-4xl font-bold mb-2">24/7</div>
                  <div className="text-xl mb-1">Мониторинг</div>
                  <p className="text-[#dbdbdb]/70">Круглосуточный контроль и техподдержка</p>
                </div>
              </div>

              {/* Features Grid */}
              <div>
                <h4 className="text-2xl font-bold mb-4">Что входит</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-[#040307] rounded-lg">
                    <div className="w-2 h-2 bg-[#3342f3] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-bold mb-1">Доставка и размещение</div>
                      <p className="text-sm text-[#dbdbdb]/70">Принимаем, размещаем и подключаем ваши ASIC</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-[#040307] rounded-lg">
                    <div className="w-2 h-2 bg-[#3342f3] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-bold mb-1">Охлаждение и вентиляция</div>
                      <p className="text-sm text-[#dbdbdb]/70">Контейнеры с климат-контролем</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-[#040307] rounded-lg">
                    <div className="w-2 h-2 bg-[#3342f3] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-bold mb-1">Безопасность</div>
                      <p className="text-sm text-[#dbdbdb]/70">Охрана, видеонаблюдение, контроль доступа</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-[#040307] rounded-lg">
                    <div className="w-2 h-2 bg-[#3342f3] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-bold mb-1">Техническая поддержка</div>
                      <p className="text-sm text-[#dbdbdb]/70">Обслуживание, ремонт, замена комплектующих</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <img src={fullCycleImage} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040307] via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-sm font-medium">Полный цикл обслуживания</p>
                  </div>
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <img src={guaranteesImage} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040307] via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-sm font-medium">Гарантии и SLA</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-4">
                <a href="#contact" className="bg-[#3342f3] px-6 py-3 rounded-lg hover:bg-[#3342f3]/90 transition-colors">
                  Рассчитать стоимость
                </a>
                <button className="border border-[#dbdbdb]/20 px-6 py-3 rounded-lg hover:bg-[#dbdbdb]/5 transition-colors">
                  Скачать прайс
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "mining" && (
          <div>
            {/* Hero Card */}
            <div className="relative h-80 overflow-hidden">
              <img src={gpuMiningImage} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">МАЙНИНГ + ГПУ</h3>
                <p className="text-lg text-[#dbdbdb]/80">Майнинг на оборудовании FastMine с оплатой за добытую криптовалюту</p>
              </div>
            </div>

            {/* Details */}
            <div className="p-8 space-y-8">
              {/* Key Points */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-[#040307] rounded-xl p-6 border border-[#dbdbdb]/10">
                  <TrendingUp className="w-10 h-10 text-[#3342f3] mb-3" />
                  <div className="text-xl font-bold mb-1">Без вложений в ASIC</div>
                  <p className="text-[#dbdbdb]/70">Работаете на нашем оборудовании</p>
                </div>
                <div className="bg-[#040307] rounded-xl p-6 border border-[#dbdbdb]/10">
                  <Flame className="w-10 h-10 text-[#3342f3] mb-3" />
                  <div className="text-xl font-bold mb-1">Оплата за хешрейт</div>
                  <p className="text-[#dbdbdb]/70">Платите только за реальную мощность</p>
                </div>
                <div className="bg-[#040307] rounded-xl p-6 border border-[#dbdbdb]/10">
                  <Server className="w-10 h-10 text-[#3342f3] mb-3" />
                  <div className="text-xl font-bold mb-1">Гибкие тарифы</div>
                  <p className="text-[#dbdbdb]/70">От 1 TH/s до нескольких PH/s</p>
                </div>
              </div>

              {/* Process */}
              <div>
                <h4 className="text-2xl font-bold mb-4">Как работает</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-4 p-4 bg-[#040307] rounded-lg">
                    <div className="w-8 h-8 bg-[#3342f3] rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <div className="font-bold mb-1">Выбираете тариф</div>
                      <p className="text-sm text-[#dbdbdb]/70">Определяете необходимую мощность (хешрейт) и срок аренды</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-[#040307] rounded-lg">
                    <div className="w-8 h-8 bg-[#3342f3] rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <div className="font-bold mb-1">Мы запускаем майнинг</div>
                      <p className="text-sm text-[#dbdbdb]/70">Подключаем оборудование к вашему пулу и кошельку</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-[#040307] rounded-lg">
                    <div className="w-8 h-8 bg-[#3342f3] rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <div className="font-bold mb-1">Получаете прибыль</div>
                      <p className="text-sm text-[#dbdbdb]/70">Вся добытая криптовалюта поступает напрямую вам</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Equipment Images */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="relative h-40 rounded-xl overflow-hidden">
                  <img src={weichaiImage} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040307]/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-xs font-medium">Weichai ГПУ</p>
                  </div>
                </div>
                <div className="relative h-40 rounded-xl overflow-hidden">
                  <img src={gasInfraImage} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040307]/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-xs font-medium">Газовая инфраструктура</p>
                  </div>
                </div>
                <div className="relative h-40 rounded-xl overflow-hidden">
                  <img src={technicianImage} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040307]/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-xs font-medium">24/7 Техподдержка</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-4">
                <a href="#contact" className="bg-[#3342f3] px-6 py-3 rounded-lg hover:bg-[#3342f3]/90 transition-colors">
                  Подобрать тариф
                </a>
                <button className="border border-[#dbdbdb]/20 px-6 py-3 rounded-lg hover:bg-[#dbdbdb]/5 transition-colors">
                  Калькулятор доходности
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "asic" && (
          <div>
            {/* Hero Card */}
            <div className="relative h-80 overflow-hidden">
              <img src={baudouinImage} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">ASIC + ГПУ 1 МВт</h3>
                <p className="text-lg text-[#dbdbdb]/80">Готовое комплексное решение: оборудование, площадка и собственная генерация</p>
              </div>
            </div>

            {/* Details */}
            <div className="p-8 space-y-8">
              {/* Package Details */}
              <div className="bg-[#040307] rounded-xl p-6 border border-[#3342f3]/30">
                <h4 className="text-2xl font-bold mb-4">Что входит в пакет</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-[#3342f3] font-bold mb-2">Генерация</div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#3342f3] mt-1">•</span>
                        <span>ГПУ Baudouin/Weichai 1 МВт</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3342f3] mt-1">•</span>
                        <span>Газовое оборудование и подключение</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3342f3] mt-1">•</span>
                        <span>Автоматика и система управления</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-[#3342f3] font-bold mb-2">ASIC оборудование</div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#3342f3] mt-1">•</span>
                        <span>~500-700 шт ASIC (зависит от модели)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3342f3] mt-1">•</span>
                        <span>Контейнеры для размещения</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3342f3] mt-1">•</span>
                        <span>Система охлаждения и вентиляции</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-[#040307] rounded-xl p-6 text-center border border-[#dbdbdb]/10">
                  <div className="text-3xl font-bold text-[#3342f3] mb-1">1 МВт</div>
                  <p className="text-[#dbdbdb]/70">Мощность генерации</p>
                </div>
                <div className="bg-[#040307] rounded-xl p-6 text-center border border-[#dbdbdb]/10">
                  <div className="text-3xl font-bold text-[#3342f3] mb-1">500+</div>
                  <p className="text-[#dbdbdb]/70">ASIC майнеров</p>
                </div>
                <div className="bg-[#040307] rounded-xl p-6 text-center border border-[#dbdbdb]/10">
                  <div className="text-3xl font-bold text-[#3342f3] mb-1">Под ключ</div>
                  <p className="text-[#dbdbdb]/70">Готовое решение</p>
                </div>
              </div>

              {/* Infrastructure */}
              <div>
                <h4 className="text-2xl font-bold mb-4">Инфраструктура</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative h-48 rounded-xl overflow-hidden">
                    <img src={baudouinComplexImage} alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040307]/90 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-sm font-medium">Комплекс ГПУ Baudouin</p>
                    </div>
                  </div>
                  <div className="relative h-48 rounded-xl overflow-hidden">
                    <img src={gasPipelineImage} alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040307]/90 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-sm font-medium">Газопровод и топливная система</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms */}
              <div className="bg-[#040307] rounded-xl p-6 border border-[#dbdbdb]/10">
                <h4 className="text-xl font-bold mb-3">Условия</h4>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-[#dbdbdb]/70">Срок поставки:</span>
                    <span className="ml-2 font-bold">3-6 месяцев</span>
                  </div>
                  <div>
                    <span className="text-[#dbdbdb]/70">Окупаемость:</span>
                    <span className="ml-2 font-bold">18-24 месяца</span>
                  </div>
                  <div>
                    <span className="text-[#dbdbdb]/70">Обслуживание:</span>
                    <span className="ml-2 font-bold">Включено</span>
                  </div>
                  <div>
                    <span className="text-[#dbdbdb]/70">Гарантия:</span>
                    <span className="ml-2 font-bold">1-2 года</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-4">
                <a href="#contact" className="bg-[#3342f3] px-6 py-3 rounded-lg hover:bg-[#3342f3]/90 transition-colors">
                  Запросить коммерческое предложение
                </a>
                <button className="border border-[#dbdbdb]/20 px-6 py-3 rounded-lg hover:bg-[#dbdbdb]/5 transition-colors">
                  Презентация PDF
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "invest" && (
          <div>
            {/* Hero Card */}
            <div className="relative h-80 overflow-hidden">
              <ImageWithFallback 
                src={investStationUrl} 
                alt="Электростанция" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">Инвестиции в генерацию</h3>
                <p className="text-lg text-[#dbdbdb]/80">Долевое участие в строительстве новых генерирующих мощностей</p>
              </div>
            </div>

            {/* Details */}
            <div className="p-8 space-y-8">
              {/* Investment Models */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#040307] rounded-xl p-6 border border-[#dbdbdb]/10">
                  <Building2 className="w-10 h-10 text-[#3342f3] mb-3" />
                  <h4 className="text-xl font-bold mb-2">Долевое владение</h4>
                  <p className="text-[#dbdbdb]/70 mb-4">
                    Приобретаете долю в ГПУ, получаете часть дохода от продажи электроэнергии
                  </p>
                  <div className="text-2xl font-bold text-[#3342f3]">от 5 млн ₽</div>
                  <p className="text-sm text-[#dbdbdb]/70">Минимальная инвестиция</p>
                </div>
                <div className="bg-[#040307] rounded-xl p-6 border border-[#dbdbdb]/10">
                  <TrendingUp className="w-10 h-10 text-[#3342f3] mb-3" />
                  <h4 className="text-xl font-bold mb-2">Партнёрская программа</h4>
                  <p className="text-[#dbdbdb]/70 mb-4">
                    Совместное строительство площадки, распределение прибыли по договору
                  </p>
                  <div className="text-2xl font-bold text-[#3342f3]">от 20 млн ₽</div>
                  <p className="text-sm text-[#dbdbdb]/70">Минимальная инвестиция</p>
                </div>
              </div>

              {/* Why Invest */}
              <div>
                <h4 className="text-2xl font-bold mb-4">Преимущества</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-4 p-4 bg-[#040307] rounded-lg">
                    <div className="w-2 h-2 bg-[#3342f3] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-bold mb-1">Стабильный доход</div>
                      <p className="text-sm text-[#dbdbdb]/70">Продажа электроэнергии + майнинг — два источника дохода</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-[#040307] rounded-lg">
                    <div className="w-2 h-2 bg-[#3342f3] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-bold mb-1">Растущий рынок</div>
                      <p className="text-sm text-[#dbdbdb]/70">Спрос на дешёвое электричество для майнинга растёт ежегодно</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-[#040307] rounded-lg">
                    <div className="w-2 h-2 bg-[#3342f3] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-bold mb-1">Юридическая защита</div>
                      <p className="text-sm text-[#dbdbdb]/70">Официальные договоры, прозрачность, страхование активов</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-[#040307] rounded-lg">
                    <div className="w-2 h-2 bg-[#3342f3] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-bold mb-1">Опытная команда</div>
                      <p className="text-sm text-[#dbdbdb]/70">FastMine уже управляет несколькими станциями, знаем все нюансы</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Grid */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="relative h-40 rounded-xl overflow-hidden">
                  <img src={serviceMaintenanceImage} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040307]/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-xs font-medium">Сервис и обслуживание</p>
                  </div>
                </div>
                <div className="relative h-40 rounded-xl overflow-hidden">
                  <ImageWithFallback 
                    src={investGasUrl} 
                    alt="Газовые трубы" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040307]/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-xs font-medium">Топливная инфраструктура</p>
                  </div>
                </div>
                <div className="relative h-40 rounded-xl overflow-hidden">
                  <ImageWithFallback 
                    src={investFinanceUrl}
                    alt="Финансы" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040307]/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-xs font-medium">Финансовая модель</p>
                  </div>
                </div>
              </div>

              {/* Financial Examples */}
              <div className="bg-[#040307] rounded-xl p-6 border border-[#dbdbdb]/10">
                <h4 className="text-xl font-bold mb-4">Примерная доходность</h4>
                <div className="grid sm:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-[#3342f3] mb-1">18-24%</div>
                    <p className="text-sm text-[#dbdbdb]/70">Годовая доходность</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#3342f3] mb-1">3-4 года</div>
                    <p className="text-sm text-[#dbdbdb]/70">Срок окупаемости</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#3342f3] mb-1">10+ лет</div>
                    <p className="text-sm text-[#dbdbdb]/70">Срок службы ГПУ</p>
                  </div>
                </div>
              </div>

              {/* More Images */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="relative h-40 rounded-xl overflow-hidden">
                  <img src={financialModelImage} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040307]/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-xs font-medium">Финансовые расчёты</p>
                  </div>
                </div>
                <div className="relative h-40 rounded-xl overflow-hidden">
                  <img src={supermalyGeneratorImage} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040307]/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-xs font-medium">Генератор Supermaly</p>
                  </div>
                </div>
                <div className="relative h-40 rounded-xl overflow-hidden">
                  <img src={gasPipelineFieldImage} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040307]/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-xs font-medium">Газопровод на площадке</p>
                  </div>
                </div>
              </div>

              {/* One more image */}
              <div className="relative h-48 rounded-xl overflow-hidden">
                <img src={engiBlueGeneratorImage} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040307]/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="font-medium">Engi Blue Generator — современная ГПУ установка</p>
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-4">
                <a href="#contact" className="bg-[#3342f3] px-6 py-3 rounded-lg hover:bg-[#3342f3]/90 transition-colors">
                  Получить инвестиционное предложение
                </a>
                <button className="border border-[#dbdbdb]/20 px-6 py-3 rounded-lg hover:bg-[#dbdbdb]/5 transition-colors">
                  Скачать презентацию
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
