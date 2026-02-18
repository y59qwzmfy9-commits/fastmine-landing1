# Новый репозиторий — что уже сделано и что сделать тебе

## Сделано

- **Git инициализирован** в папке проекта
- Добавлен **.gitignore** (node_modules, dist, .env и т.д.)
- Сделан **первый коммит** (164 файла, ветка `main`)

---

## Создать репозиторий на GitHub и запушить

### 1. Создай новый репозиторий на GitHub

1. Открой **https://github.com/new**
2. **Repository name:** например `fastmine-landing` или `gpu-mining-landing`
3. **Public**, без README / .gitignore / license (всё уже есть локально)
4. Нажми **Create repository**

### 2. Привяжи remote и запушь

В терминале выполни (подставь свой логин и имя репо):

```bash
cd "/Users/danil/Downloads/GPU Mining Landing Page-11-8"
git remote add origin https://github.com/ТВОЙ_ЛОГИН/ИМЯ_РЕПО.git
git branch -M main
git push -u origin main
```

Пример, если репо `fastmine-landing` у пользователя `danil`:

```bash
cd "/Users/danil/Downloads/GPU Mining Landing Page-11-8"
git remote add origin https://github.com/danil/fastmine-landing.git
git branch -M main
git push -u origin main
```

(При запросе пароля используй **Personal Access Token** вместо пароля от GitHub.)

---

После пуша можно в Vercel нажать **Import Git Repository** и выбрать новый репозиторий.
