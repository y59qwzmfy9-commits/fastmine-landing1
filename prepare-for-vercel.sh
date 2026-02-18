#!/bin/bash

# 🚀 FastMine - Автоматическая подготовка к деплою
# Этот скрипт подготовит проект для загрузки на Vercel

echo "🚀 FastMine - Подготовка к деплою на Vercel"
echo "============================================"
echo ""

# Цвета для вывода
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Проверка что мы в правильной директории
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Ошибка: package.json не найден${NC}"
    echo "Запустите скрипт из корневой папки проекта"
    exit 1
fi

echo -e "${YELLOW}📦 Шаг 1: Проверка структуры проекта${NC}"

# Создаём папку для изображений если её нет
if [ ! -d "public" ]; then
    mkdir public
    echo "✅ Создана папка /public"
fi

if [ ! -d "public/assets" ]; then
    mkdir public/assets
    echo "✅ Создана папка /public/assets"
fi

# Проверяем наличие production-файлов
if [ ! -f "App.production.tsx" ]; then
    echo -e "${RED}❌ Файл App.production.tsx не найден${NC}"
    exit 1
fi

if [ ! -f "FormatsImproved.production.tsx" ]; then
    echo -e "${RED}❌ Файл FormatsImproved.production.tsx не найден${NC}"
    exit 1
fi

echo ""
echo -e "${YELLOW}📋 Шаг 2: Проверка изображений${NC}"

# Подсчитываем количество изображений
IMAGE_COUNT=$(find public/assets -name "*.png" 2>/dev/null | wc -l)

if [ "$IMAGE_COUNT" -eq 29 ]; then
    echo -e "${GREEN}✅ Все 29 изображений найдены!${NC}"
elif [ "$IMAGE_COUNT" -eq 0 ]; then
    echo -e "${RED}❌ Изображения не найдены в /public/assets/${NC}"
    echo ""
    echo "Необходимо скачать изображения:"
    echo "1. Откройте /download-all-images.html в браузере"
    echo "2. Нажмите 'Скачать все изображения'"
    echo "3. Переместите скачанные файлы в /public/assets/"
    echo ""
    echo "Или используйте консоль браузера (см. FINAL_DEPLOYMENT_GUIDE.md)"
    exit 1
else
    echo -e "${YELLOW}⚠️  Найдено только $IMAGE_COUNT изображений (нужно 29)${NC}"
    echo "Убедитесь что все изображения скачаны"
    read -p "Продолжить? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

echo ""
echo -e "${YELLOW}🔄 Шаг 3: Замена файлов на production-версии${NC}"

# Создаём backup
if [ -f "src/app/App.tsx" ]; then
    cp src/app/App.tsx src/app/App.tsx.backup
    echo "📦 Backup: src/app/App.tsx.backup"
fi

if [ -f "src/app/components/FormatsImproved.tsx" ]; then
    cp src/app/components/FormatsImproved.tsx src/app/components/FormatsImproved.tsx.backup
    echo "📦 Backup: src/app/components/FormatsImproved.tsx.backup"
fi

# Копируем production-версии
cp App.production.tsx src/app/App.tsx
echo "✅ Заменён src/app/App.tsx"

cp FormatsImproved.production.tsx src/app/components/FormatsImproved.tsx
echo "✅ Заменён src/app/components/FormatsImproved.tsx"

echo ""
echo -e "${YELLOW}📥 Шаг 4: Установка зависимостей${NC}"

if [ ! -d "node_modules" ]; then
    echo "Устанавливаем зависимости..."
    npm install
else
    echo "Зависимости уже установлены"
fi

echo ""
echo -e "${YELLOW}🔨 Шаг 5: Сборка проекта${NC}"

npm run build

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Сборка успешна!${NC}"
else
    echo -e "${RED}❌ Ошибка при сборке${NC}"
    echo "Проверьте логи выше для деталей"
    exit 1
fi

echo ""
echo -e "${GREEN}🎉 ГОТОВО!${NC}"
echo ""
echo "============================================"
echo "Проект готов к деплою на Vercel!"
echo "============================================"
echo ""
echo "Следующие шаги:"
echo ""
echo "1️⃣  Локальный тест (опционально):"
echo "    npm run preview"
echo ""
echo "2️⃣  Деплой на Vercel (выберите один способ):"
echo ""
echo "    А) Vercel CLI:"
echo "       npm i -g vercel"
echo "       vercel"
echo ""
echo "    Б) GitHub:"
echo "       git init"
echo "       git add ."
echo "       git commit -m 'FastMine landing ready'"
echo "       git push"
echo "       Затем импортируйте в Vercel"
echo ""
echo "    В) Прямая загрузка:"
echo "       Перетащите папку на vercel.com"
echo ""
echo "============================================"
echo ""
echo -e "${YELLOW}📖 Полная документация: FINAL_DEPLOYMENT_GUIDE.md${NC}"
echo ""
