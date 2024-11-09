# [Todo with Me](https://nurmy-26.github.io/todo-with-me/)

❗ _Статус: рефакторинг и доработка_

**Todo with Me** — минималистичное SPA-приложение для управления списками дел (создание, изменение, удаление), спроектированное в соответствии с принципами FSD архитектуры. Для взаимодействия с API и управления состоянием используется RTK Query.

## 🛠️ Стек технологий

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)

- **Feature-Sliced Design**: приложение спроектировано в соответствии с принципами FSD архитектуры.
- **TypeScript**: в качестве основного языка проекта.
- **React**: для декларативной разработки переиспользуемых пользовательских интерфейсов.
- **React Router**: для маршрутизации между страницами.
- **RTK Query**: для управления состоянием приложения и взаимодействия с API.
- **Vite**: в качестве инструмента сборки.
- **json-server**: для имитации REST API на основе JSON-файлов.
- **Storybook**: для создания документации, ускорения разработки и тестирования компонентов.
- **Conventional Commits**: для стандартизации сообщений коммитов.
- **CI/CD**: настроено с использованием GitHub Actions.

### 🚧 Обратите внимание

Проект находится в стадии доработки.

В данный момент моковый json-server размещен на бесплатном хостинге и время ожидания ответа на первый запрос может составлять до минуты реального времени.

### 🎯 В планах

- покрытие тестами
- написание и размещение более стабильного API
- добавление авторизации
- добавление кастомизации
- расширение функционала

## 🚀 Инструкция по запуску

### 1. Клонируйте репозиторий с помощью команды

```shell
git clone https://github.com/nurmy-26/todo-with-me.git
```

### 2. Установите зависимости

```shell
npm i
```

### 3. Запуск приложения на локальном сервере

Для тестирования приложения локально есть два варианта запуска:

- с использованием удаленного API

```shell
npm run dev   # Подключается к заранее настроенному удаленному API
```

❗ _Время ожидания ответа на **первый** запрос от удаленного сервера может составлять до минуты реального времени._

- с использованием локального сервера данных (json-server)

```shell
npm run app   # Параллельно запускает локальный json-server и работает с ним
```

### 4. Откройте в браузере ссылку для просмотра приложения

```shell
http://localhost:5173/todo-with-me
```

## Тестирование итоговой сборки

Чтобы протестировать приложение после сборки и перед его развертыванием на сервере, выполните следующие команды

```shell
npm run build   # Собирает проект для продакшена
npm run preview # Запускает локальный сервер для предпросмотра собранного приложения
```

После этого приложение будет доступно для предпросмотра по следующему адресу:

```shell
http://localhost:4173/todo-with-me
```

Откройте этот URL в вашем браузере, чтобы убедиться, что приложение работает корректно и все маршруты загружаются как ожидалось.

## Storybook

Для запуска Storybook используйте команду

```shell
npm run storybook
```

Если вам **не** нужно, чтобы при запуске каждый раз автоматически открывалась вкладка в браузере (например, если она и так уже открыта), используйте команду

```shell
npm run sb
```

Документация Storybook будет доступна по адресу:

```shell
http://localhost:6006/
```

<!--
If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
-->
