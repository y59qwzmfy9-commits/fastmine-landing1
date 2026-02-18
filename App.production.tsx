import React, { useMemo, useState } from "react";
import { Cpu, Zap, Truck, Settings, Server, TrendingUp, Building2, Flame, Sparkles, Shield, Award, Phone, Mail, MapPin, Send } from "lucide-react";
import { FormatsImproved } from "./components/FormatsImproved";

// Production paths for Vercel deployment
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
export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо, ${formData.name}! Мы свяжемся с вами в ближайшее время.`);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  // How it works steps
  const steps = useMemo(() => [
    {
      icon: Truck,
      title: "Доставка оборудования",
      desc: "Привезём и разместим ваше оборудование на нашей площадке с готовой инфраструктурой",
      image: deliveryImage
    },
    {
      icon: Settings,
      title: "Ввод в эксплуатацию",
      desc: "Настроим, подключим к сети и запустим майнинг за 24 часа",
      image: commissioningImage
    },
    {
      icon: Zap,
      title: "Электричество от ГПУ",
      desc: "Ваши устройства работают на собственной газовой генерации по прямым ценам",
      image: gridImage
    },
    {
      icon: Server,
      title: "Мониторинг 24/7",
      desc: "Круглосуточный контроль, техническая поддержка и обслуживание вашего оборудования",
      image: fastmineImage
    }
  ], []);

  // Infrastructure features
  const features = useMemo(() => [
    {
      icon: Flame,
      title: "Собственные ГПУ",
      desc: "Газопоршневые установки Weichai, Baudouin мощностью до 5 МВт"
    },
    {
      icon: Building2,
      title: "Контейнеры и модули",
      desc: "Готовые контейнеры с охлаждением, вентиляцией и мониторингом"
    },
    {
      icon: Shield,
      title: "Охрана и безопасность",
      desc: "Огороженная территория, видеонаблюдение, круглосуточный персонал"
    },
    {
      icon: Settings,
      title: "Сервис и ремонт",
      desc: "Собственная техническая служба для обслуживания и ремонта ASIC"
    }
  ], []);

  // Gallery images
  const galleryImages = useMemo(() => [
    { src: containerModulesImage, alt: "Контейнерные модули FastMine" },
    { src: personnelImage, alt: "Персонал на площадке" },
    { src: aerialViewImage, alt: "Вид сверху на площадку" },
    { src: maintenanceImage, alt: "Обслуживание оборудования" },
    { src: newStationsImage, alt: "Новые станции генерации" },
    { src: monitoringImage, alt: "Мониторинг и управление" }
  ], []);

  return (
    <div className="min-h-screen bg-[#040307] text-[#dbdbdb]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/95 backdrop-blur-md border-b border-[#dbdbdb]/10">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="FastMine" className="h-10 w-auto" />
            <span className="text-xl font-bold">FastMine</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#how" className="hover:text-[#3342f3] transition-colors">Как работает</a>
            <a href="#benefits" className="hover:text-[#3342f3] transition-colors">Выгода</a>
            <a href="#formats" className="hover:text-[#3342f3] transition-colors">Форматы</a>
            <a href="#docs" className="hover:text-[#3342f3] transition-colors">Документы</a>
            <a href="#contact" className="bg-[#3342f3] px-6 py-2 rounded-lg hover:bg-[#3342f3]/90 transition-colors">
              Связаться
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#040307]/80 via-[#040307]/60 to-[#040307]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Майнинг на собственной <span className="text-[#3342f3]">газовой генерации</span>
            </h1>
            <p className="text-lg md:text-xl text-[#dbdbdb]/80 mb-8">
              Разместите ASIC на нашей площадке с ГПУ и получите электричество по цене 3.2–4.5 ₽/кВт·ч. 
              Полный цикл: от доставки до мониторинга 24/7.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="bg-[#3342f3] px-8 py-4 rounded-lg text-lg hover:bg-[#3342f3]/90 transition-colors inline-block"
              >
                Рассчитать стоимость
              </a>
              <a 
                href="#formats" 
                className="border border-[#dbdbdb]/20 px-8 py-4 rounded-lg text-lg hover:bg-[#dbdbdb]/5 transition-colors inline-block"
              >
                Форматы работы
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-16 md:py-24 bg-[#030303]">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">Как это работает</h2>
          <p className="text-center text-[#dbdbdb]/70 mb-12 max-w-2xl mx-auto">
            Простой процесс от подключения до первой прибыли
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-[#040307] rounded-xl p-6 border border-[#dbdbdb]/10 hover:border-[#3342f3]/40 transition-all group">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <img src={step.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-[#3342f3] rounded-full flex items-center justify-center text-lg font-bold">
                    {idx + 1}
                  </div>
                </div>
                <step.icon className="w-8 h-8 text-[#3342f3] mb-3" />
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-[#dbdbdb]/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Собственная генерация = <span className="text-[#3342f3]">ваша выгода</span>
              </h2>
              <p className="text-lg text-[#dbdbdb]/70 mb-6">
                Мы не перепродаём электричество, а генерируем его сами на газопоршневых установках. 
                Это означает прямую цену без посредников и стабильную работу даже при отключениях в сети.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-[#030303] rounded-lg border border-[#dbdbdb]/10">
                  <TrendingUp className="w-6 h-6 text-[#3342f3] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Цена 3.2–4.5 ₽/кВт·ч</h3>
                    <p className="text-[#dbdbdb]/70">В 2-3 раза дешевле традиционного хостинга ASIC</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-[#030303] rounded-lg border border-[#dbdbdb]/10">
                  <Flame className="w-6 h-6 text-[#3342f3] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Собственное топливо</h3>
                    <p className="text-[#dbdbdb]/70">Прямые контракты на поставку газа без привязки к тарифам ЖКХ</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-[#030303] rounded-lg border border-[#dbdbdb]/10">
                  <Shield className="w-6 h-6 text-[#3342f3] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Автономность</h3>
                    <p className="text-[#dbdbdb]/70">Независимость от центральных сетей и аварий на подстанциях</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img src={gpuImage} alt="GPU генерация" className="rounded-xl w-full" />
              <div className="absolute -bottom-6 -right-6 bg-[#3342f3] p-6 rounded-xl shadow-2xl hidden lg:block">
                <div className="text-4xl font-bold mb-1">5 МВт</div>
                <div className="text-[#dbdbdb]/80">Установленная мощность</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-16 md:py-24 bg-[#030303]">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">Инфраструктура площадки</h2>
          <p className="text-center text-[#dbdbdb]/70 mb-12 max-w-2xl mx-auto">
            Всё необходимое для стабильной работы вашего оборудования
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-[#040307] rounded-xl p-6 border border-[#dbdbdb]/10 hover:border-[#3342f3]/40 transition-all">
                <feature.icon className="w-10 h-10 text-[#3342f3] mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-[#dbdbdb]/70">{feature.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
            <img src={asicImage} alt="ASIC майнинг" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040307] via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Formats Section */}
      <section id="formats" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">Форматы работы</h2>
          <p className="text-center text-[#dbdbdb]/70 mb-12 max-w-2xl mx-auto">
            Выберите подходящий вариант размещения и энергообеспечения
          </p>
          
          <FormatsImproved />
        </div>
      </section>

      {/* Documents */}
      <section id="docs" className="py-16 md:py-24 bg-[#030303]">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">Документы и юридическая чистота</h2>
          <p className="text-center text-[#dbdbdb]/70 mb-12 max-w-2xl mx-auto">
            Работаем официально, все документы и лицензии в порядке
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#040307] rounded-xl p-6 border border-[#dbdbdb]/10">
              <Award className="w-10 h-10 text-[#3342f3] mb-4" />
              <h3 className="text-xl font-bold mb-2">Договор хостинга</h3>
              <p className="text-[#dbdbdb]/70 mb-4">
                Официальный договор с фиксированной ценой на электричество и сроками размещения
              </p>
              <button className="text-[#3342f3] hover:underline">Скачать образец →</button>
            </div>
            
            <div className="bg-[#040307] rounded-xl p-6 border border-[#dbdbdb]/10">
              <Shield className="w-10 h-10 text-[#3342f3] mb-4" />
              <h3 className="text-xl font-bold mb-2">Лицензии и разрешения</h3>
              <p className="text-[#dbdbdb]/70 mb-4">
                Все разрешительные документы на эксплуатацию ГПУ и электросетевого хозяйства
              </p>
              <button className="text-[#3342f3] hover:underline">Посмотреть →</button>
            </div>
            
            <div className="bg-[#040307] rounded-xl p-6 border border-[#dbdbdb]/10">
              <Building2 className="w-10 h-10 text-[#3342f3] mb-4" />
              <h3 className="text-xl font-bold mb-2">Страхование</h3>
              <p className="text-[#dbdbdb]/70 mb-4">
                Оборудование и имущество застрахованы, полная прозрачность учёта
              </p>
              <button className="text-[#3342f3] hover:underline">Подробнее →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">Наша площадка</h2>
          <p className="text-center text-[#dbdbdb]/70 mb-12 max-w-2xl mx-auto">
            Реальные фотографии инфраструктуры FastMine
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-xl aspect-video">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040307] via-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm">{img.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 md:py-24 bg-[#030303]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">Свяжитесь с нами</h2>
            <p className="text-center text-[#dbdbdb]/70 mb-12">
              Оставьте заявку, и мы рассчитаем стоимость размещения вашего оборудования
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Имя</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#040307] border border-[#dbdbdb]/20 rounded-lg focus:border-[#3342f3] focus:outline-none transition-colors"
                  placeholder="Ваше имя"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#040307] border border-[#dbdbdb]/20 rounded-lg focus:border-[#3342f3] focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">Телефон</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#040307] border border-[#dbdbdb]/20 rounded-lg focus:border-[#3342f3] focus:outline-none transition-colors"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Сообщение</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#040307] border border-[#dbdbdb]/20 rounded-lg focus:border-[#3342f3] focus:outline-none transition-colors resize-none"
                  placeholder="Расскажите о вашем оборудовании и планах..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#3342f3] px-8 py-4 rounded-lg text-lg hover:bg-[#3342f3]/90 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Отправить заявку
              </button>
            </form>
            
            <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <Phone className="w-8 h-8 text-[#3342f3] mx-auto mb-2" />
                <div className="font-bold mb-1">Телефон</div>
                <a href="tel:+79991234567" className="text-[#dbdbdb]/70 hover:text-[#3342f3]">+7 (999) 123-45-67</a>
              </div>
              <div>
                <Mail className="w-8 h-8 text-[#3342f3] mx-auto mb-2" />
                <div className="font-bold mb-1">Email</div>
                <a href="mailto:info@fastmine.ru" className="text-[#dbdbdb]/70 hover:text-[#3342f3]">info@fastmine.ru</a>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-[#3342f3] mx-auto mb-2" />
                <div className="font-bold mb-1">Офис</div>
                <p className="text-[#dbdbdb]/70">Москва, Россия</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[#dbdbdb]/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img src={logoImage} alt="FastMine" className="h-8 w-auto" />
              <span className="font-bold">FastMine</span>
            </div>
            <p className="text-[#dbdbdb]/50 text-sm">
              © 2026 FastMine. Майнинг на собственной генерации.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
