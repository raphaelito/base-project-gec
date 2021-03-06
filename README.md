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
├── font/
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
$ npm install gulp -g
```

__~~Compass~~__

~~Usuarios windows, [Descargar](http://rubyinstaller.org/downloads/) e instalar Ruby~~

~~Luego ejecutar:   $gem install sass compass~~

### Instalar

```bash
$ npm install
```

### Ejecutar

```bash
$ gulp
```

__Notas__
  - En entornos Windows, cambiar en gulpgile.js 'google-chrome'  por 'chrome'
  - En Sublime Text se debe tener instalado el paquete "EditorConfig" para que soporte el archivo de configuración ".editorconfig"
