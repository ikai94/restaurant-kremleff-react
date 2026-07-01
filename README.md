# 🎉 Kremleff — сайт банкетного холла
 
> Стильный и современный сайт-визитка банкетного зала, разработанный на React + TypeScript + Ionic с использованием Vite. Демонстрирует услуги, меню, отзывы и особенности заведения в едином адаптивном интерфейсе.
 
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Ionic](https://img.shields.io/badge/Ionic-8-3880FF?logo=ionic&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=black)
 
---
 
## 📌 О проекте
 
**Kremleff** — одностраничный презентационный сайт банкетного холла, рассказывающий гостям об услугах заведения: организации мероприятий, фирменных блюдах, меню, преимуществах и отзывах гостей.
 
Проект построен на связке **React 19 + TypeScript + Ionic**, а сборка организована через **Vite**, что обеспечивает быстрый старт разработки, мгновенный HMR и оптимизированный production-бандл. Использование **Ionic React** даёт доступ к готовым адаптивным UI-компонентам и нативному ощущению интерфейса, а также упрощает потенциальный переход на мобильные платформы (iOS/Android) в будущем.
 
## ✨ Возможности
 
- 🖼️ **Hero-слайдер** на главном экране с ключевыми визуальными акцентами заведения
- 🍽️ **Раздел меню и фирменных блюд** (`Menu`, `SpecialDish`) для презентации кухни
- 🎊 **Блок мероприятий и услуг** (`Event`, `Services`) — форматы банкетов и предоставляемые услуги
- ⭐ **Отзывы и тестимониалы гостей** (`Reviews`, `Testimonials`)
- 🧭 **Верхняя панель и хедер с навигацией** (`TopBar`, `Header`) для удобной прокрутки по разделам
- 📱 **Полностью адаптивный интерфейс** на базе Ionic-компонентов
- 🧹 **Строгая типизация и единый стиль кода** — TypeScript, ESLint, Prettier
## 🛠️ Технологический стек
 
| Категория      | Технологии                                  |
| -------------- | -------------------------------------------- |
| Язык           | TypeScript                                   |
| Библиотека UI  | React 19, Ionic React, Ionicons              |
| Сборка         | Vite 7                                       |
| Стилизация     | CSS (Ionic design system)                    |
| Качество кода  | ESLint (typescript-eslint, react-hooks, react-refresh), Prettier |
 
## 📂 Структура проекта
 
```
src/
├── assets/
│   └── bar/                # изображения и медиа-контент
├── components/
│   ├── About/                # блок "О нас"
│   ├── Event/                 # блок мероприятий
│   ├── Features/              # преимущества заведения
│   ├── Footer/                # подвал сайта
│   ├── Header/                # шапка сайта
│   ├── HeroSlider/             # слайдер на главном экране
│   ├── Menu/                   # раздел меню
│   ├── Reviews/                # отзывы гостей
│   ├── Services/               # услуги банкетного холла
│   ├── SpecialDish/             # фирменные блюда
│   ├── Testimonials/           # блок с отзывами/цитатами
│   ├── TopBar/                  # верхняя панель навигации
│   └── index.ts                  # единая точка экспорта компонентов
├── App.tsx                      # корневой компонент приложения
├── index.css                     # глобальные стили
└── main.tsx                       # точка входа
```
 
## 🚀 Установка и запуск
 
```bash
# Клонировать репозиторий
git clone <ссылка-на-репозиторий>
cd kremleff
 
# Установить зависимости
npm install
 
# Запустить проект в режиме разработки
npm run dev
 
# Собрать production-версию (с проверкой типов)
npm run build
 
# Предпросмотр production-сборки
npm run preview
 
# Проверить код линтером
npm run lint
```
 
## 🎨 Стиль кода
 
Проект использует **TypeScript** в строгом режиме сборки (`tsc -b` перед сборкой Vite), а также единый стиль кода благодаря **ESLint** (с плагинами `typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`) и **Prettier**.
