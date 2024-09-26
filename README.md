# Todo with Me

❗ _Статус: в разработке_

**Todo with Me** — это минималистичное и интуитивно понятное SPA-приложение для управления списками дел (создание, изменение, удаление), разработанное с использованием современных технологий.

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
- **RTK Query**: для эффективного управления состоянием приложения.
- **Vite**: в качестве инструмента сборки.
- **json-server**: для имитации REST API на основе JSON-файлов.
- **Storybook**: для создания документации, ускорения разработки и тестирования компонентов.
- **Conventional Commits**: для стандартизации сообщений коммитов.

### 🚧 Обратите внимание

Проект находится в активной стадии разработки. В данный момент ведется работа над добавлением новых фичей и улучшением старых, чтобы сделать опыт использования приложения еще более приятным и эффективным.

## 🚀 Инструкция по запуску

1. Клонируйте репозиторий с помощью команды

```shell
git clone https://github.com/nurmy-26/todo-with-me.git
```

2. Установите зависимости

```shell
npm i
```

3. Запустите приложение на локальном сервере

```shell
npm run app
```

4. Откройте в браузере ссылку для просмотра приложения

```shell
http://localhost:5173/
```

### Storybook

Для запуска Storybook используйте команду

```shell
npm run storybook
```

Если вам не нужно, чтобы при запуске автоматически открывалась вкладка в браузере, используйте команду

```shell
npm run sb
```

Документация Storybook будет доступна по адресу

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
