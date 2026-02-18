# 🎯 ФИНАЛЬНАЯ ПОДГОТОВКА К VERCEL

## ✅ ЧТО УЖЕ ГОТОВО:

1. ✅ Все изображения появились в Figma Make
2. ✅ Есть production-версии файлов (`App.production.tsx`, `FormatsImproved.production.tsx`)
3. ✅ Создан HTML-инструмент для скачивания (`download-all-images.html`)
4. ✅ Полная документация в `VERCEL_DEPLOY.md`

---

## 🚀 ПОШАГОВАЯ ИНСТРУКЦИЯ

### Шаг 1: Скачайте все изображения

**Откройте в Figma Make:**

1. Откройте файл **`/download-all-images.html`**
2. Скопируйте весь HTML-код
3. Создайте новый HTML-файл на компьютере и вставьте код
4. Откройте HTML-файл в браузере
5. Нажмите кнопку **"Скачать все изображения"**
6. Подождите пока все 29 файлов скачаются

**ИЛИ используйте консоль:**

```javascript
// Вставьте в DevTools Console прямо в Figma Make
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

async function downloadAll() {
  console.log('🚀 Начинаю скачивание...');
  for (let i = 0; i < images.length; i++) {
    const { hash, name } = images[i];
    try {
      const module = await import(`figma:asset/${hash}.png`);
      const a = document.createElement('a');
      a.href = module.default;
      a.download = name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      console.log(`✅ ${i + 1}/29: ${name}`);
      await new Promise(r => setTimeout(r, 500));
    } catch (e) {
      console.error(`❌ ${name}:`, e);
    }
  }
  console.log('✅ Готово!');
}

downloadAll();
```

---

### Шаг 2: Экспортируйте проект из Figma Make

1. В Figma Make нажмите **"Export"** → **"Download ZIP"**
2. Распакуйте архив на компьютере

---

### Шаг 3: Подготовьте файлы для production

```bash
# Перейдите в папку проекта
cd fastmine-landing

# Создайте папку для изображений
mkdir -p public/assets

# Скопируйте все 29 скачанных изображений в public/assets/
# (переместите вручную или используйте команду)

# Замените файлы на production-версии
cp App.production.tsx src/app/App.tsx
cp FormatsImproved.production.tsx src/app/components/FormatsImproved.tsx
```

**ИЛИ вручную:**

1. Создайте папку `/public/assets/`
2. Переместите все 29 изображений туда
3. Откройте `/App.production.tsx` → Скопируйте → Вставьте в `/src/app/App.tsx`
4. Откройте `/FormatsImproved.production.tsx` → Скопируйте → Вставьте в `/src/app/components/FormatsImproved.tsx`

---

### Шаг 4: Проверьте локально

```bash
# Установите зависимости
npm install

# Запустите dev-сервер
npm run dev

# Откройте в браузере
# http://localhost:5173
```

**Проверьте что все изображения загружаются!**

---

### Шаг 5: Соберите production-версию

```bash
# Соберите проект
npm run build

# Проверьте build локально (опционально)
npm run preview
```

---

### Шаг 6: Деплой на Vercel

#### Вариант А: Vercel CLI (быстро)

```bash
# Установите Vercel CLI
npm i -g vercel

# Задеплойте
vercel

# Следуйте инструкциям в терминале
```

#### Вариант Б: GitHub + Vercel (рекомендуется)

```bash
# Инициализируйте Git
git init
git add .
git commit -m "FastMine landing ready for production"

# Создайте репозиторий на GitHub
# Затем загрузите код
git branch -M main
git remote add origin https://github.com/username/fastmine-landing.git
git push -u origin main
```

**На Vercel:**
1. Зайдите на [vercel.com](https://vercel.com)
2. "Add New Project"
3. Выберите ваш GitHub репозиторий
4. Vercel автоматически определит настройки (Vite)
5. Нажмите **"Deploy"**

#### Вариант В: Прямая загрузка

1. Зайдите на [vercel.com](https://vercel.com)
2. Перетащите папку проекта в окно браузера
3. Vercel задеплоит автоматически

---

## 📋 ЧЕКЛИСТ

- [ ] Скачаны все 29 изображений
- [ ] Изображения в `/public/assets/`
- [ ] Заменён `/src/app/App.tsx` на production-версию
- [ ] Заменён `/src/app/components/FormatsImproved.tsx` на production-версию
- [ ] Запущено `npm install`
- [ ] Локально работает (`npm run dev`)
- [ ] Build успешен (`npm run build`)
- [ ] Задеплоено на Vercel

---

## 🐛 Решение проблем

### Изображения не отображаются после деплоя

```bash
# Проверьте что все файлы на месте
ls -la public/assets/  # Должно быть 29 PNG файлов
```

### Ошибка при build

```bash
# Очистите кэш
rm -rf node_modules package-lock.json dist
npm install
npm run build
```

### Белый экран на Vercel

1. Откройте DevTools Console
2. Проверьте ошибки
3. Убедитесь что пути к изображениям правильные (`/assets/...`)

---

## 📞 Поддержка

Если что-то не работает:
1. Проверьте структуру папок
2. Убедитесь что заменили файлы на production-версии
3. Проверьте что все изображения загрузились

---

## 🎉 ГОТОВО!

После деплоя ваш сайт будет доступен по адресу типа:
```
https://fastmine-landing-abc123.vercel.app
```

**Удачи! 🚀**
