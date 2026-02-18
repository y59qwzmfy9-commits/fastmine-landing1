#!/bin/bash
# Совмещает уже скачанные фото (любые имена) в public/assets для деплоя
# Использование: ./copy-figma-assets.sh [папка]   (по умолчанию ~/Downloads)

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
DEST="$SCRIPT_DIR/public/assets"
SRC="${1:-$HOME/Downloads}"

NAMES=(
  hero.png logo.png gpu.png asic.png delivery.png commissioning.png
  grid.png fastmine.png container-modules.png personnel.png aerial-view.png
  maintenance.png new-stations.png monitoring.png full-cycle.png guarantees.png
  asic-hosting.png gpu-mining.png weichai.png gas-infra.png technician.png
  baudouin.png baudouin-complex.png gas-pipeline.png service-maintenance.png
  financial-model.png supermaly-generator.png gas-pipeline-field.png engi-blue-generator.png
)

mkdir -p "$DEST"

# 1) Копируем файлы с уже правильными именами
for name in "${NAMES[@]}"; do
  if [ -f "$SRC/$name" ]; then
    cp "$SRC/$name" "$DEST/$name"
    echo "✅ $name"
  fi
done

# 2) Собираем остальные PNG (другие имена — например из Figma)
OTHER=()
for f in "$SRC"/*.png; do
  [ -f "$f" ] || continue
  base=$(basename "$f")
  for n in "${NAMES[@]}"; do
    if [[ "$base" == "$n" ]]; then continue 2; fi
  done
  OTHER+=("$f")
done

# Сортируем по имени файла (чтобы порядок был предсказуемым)
IFS=$'\n' read -d '' -ra SORTED < <(printf '%s\n' "${OTHER[@]}" | sort) || true
unset IFS

# 3) Недостающие имена заполняем по порядку из остальных файлов
idx=0
for name in "${NAMES[@]}"; do
  [ -f "$DEST/$name" ] && continue
  if [[ idx -lt ${#SORTED[@]} ]]; then
    cp "${SORTED[$idx]}" "$DEST/$name"
    echo "✅ $name ← $(basename "${SORTED[$idx]}")"
    ((idx++)) || true
  else
    echo "⏭️  $name — нет файла"
  fi
done

count=$(find "$DEST" -maxdepth 1 -name "*.png" 2>/dev/null | wc -l)
echo ""
echo "В public/assets: $count из ${#NAMES[@]}."
[[ $count -eq ${#NAMES[@]} ]] && echo "Готово к деплою."
