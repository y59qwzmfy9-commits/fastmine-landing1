# Добавить vercel.json в GitHub и задеплоить

Репозиторий требует твою авторизацию — выполни **один** из вариантов в терминале.

---

## Вариант 1: У тебя уже клонирован репо `fastmine-landing`

```bash
cd /путь/к/папке/fastmine-landing
cp "/Users/danil/Downloads/GPU Mining Landing Page-11-8/vercel.json" .
git add vercel.json
git commit -m "Add Vercel config for Vite"
git push
```

---

## Вариант 2: Клонировать, добавить файл и запушить

```bash
cd ~
git clone https://github.com/y59qwzmfy9-commits/fastmine-landing.git
cd fastmine-landing
cp "/Users/danil/Downloads/GPU Mining Landing Page-11-8/vercel.json" .
git add vercel.json
git commit -m "Add Vercel config for Vite"
git push
```

(При запросе логина/пароля используй GitHub логин и **Personal Access Token** вместо пароля.)

---

## Вариант 3: Добавить файл через сайт GitHub

1. Открой https://github.com/y59qwzmfy9-commits/fastmine-landing
2. **Add file** → **Create new file**
3. Имя файла: `vercel.json`
4. Вставь содержимое:

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install"
}
```

5. **Commit new file**

После пуша или коммита на GitHub зайди в Vercel и сделай **Redeploy** — настройки подхватятся.
