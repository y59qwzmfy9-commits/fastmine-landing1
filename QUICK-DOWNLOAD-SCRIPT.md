# ⚡ БЫСТРЫЙ СПОСОБ - Скопируй и вставь

## 📋 Инструкция:

1. **Откройте лендинг в Figma Make** (режим Preview)
2. **Нажмите F12** → откройте **Console**
3. **Скопируйте код ниже** полностью
4. **Вставьте в консоль** и нажмите **Enter**
5. **Подождите 30-60 секунд**
6. **Скачается ZIP** с изображениями!

---

## 📦 КОД (скопируйте целиком):

```javascript
(async function() {
    // Загружаем библиотеки
    if (!window.JSZip) {
        const s1 = document.createElement('script');
        s1.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
        document.head.appendChild(s1);
        await new Promise(r => s1.onload = r);
    }
    if (!window.saveAs) {
        const s2 = document.createElement('script');
        s2.src = 'https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js';
        document.head.appendChild(s2);
        await new Promise(r => s2.onload = r);
    }
    
    console.log('🚀 FastMine Loader запущен!');
    
    const images = [...document.querySelectorAll('img')].filter(img => 
        !img.src.startsWith('data:') && 
        img.naturalWidth > 50 && 
        img.naturalHeight > 50
    );
    
    console.log(`🔍 Найдено ${images.length} изображений`);
    
    const zip = new JSZip();
    let count = 0;
    
    for (let img of images) {
        try {
            const res = await fetch(img.src);
            const blob = await res.blob();
            const ext = blob.type.split('/')[1].replace('jpeg', 'jpg');
            const name = `fastmine_${String(++count).padStart(3, '0')}.${ext}`;
            zip.file(name, blob);
            console.log(`✅ ${count}/${images.length} - ${name}`);
        } catch(e) {
            console.log(`❌ Ошибка: ${img.src.substring(0,50)}...`);
        }
    }
    
    console.log('📦 Создание ZIP...');
    const content = await zip.generateAsync({type:'blob'});
    saveAs(content, 'fastmine-images.zip');
    console.log(`✅ ГОТОВО! Скачано ${count} изображений`);
})();
```

---

## ✅ Что дальше?

После скачивания ZIP:

1. **Распакуйте** `fastmine-images.zip`
2. **Откройте** файл `/EXPORT-GUIDE.md` для списка имен
3. **Переименуйте** файлы (fastmine_001.png → hero.png и т.д.)
4. **Скопируйте** в `/public/assets/`
5. **Деплой** на Vercel!

---

## 🎯 Соответствие файлов:

Вам нужно будет сравнить изображения визуально:

- **fastmine_001.png** → вероятно **hero.png** (большое фоновое)
- **fastmine_002.png** → вероятно **logo.png** (логотип)
- И так далее...

**Или используйте ВАРИАНТ 1 (Export)** - там всё автоматически!
