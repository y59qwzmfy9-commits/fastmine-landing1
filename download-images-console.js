// ========================================
// FASTMINE - СКРИПТ ЗАГРУЗКИ ИЗОБРАЖЕНИЙ
// ========================================
//
// ИНСТРУКЦИЯ:
// 1. Откройте ваш лендинг в Figma Make (режим Preview)
// 2. Нажмите F12 (откроется консоль)
// 3. Перейдите на вкладку "Console"
// 4. Скопируйте ВЕСЬ этот файл
// 5. Вставьте в консоль и нажмите Enter
// 6. Подождите 30-60 секунд
// 7. Скачается ZIP с изображениями

(async function() {
    console.log('🚀 FastMine - Загрузчик изображений запущен...');
    console.log('==========================================\n');
    
    // Загружаем библиотеки если их нет
    if (typeof JSZip === 'undefined') {
        console.log('📦 Загрузка JSZip...');
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js');
    }
    
    if (typeof saveAs === 'undefined') {
        console.log('📦 Загрузка FileSaver...');
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js');
    }
    
    // Небольшая задержка для загрузки библиотек
    await sleep(1000);
    
    console.log('\n🔍 Поиск изображений на странице...');
    
    // Находим все изображения
    const images = Array.from(document.querySelectorAll('img'));
    
    if (images.length === 0) {
        console.error('❌ ОШИБКА: Изображения не найдены!');
        console.log('💡 Убедитесь что:');
        console.log('   1. Вы открыли лендинг в режиме Preview');
        console.log('   2. Страница полностью загрузилась');
        console.log('   3. Вы прокрутили страницу до конца (для lazy load)');
        return;
    }
    
    console.log(`✅ Найдено ${images.length} изображений\n`);
    console.log('⏳ Начинаю загрузку...\n');
    
    const zip = new JSZip();
    let successCount = 0;
    let errorCount = 0;
    
    // Загружаем каждое изображение
    for (let i = 0; i < images.length; i++) {
        const img = images[i];
        const num = i + 1;
        
        try {
            console.log(`[${num}/${images.length}] Загрузка...`);
            
            // Пропускаем data: URLs и слишком маленькие изображения
            if (img.src.startsWith('data:')) {
                console.log(`   ⏭️  Пропущено (data URL)`);
                continue;
            }
            
            if (img.naturalWidth < 50 || img.naturalHeight < 50) {
                console.log(`   ⏭️  Пропущено (слишком маленькое: ${img.naturalWidth}x${img.naturalHeight})`);
                continue;
            }
            
            // Загружаем изображение
            const response = await fetch(img.src);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            
            const blob = await response.blob();
            
            // Определяем расширение
            let extension = blob.type.split('/')[1] || 'png';
            if (extension === 'jpeg') extension = 'jpg';
            
            // Генерируем имя файла
            const filename = `fastmine_${String(successCount + 1).padStart(3, '0')}.${extension}`;
            
            // Добавляем в ZIP
            zip.file(filename, blob);
            successCount++;
            
            console.log(`   ✅ ${filename} - OK (${Math.round(blob.size / 1024)} KB)`);
            
        } catch (error) {
            errorCount++;
            const shortSrc = img.src.substring(0, 80);
            console.error(`   ❌ Ошибка: ${error.message}`);
            console.error(`      URL: ${shortSrc}...`);
        }
    }
    
    console.log('\n==========================================');
    console.log('📊 СТАТИСТИКА:');
    console.log(`   ✅ Успешно загружено: ${successCount}`);
    console.log(`   ❌ Ошибок: ${errorCount}`);
    console.log('==========================================\n');
    
    if (successCount === 0) {
        console.error('❌ Не удалось загрузить ни одного изображения!');
        console.log('💡 Попробуйте:');
        console.log('   1. Перезагрузить страницу');
        console.log('   2. Прокрутить до конца');
        console.log('   3. Запустить скрипт снова');
        return;
    }
    
    console.log('📦 Создание ZIP архива...');
    console.log('⏳ Это может занять 10-30 секунд...\n');
    
    const content = await zip.generateAsync({
        type: 'blob',
        compression: 'DEFLATE',
        compressionOptions: { level: 6 }
    }, function updateCallback(metadata) {
        const percent = metadata.percent.toFixed(0);
        console.log(`   Прогресс: ${percent}%`);
    });
    
    console.log('\n💾 Сохранение файла...');
    
    // Сохраняем ZIP
    saveAs(content, 'fastmine-images.zip');
    
    console.log('\n==========================================');
    console.log('✅ ГОТОВО!');
    console.log('==========================================');
    console.log(`📦 Файл "fastmine-images.zip" скачан`);
    console.log(`📊 Всего изображений: ${successCount}`);
    console.log('\n📋 СЛЕДУЮЩИЕ ШАГИ:');
    console.log('   1. Распакуйте fastmine-images.zip');
    console.log('   2. Переименуйте файлы по списку из /EXPORT-GUIDE.md');
    console.log('   3. Скопируйте в папку /public/assets/');
    console.log('   4. Деплой на Vercel!');
    console.log('\n🎉 Успехов!');
    
})();

// Вспомогательные функции
function loadScript(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
