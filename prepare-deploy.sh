#!/bin/bash

# 🚀 Автоматический скрипт подготовки FastMine к деплою
# Использование: bash prepare-deploy.sh

echo "══════════════════════════════════════════════════════════"
echo "  🚀 FastMine Deployment Preparation Script"
echo "══════════════════════════════════════════════════════════"
echo ""

# Проверяем что мы в правильной директории
if [ ! -f "package.json" ]; then
    echo "❌ Ошибка: файл package.json не найден!"
    echo "   Запустите скрипт из корня проекта FastMine"
    exit 1
fi

echo "✅ Найден package.json"
echo ""

# Шаг 1: Заменяем App.tsx на production-версию
echo "📝 Шаг 1: Замена App.tsx на production-версию..."
if [ -f "App.production.tsx" ]; then
    cp App.production.tsx src/app/App.tsx
    echo "   ✅ App.tsx заменён"
else
    echo "   ❌ App.production.tsx не найден!"
    exit 1
fi

# Шаг 2: Заменяем FormatsImproved.tsx на production-версию
echo "📝 Шаг 2: Замена FormatsImproved.tsx на production-версию..."
if [ -f "FormatsImproved.production.tsx" ]; then
    cp FormatsImproved.production.tsx src/app/components/FormatsImproved.tsx
    echo "   ✅ FormatsImproved.tsx заменён"
else
    echo "   ❌ FormatsImproved.production.tsx не найден!"
    exit 1
fi

# Шаг 3: Создаём папку для изображений
echo "📝 Шаг 3: Создание папки public/assets/..."
mkdir -p public/assets
echo "   ✅ Папка public/assets/ создана"

# Шаг 4: Проверяем наличие изображений
echo "📝 Шаг 4: Проверка изображений..."
IMAGE_COUNT=$(ls public/assets/*.png 2>/dev/null | wc -l)

if [ "$IMAGE_COUNT" -eq 29 ]; then
    echo "   ✅ Найдено $IMAGE_COUNT изображений — всё в порядке!"
elif [ "$IMAGE_COUNT" -gt 0 ]; then
    echo "   ⚠️  Найдено только $IMAGE_COUNT изображений из 29"
    echo "   Необходимо скачать недостающие изображения"
else
    echo "   ⚠️  Изображения не найдены в public/assets/"
    echo ""
    echo "══════════════════════════════════════════════════════════"
    echo "  📥 КАК СКАЧАТЬ ИЗОБРАЖЕНИЯ:"
    echo "══════════════════════════════════════════════════════════"
    echo ""
    echo "1. Откройте Figma Make в Chrome"
    echo "2. Нажмите: ⌘ + ⌥ + J (откроется консоль)"
    echo "3. Скопируйте скрипт из файла COPY_THIS_SCRIPT.txt"
    echo "4. Вставьте в консоль и нажмите Enter"
    echo "5. Подождите 15-20 секунд"
    echo "6. Переместите скачанные PNG в public/assets/"
    echo ""
    echo "Или выполните команду:"
    echo "   mv ~/Downloads/*.png public/assets/"
    echo ""
fi

# Шаг 5: Финальная проверка
echo ""
echo "══════════════════════════════════════════════════════════"
echo "  ✅ ПРОЕКТ ПОДГОТОВЛЕН К ДЕПЛОЮ!"
echo "══════════════════════════════════════════════════════════"
echo ""
echo "📋 Статус:"
echo "   ✅ App.tsx → production версия"
echo "   ✅ FormatsImproved.tsx → production версия"
echo "   ✅ Папка public/assets/ создана"
if [ "$IMAGE_COUNT" -eq 29 ]; then
    echo "   ✅ Все 29 изображений на месте"
else
    echo "   ⚠️  Изображения: $IMAGE_COUNT/29"
fi
echo ""

if [ "$IMAGE_COUNT" -eq 29 ]; then
    echo "══════════════════════════════════════════════════════════"
    echo "  🚀 ГОТОВО К ДЕПЛОЮ НА VERCEL!"
    echo "══════════════════════════════════════════════════════════"
    echo ""
    echo "Выполните команды:"
    echo ""
    echo "  npm install         # Установить зависимости"
    echo "  npm run dev         # Проверить локально"
    echo "  vercel              # Задеплоить на Vercel"
    echo ""
    echo "Или:"
    echo ""
    echo "  1. Откройте vercel.com"
    echo "  2. Перетащите папку проекта в окно браузера"
    echo "  3. Готово!"
    echo ""
else
    echo "══════════════════════════════════════════════════════════"
    echo "  ⚠️  ОСТАЛОСЬ СКАЧАТЬ ИЗОБРАЖЕНИЯ"
    echo "══════════════════════════════════════════════════════════"
    echo ""
    echo "См. инструкцию выше ⬆️"
    echo ""
fi

echo "══════════════════════════════════════════════════════════"
