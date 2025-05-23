# test-task-list

Небольшое SPA-приложение для работы со списком задач.

## Описание

Приложение загружает список задач из JSON-файла `public/tasks.json`, позволяет отмечать задачи как выполненные (чекбоксы) и сохраняет только состояние выполнения (`done`) в `localStorage`. При перезагрузке страницы сохраняется статус задач, а сам список всегда берётся из оригинального JSON.

## Функционал

- Асинхронная загрузка списка задач из `tasks.json` при старте
- Отметка задач как выполненных/невыполненных
- Сохранение статусов задач (только поле `done`) в `localStorage`
- Автоматическое подтягивание оригинального списка при перезагрузке и восстановление статуса

## Технологии

- 🖥️ Vue.js 3 + Composition API
- 📦 Pinia для state-management
- 📝 TypeScript
- 🎨 SCSS
- 📂 Статический JSON-файл в `public/`

## Структура проекта

```
├── public/
│   └── tasks.json          # Исходный список задач
├── src/
│   ├── assets/             # Статические ассеты
│   ├── features/Task/      # Фичаблока задачи
│   │   ├── components/Block/TaskList/index.vue
│   │   ├── service/        # taskRepository.service.ts
│   │   └── usecase/        # taskServiceLocal.ts (SRP)
│   ├── store/              # Pinia-хранилище (useTaskStore)
│   ├── types/              # ITaks интерфейс
│   ├── App.vue
│   └── main.ts             # Точка входа
├── .eslintrc.js            # Конфиг ESLint
├── tsconfig.json           # Конфиг TypeScript
└── package.json
```

## Установка

Убедитесь, что у вас установлен Node.js (рекомендуется версия >=16) и npm.

```bash
# Клонируйте репозиторий
git clone https://your-repo-url/test-task-list.git
cd test-task-list

# Установите зависимости
npm install
```

## Скрипты

```bash
# Запуск в режиме разработки с "горячей" перезагрузкой
npm run dev

# Сборка для продакшена в папку dist/
npm run build

# Линтинг и фикс файлов
npm run lint
```

## Настройка
- **tasks.json**: при необходимости добавьте/отредактируйте задачи в `public/tasks.json`.
