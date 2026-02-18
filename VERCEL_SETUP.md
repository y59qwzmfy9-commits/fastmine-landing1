# Подключение Vercel и автодеплой

После того как вы выполните `git push -u origin main`, сделайте следующее.

---

## 1. Импорт проекта в Vercel

1. Откройте **https://vercel.com** и войдите в аккаунт.
2. Нажмите **Add New…** → **Project**.
3. В разделе **Import Git Repository** выберите **fastmine-landing1** (или введите URL репозитория).
4. Настройки (обычно подхватываются из `vercel.json`):
   - **Framework Preset:** Vite  
   - **Build Command:** `npm run build`  
   - **Output Directory:** `dist`  
   - **Root Directory:** `./`
5. Нажмите **Deploy**.

Деплой будет идти автоматически при каждом пуше в ветку `main`.

---

## 2. Автодеплой (без доп. настроек)

После импорта репозитория Vercel сам:

- собирает проект при каждом `git push` в `main`;
- создаёт превью для pull request’ов.

Никаких GitHub Actions для деплоя на Vercel добавлять не нужно — достаточно подключить репо в Vercel.

---

## 3. GitHub Actions (CI)

В репозитории уже есть workflow **`.github/workflows/ci.yml`**:

- при каждом **push** и **pull request** в `main` запускается сборка (`npm ci` и `npm run build`);
- это проверяет, что проект собирается, до деплоя на Vercel.

---

## 4. Итог

| Действие              | Где происходит        |
|------------------------|------------------------|
| Пуш в `main`           | Вы в терминале        |
| Сборка в CI            | GitHub Actions         |
| Деплой на Vercel       | Vercel (после импорта) |

Сначала выполните `git push -u origin main`, затем импортируйте репозиторий в Vercel по шагам выше.
