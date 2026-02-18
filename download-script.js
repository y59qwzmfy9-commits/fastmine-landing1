// FastMine - Скрипт для загрузки всех изображений
// Скопируйте весь этот файл и вставьте в консоль браузера (F12 -> Console)

// ИНСТРУКЦИЯ:
// 1. Откройте ваш лендинг в Figma Make (режим Preview)
// 2. Нажмите F12 (откроется DevTools)
// 3. Перейдите на вкладку Console
// 4. Скопируйте ВЕСЬ текст из этого файла
// 5. Вставьте в консоль и нажмите Enter
// 6. Подождите пока скачается ZIP файл

// Сначала загружаем библиотеки
(function() {
    const script1 = document.createElement('script');
    script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
    document.head.appendChild(script1);
    
    const script2 = document.createElement('script');
    script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js';
    document.head.appendChild(script2);
    
    script2.onload = function() {
        setTimeout(downloadImages, 1000);
    };
})();

async function downloadImages() {
    console.log('🚀 Запуск загрузчика FastMine...');
    
    const images = document.querySelectorAll('img');
    console.log(`🔍 Найдено ${images.length} изображений`);
    
    if (images.length === 0) {
        console.error('❌ Изображения не найдены! Убедитесь что страница полностью загружена.');
        return;
    }
    
    const zip = new JSZip();
    let count = 0;
    
    for (let i = 0; i < images.length; i++) {
        const img = images[i];
        try {
            console.log(`⏳ Загрузка ${i + 1}/${images.length}...`);
            
            const response = await fetch(img.src);
            const blob = await response.blob();
            const extension = blob.type.split('/')[1] || 'png';
            const filename = `fastmine_${String(++count).padStart(3, '0')}.${extension}`;
            
            zip.file(filename, blob);
            console.log(`✅ ${filename} - загружено`);
        } catch (e) {
            console.log(`❌ Ошибка загрузки изображения ${i + 1}`);
        }
    }
    
    console.log('📦 Создание ZIP архива...');
    const content = await zip.generateAsync({
        type: 'blob',
        compression: 'DEFLATE',
        compressionOptions: { level: 6 }
    });
    
    console.log('💾 Сохранение файла...');
    saveAs(content, 'fastmine-images.zip');
    
    console.log('✅ Готово! Файл fastmine-images.zip скачан.');
    console.log(`📊 Всего изображений: ${count}`);
}
