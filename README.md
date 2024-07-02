# React template with webpack and typescript

### Table of content

[Project structure](#project-structure)

[Installation](#installation)

[Technologies used](#technologies-used)

### Project structure

```
dist/
src/
|- assets/ _______________________________ # Application assets
|  |- icons/  _______________________________ # Application icon (svg)
|    |- icon.svg
|  |- images/  _______________________________ # Application images
|    |- image.png
|  |- styles/  _______________________________ # Application styles
|    |- global.scss
|- component/ _______________________________ # Application components
|  |- Layout/  _______________________________ # Layout
|    |- DefaultLayout/
|  |- UI/  _______________________________ # UI
|    |- UIComponent/
|- pages/ _______________________________ # Application pages
|  |- Login/
|    |- index.tsx
|- App.jsx
|- index.jsx
|- pages.ts  _______________________________ # export application pages
|- routes.ts  _______________________________ # declare application routes
webpack.config.js  _______________________________ # config webpack
tsconfig.json ________________________________ # config typescript
|- webpack.common.js _______________________ # common webpack config
```

### Installation

1- Clone the boilerplate repo

`git clone git@github.com:ytran18/react-typescript-template.git`

2-`npm install` to install npm packages

3- start dev server using `npm start` and open [http://localhost:5000](http://localhost:5000).

3- build and bundling your resources for production `npm run build`.

#### Technologies used

- Webpack
- Babel
- React
- react-router-dom
- TailwindCSS
- SASS
- @svgr/webpack
- dotenv-webpack