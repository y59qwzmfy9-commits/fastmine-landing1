// 🚀 Скрипт для экспорта всех 29 изображений из Figma Make
// Скопируйте этот код в консоль браузера (F12 -> Console)

(async function exportAllImages() {
  console.log('🎯 FastMine Image Export Script');
  console.log('================================');
  
  const images = [
    // App.tsx images (14)
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
    
    // FormatsImproved.tsx images (15)
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

  console.log(`📸 Всего изображений: ${images.length}`);
  console.log('');

  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < images.length; i++) {
    const { hash, name } = images[i];
    const progress = `[${i + 1}/${images.length}]`;
    
    try {
      // Импортируем через figma:asset
      const module = await import(`figma:asset/${hash}.png`);
      const imageUrl = module.default;
      
      // Создаём ссылку для скачивания
      const a = document.createElement('a');
      a.href = imageUrl;
      a.download = name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      
      successCount++;
      console.log(`✅ ${progress} ${name}`);
      
      // Задержка между скачиваниями (чтобы браузер успевал)
      await new Promise(resolve => setTimeout(resolve, 500));
      
    } catch (error) {
      errorCount++;
      console.error(`❌ ${progress} ${name} - Ошибка:`, error.message);
    }
  }

  console.log('');
  console.log('================================');
  console.log('📊 Результаты:');
  console.log(`✅ Успешно: ${successCount}/${images.length}`);
  console.log(`❌ Ошибки: ${errorCount}/${images.length}`);
  console.log('================================');
  
  if (successCount === images.length) {
    console.log('🎉 Все изображения успешно скачаны!');
    console.log('');
    console.log('📁 Следующие шаги:');
    console.log('1. Найдите скачанные файлы в папке Downloads');
    console.log('2. Создайте папку /public/assets/ в вашем проекте');
    console.log('3. Скопируйте все 29 файлов в /public/assets/');
    console.log('4. Замените файлы App.tsx и FormatsImproved.tsx на production версии');
    console.log('5. Деплойте на Vercel!');
  } else {
    console.warn('⚠️ Некоторые файлы не скачались. Попробуйте запустить скрипт ещё раз.');
  }
})();
