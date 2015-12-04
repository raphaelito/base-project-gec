# Estructura proyecto base
> Propuesta de una estructura de directorios de un proyecto base con JADE, SASS, JS - GULP

### Vista previa


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
```


### Requisitos

__gulp__

```bash
npm install gulp -g
```

__Compass__

[Descargar](http://rubyinstaller.org/downloads/) e instalar Ruby para Windows

Luego ejecutar:
```bash
gem install sass compass
```

### Instalar

```bash
$ npm install
```

### Solo para usuarios Windows es necesario...

```bash
$ npm install
```

### Ejecutar

Nota: en entornos Windows, cambiar en gulpgile.js 'google-chrome'  por 'chrome'

```bash
$ gulp
```
