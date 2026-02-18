# 🚀 Деплой FastMine на Vercel

## 📋 Список всех изображений (29 шт)

### App.tsx (14 изображений):
1. `hero.png` — 885a8b424b7e32f07ae81d536d3a3ae6dadfd41e
2. `logo.png` — 56f69e0474ec772a88300550b89978aa4bb66d07
3. `gpu.png` — d4caffbd1b4b3651bd144189526de9176d7efdb0
4. `asic.png` — e57e6fb1dfd62d69f2598b7c2c289b037f6c1510
5. `delivery.png` — f9e5f2984be1785c02e05f099e954cdcc8d8e19d
6. `commissioning.png` — 490d0961df8654ee8501ce2c71de943e932c4fe2
7. `grid.png` — 21a5a8c2b90da22060a42c7bef0400bf6255aacc
8. `fastmine.png` — 4ad3a5dfe0e2113899411165f23c16ef7d0e907e
9. `container-modules.png` — 37044ee41cb727ee13ebe340815122f6d6723242
10. `personnel.png` — 86ef02a6c76ec34a173cea4ea076e15ca28ae6d8
11. `aerial-view.png` — 24dce7e9c079a57847a079bb893c6188aa0e9b0d
12. `maintenance.png` — a7fc722c86776a0bf8ae6671c93a8255f91a3403
13. `new-stations.png` — 1385c16d2bcf14b947e7042001aa780956ef5594
14. `monitoring.png` — d2686ebd5865b7221b71314ed9c738d895a37c89

### FormatsImproved.tsx (15 изображений):
15. `full-cycle.png` — 66e41c056110298cad484bbcd0c9c3736aafb1e4
16. `guarantees.png` — 0a03d438a8f24d6c3108f40deccee556b78510db
17. `asic-hosting.png` — 719b1dfca7d55986a1af27c1e11fe78075a7f274
18. `gpu-mining.png` — dae7537bbe41af0f943f02540afbf6880f80d258
19. `weichai.png` — e4c272631a44bc06a650ed8fb8abe5e645da862e
20. `gas-infra.png` — a38ccc8bbd9c936a8ac7f20348187b36d94af794
21. `technician.png` — d30fa8deae183fccea0bae53a15f33a7af23d5a3
22. `baudouin.png` — 431ef10b0ea129e06e8de622d6cff46855940cff
23. `baudouin-complex.png` — 3c9bb3fce1e3fcafcad20a84be7d57779fa0b41d
24. `gas-pipeline.png` — 9e1e0e6a5be658c95ceffa6a3db3e52927641cc9
25. `service-maintenance.png` — 4560e859a8f981ee8aa2aeafae2836371b6da85e
26. `financial-model.png` — fdfe24102a1f198363c86a9211c03f20ca4860c4
27. `supermaly-generator.png` — 5494590d6b5fc44e953a5f245784f87beff560c0
28. `gas-pipeline-field.png` — 99da96406a82b8363ffd914c123b36fe267d7b03
29. `engi-blue-generator.png` — d769db4c393b1e2e2b14d91f6505d05b1b00b78f

---

## 🎯 Шаги для деплоя

### 1️⃣ Экспорт изображений из Figma Make

**В Figma Make:**
1. Откройте DevTools (F12 или Ctrl+Shift+I / Cmd+Option+I)
2. Перейдите в Console
3. Вставьте скрипт для скачивания всех изображений:

```javascript
// Список всех изображений с правильными именами
const images = [
  { hash: '885a8b424b7e32f07ae81d536d3a3ae6dadfd41e', name: 'hero.png' },
  { hash: '56f69e0474ec772a88300550b89978aa4bb66d07', name: 'logo.png' },
  { hash: 'd4caffbd1b4b3651bd144189526de9176d7efdb0', name: 'gpu.png' },
  { hash: 'e57e6fb1dfd62d69f2598b7c2c289b037f6c1510', name: 'asic.png' },
  { hash: 'f9e5f2984be1785c02e05f099e954cdcc8d8e19d', name: 'delivery.png' },
  { hash: '490d0961df8654ee8501ce2c71de943e932c4fe2', name: 'commissioning.png' },
  { hash: '21a5a8c2b90da22060a42c7bef0400bf6255aacc', name: 'grid.png' },
  { hash: '4ad3a5dfe0e2113899411165f23c16ef7d0e907e', name: 'fastmine.png' },
  { hash: '37044ee41cb727ee13ebe340815122f6d6723242', name: 'container-modules.png' },
  { hash: '86ef02a6c76ec34a173cea4ea076e15ca28ae6d8', name: 'personnel.png' },
  { hash: '24dce7e9c079a57847a079bb893c6188aa0e9b0d', name: 'aerial-view.png' },
  { hash: 'a7fc722c86776a0bf8ae6671c93a8255f91a3403', name: 'maintenance.png' },
  { hash: '1385c16d2bcf14b947e7042001aa780956ef5594', name: 'new-stations.png' },
  { hash: 'd2686ebd5865b7221b71314ed9c738d895a37c89', name: 'monitoring.png' },
  { hash: '66e41c056110298cad484bbcd0c9c3736aafb1e4', name: 'full-cycle.png' },
  { hash: '0a03d438a8f24d6c3108f40deccee556b78510db', name: 'guarantees.png' },
  { hash: '719b1dfca7d55986a1af27c1e11fe78075a7f274', name: 'asic-hosting.png' },
  { hash: 'dae7537bbe41af0f943f02540afbf6880f80d258', name: 'gpu-mining.png' },
  { hash: 'e4c272631a44bc06a650ed8fb8abe5e645da862e', name: 'weichai.png' },
  { hash: 'a38ccc8bbd9c936a8ac7f20348187b36d94af794', name: 'gas-infra.png' },
  { hash: 'd30fa8deae183fccea0bae53a15f33a7af23d5a3', name: 'technician.png' },
  { hash: '431ef10b0ea129e06e8de622d6cff46855940cff', name: 'baudouin.png' },
  { hash: '3c9bb3fce1e3fcafcad20a84be7d57779fa0b41d', name: 'baudouin-complex.png' },
  { hash: '9e1e0e6a5be658c95ceffa6a3db3e52927641cc9', name: 'gas-pipeline.png' },
  { hash: '4560e859a8f981ee8aa2aeafae2836371b6da85e', name: 'service-maintenance.png' },
  { hash: 'fdfe24102a1f198363c86a9211c03f20ca4860c4', name: 'financial-model.png' },
  { hash: '5494590d6b5fc44e953a5f245784f87beff560c0', name: 'supermaly-generator.png' },
  { hash: '99da96406a82b8363ffd914c123b36fe267d7b03', name: 'gas-pipeline-field.png' },
  { hash: 'd769db4c393b1e2e2b14d91f6505d05b1b00b78f', name: 'engi-blue-generator.png' }
];

// Функция для скачивания изображений
async function downloadImages() {
  console.log('🚀 Начинаю скачивание 29 изображений...');
  
  for (let i = 0; i < images.length; i++) {
    const { hash, name } = images[i];
    try {
      // Импортируем через figma:asset
      const module = await import(`figma:asset/${hash}.png`);
      const imageUrl = module.default;
      
      // Скачиваем
      const a = document.createElement('a');
      a.href = imageUrl;
      a.download = name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      
      console.log(`✅ ${i + 1}/29: ${name}`);
      
      // Задержка между скачиваниями
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`❌ Ошибка при скачивании ${name}:`, error);
    }
  }
  
  console.log('✅ Скачивание завершено!');
}

// Запускаем
downloadImages();
```

4. Нажмите Enter — все 29 изображений начнут скачиваться
5. Сохраните все изображения в папку `assets`

---

### 2️⃣ Подготовка проекта

**После экспорта кода из Figma Make:**

1. Распакуйте ZIP архив
2. Создайте папку `/public/assets/`
3. Скопируйте все 29 изображений в `/public/assets/`

Структура должна быть:
```
fastmine-landing/
├── public/
│   └── assets/
│       ├── hero.png
│       ├── logo.png
│       ├── gpu.png
│       ├── ... (все 29 файлов)
│       └── engi-blue-generator.png
├── src/
├── package.json
└── ...
```

---

### 3️⃣ Обновление импортов

**Замените все `figma:asset` импорты на обычные пути:**

**В `/src/app/App.tsx`:**
```typescript
// Было:
import heroImage from "figma:asset/885a8b424b7e32f07ae81d536d3a3ae6dadfd41e.png";

// Стало:
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
```

**В `/src/app/components/FormatsImproved.tsx`:**
```typescript
// Было:
import fullCycleImage from "figma:asset/66e41c056110298cad484bbcd0c9c3736aafb1e4.png";

// Ст��ло:
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
```

---

### 4️⃣ Деплой на Vercel

#### Способ 1: Через Vercel CLI (рекомендуется)

```bash
# Установите Vercel CLI
npm i -g vercel

# В папке проекта
cd fastmine-landing

# Установите зависимости
npm install

# Деплой
vercel
```

#### Способ 2: Через GitHub

1. Создайте новый репозиторий на GitHub
2. Загрузите код:
```bash
git init
git add .
git commit -m "FastMine landing"
git branch -M main
git remote add origin https://github.com/ваш-username/fastmine-landing.git
git push -u origin main
```

3. Импортируйте в Vercel:
   - Зайдите на [vercel.com](https://vercel.com)
   - "Add New Project"
   - Выберите ваш репозиторий
   - Нажмите "Deploy"

#### Способ 3: Прямая загрузка

1. Зайдите на [vercel.com](https://vercel.com)
2. Перетащите папку проекта в окно браузера
3. Vercel автоматически определит настройки и задеплоит

---

### 5️⃣ Настройки Vercel

**Build Settings:**
- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

**Environment Variables:** (не требуются для текущей версии)

---

## ✅ Чеклист перед деплоем

- [ ] Экспортированы все 29 изображений
- [ ] Изображения лежат в `/public/assets/`
- [ ] Обновлены импорты в `App.tsx`
- [ ] Обновлены импорты в `FormatsImproved.tsx`
- [ ] Запущено `npm install`
- [ ] Локально работает (`npm run dev`)
- [ ] Готово к деплою!

---

## 🐛 Решение проблем

### Изображения не отображаются
```bash
# Проверьте структуру папок
ls -la public/assets/

# Должно быть 29 PNG файлов
```

### Ошибка при деплое
```bash
# Очистите кэш и переустановите
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Белый экран после деплоя
Проверьте в DevTools Console на ошибки загрузки изображений. Убедитесь что пути правильные.

---

## 📞 Поддержка

Если что-то не работает — проверьте:
1. Все ли 29 изображений в `/public/assets/`
2. Правильно ли обновлены импорты
3. Нет ли ошибок в консоли браузера

---

**Удачного деплоя! 🚀**
