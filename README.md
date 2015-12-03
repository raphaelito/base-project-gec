# Estructura proyecto base
> Propuesta de una estructura de directorios de un proyecto base con JADE, SASS, JS - GULP

### Vista previa

This set-up makes no assumptions for how distribution HTML files are handled. By default, HTML
files will need to be located in the `dist` directory, however feel free to move to the `src`
folder to utilise Jade templates (or other) to generate HTML.


```
Project Root/
│
├── front/
│   ├── scripts/
│   │   ├── vendor/
│   │   │   └── jquery.js
│   │   └── app.js
│   │
│   ├── styles/
│   │   ├── modules/
│   │   ├── partials/
│   │   ├── vendor/
│   │   └── screen.sass
│   │
│   └── templates/
│       ├── layouts/
│       ├── modules/
│       ├── partials/
│       ├── vendor/
│       └── home.sass
│
├── css/
├── fonts/
├── html/
├── img/
├── js/
├── tmp/
│
├── .editorconfig
├── .gitignore
├── .jshintrc *
├── gulpfile.js
├── package.json
└── README.md
