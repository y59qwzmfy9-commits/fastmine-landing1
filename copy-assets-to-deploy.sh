#!/bin/bash
# Совмещает фото для деплоя: копирует 29 изображений в public/assets
# Запуск: ./copy-assets-to-deploy.sh [папка_откуда]
# По умолчанию: ~/Downloads

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
DEST="$SCRIPT_DIR/public/assets"
SRC="${1:-$HOME/Downloads}"

ASSETS=(
  hero.png logo.png gpu.png asic.png delivery.png commissioning.png
  grid.png fastmine.png container-modules.png personnel.png aerial-view.png
  maintenance.png new-stations.png monitoring.png full-cycle.png guarantees.png
  asic-hosting.png gpu-mining.png weichai.png gas-infra.png technician.png
  baudouin.png baudouin-complex.png gas-pipeline.png service-maintenance.png
  financial-model.png supermaly-generator.png gas-pipeline-field.png engi-blue-generator.png
)

mkdir -p "$DEST"
copied=0

echo "📁 Источник: $SRC"
echo "📁 Назначение: $DEST"
echo ""

for name in "${ASSETS[@]}"; do
  if [ -f "$SRC/$name" ]; then
    cp "$SRC/$name" "$DEST/$name"
    echo "✅ $name"
    ((copied++))
  else
    echo "⏭️  $name (нет в источнике)"
  fi
done

echo ""
echo "Скопировано: $copied из ${#ASSETS[@]}"
if [ "$copied" -eq "${#ASSETS[@]}" ]; then
  echo "🎉 Все фото на месте. Можно деплоить."
else
  echo "💡 Скачайте недостающие через DEPLOY-TOOL.html в Figma Make (Preview)."
fi
