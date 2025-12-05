# React use() Hook Demo

## Опис проекту

Цей проект демонструє використання нового хука `use()` в React 19 для роботи з асинхронними даними (Promise). Хук `use()` дозволяє "розпаковувати" значення Promise безпосередньо в компоненті, інтегруючись з `Suspense` для керування станом завантаження.

## Структура проекту

```
src/
├── components/
│   ├── MessageComponent.jsx  # Компонент з use() хуком
│   └── ErrorBoundary.jsx     # Обробка помилок
├── App.jsx                   # Головний компонент
├── App.css                   # Стилі
├── main.jsx                  # Точка входу
└── index.css                 # Глобальні стилі
```

## Основні можливості

- **Хук `use()`** - новий React 19 хук для роботи з Promise
- **Suspense** - відображення fallback під час завантаження даних
- **Error Boundary** - обробка помилок при завантаженні

## Як працює use() хук

```jsx
import { use } from "react";

function MessageComponent({ messagePromise }) {
  // use() автоматично "розпаковує" Promise
  const message = use(messagePromise);
  return <div>{message.content}</div>;
}
```

## Запуск проекту

```bash
# Встановлення залежностей
npm install

# Запуск в режимі розробки
npm run dev
```

## Технології

- React 19
- Vite
- ES6+
