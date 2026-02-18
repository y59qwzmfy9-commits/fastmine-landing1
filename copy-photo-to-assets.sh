#!/bin/bash
# Копирует изображения из папки photo (по хешам Figma) в public/assets с правильными именами
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PHOTO="$SCRIPT_DIR/photo"
DEST="$SCRIPT_DIR/public/assets"
mkdir -p "$DEST"

# hash → имя для сайта (из VERCEL_DEPLOY.md)
declare -A MAP
MAP[885a8b424b7e32f07ae81d536d3a3ae6dadfd41e]=hero.png
MAP[56f69e0474ec772a88300550b89978aa4bb66d07]=logo.png
MAP[d4caffbd1b4b3651bd144189526de9176d7efdb0]=gpu.png
MAP[e57e6fb1dfd62d69f2598b7c2c289b037f6c1510]=asic.png
MAP[f9e5f2984be1785c02e05f099e954cdcc8d8e19d]=delivery.png
MAP[490d0961df8654ee8501ce2c71de943e932c4fe2]=commissioning.png
MAP[21a5a8c2b90da22060a42c7bef0400bf6255aacc]=grid.png
MAP[4ad3a5dfe0e2113899411165f23c16ef7d0e907e]=fastmine.png
MAP[37044ee41cb727ee13ebe340815122f6d6723242]=container-modules.png
MAP[86ef02a6c76ec34a173cea4ea076e15ca28ae6d8]=personnel.png
MAP[24dce7e9c079a57847a079bb893c6188aa0e9b0d]=aerial-view.png
MAP[a7fc722c86776a0bf8ae6671c93a8255f91a3403]=maintenance.png
MAP[1385c16d2bcf14b947e7042001aa780956ef5594]=new-stations.png
MAP[d2686ebd5865b7221b71314ed9c738d895a37c89]=monitoring.png
MAP[66e41c056110298cad484bbcd0c9c3736aafb1e4]=full-cycle.png
MAP[0a03d438a8f24d6c3108f40deccee556b78510db]=guarantees.png
MAP[719b1dfca7d55986a1af27c1e11fe78075a7f274]=asic-hosting.png
MAP[dae7537bbe41af0f943f02540afbf6880f80d258]=gpu-mining.png
MAP[e4c272631a44bc06a650ed8fb8abe5e645da862e]=weichai.png
MAP[a38ccc8bbd9c936a8ac7f20348187b36d94af794]=gas-infra.png
MAP[d30fa8deae183fccea0bae53a15f33a7af23d5a3]=technician.png
MAP[431ef10b0ea129e06e8de622d6cff46855940cff]=baudouin.png
MAP[3c9bb3fce1e3fcafcad20a84be7d57779fa0b41d]=baudouin-complex.png
MAP[9e1e0e6a5be658c95ceffa6a3db3e52927641cc9]=gas-pipeline.png
MAP[4560e859a8f981ee8aa2aeafae2836371b6da85e]=service-maintenance.png
MAP[fdfe24102a1f198363c86a9211c03f20ca4860c4]=financial-model.png
MAP[5494590d6b5fc44e953a5f245784f87beff560c0]=supermaly-generator.png
MAP[99da96406a82b8363ffd914c123b36fe267d7b03]=gas-pipeline-field.png
MAP[d769db4c393b1e2e2b14d91f6505d05b1b00b78f]=engi-blue-generator.png

copied=0
for hash in "${!MAP[@]}"; do
  name="${MAP[$hash]}"
  # В photo файл может быть hash.png или hash.png.jpeg
  src=""
  [ -f "$PHOTO/$hash.png" ] && src="$PHOTO/$hash.png"
  [ -f "$PHOTO/$hash.png.jpeg" ] && src="$PHOTO/$hash.png.jpeg"
  [ -z "$src" ] && continue
  cp "$src" "$DEST/$name"
  echo "✅ $name ← $hash"
  ((copied++))
done
echo ""
echo "Скопировано из photo: $copied из 29. Остальные оставлены из public/assets."
echo "Готово для деплоя."
