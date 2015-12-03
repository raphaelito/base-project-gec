# Estructura proyecto base
> Propuesta de una estructura de directorios de un proyecto base con JADE, SASS, JS - GULP

### Vista previa


```
Project Root/
│
├── src/
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
```


### Instalar


```bash
$ npm install
```


### Ejecutar

Nota: en entornos Windows, cambiar en gulpgile.js 'google-chrome'  por 'chrome'

```bash
$ gulp
```

