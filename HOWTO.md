### 1. Create the project

```sh
ng new gringotts-web
```

```sh
ng serve
```

### 2. Configurar ESLint y Prettier

Doc [link](https://dev.to/dreiv/using-eslint-and-prettier-with-vscode-in-an-angular-project-42ib)

No es necesario añadir el archivo `.vscode/settings.json`. Seguir los siguientes pasos:

```
1. CTRL + SHIFT + P
2. Format Document (in pop-up bar)
3. Select Format Document
4. Select Configure Default Formatter...
5. Select Prettier - Code formatter
```

### 3. Follow the rules for the project structure

Doc [link](https://angular-folder-structure.readthedocs.io/en/latest/overview.html)
/src/app/layers -> Aqui estarán las vistas de la app (ej: login, main...)
ng generate component layers/login
ng generate component layers/accountancy-list
ng generate component layers/movement-list
/src/app/components -> Aqui estarán los componentes reutilizables (inputs, botones...)

ng generate service data/services/auth
ng generate guard data/guards/auth

### 4. Charts

Doc [link](https://apexcharts.com/angular-chart-demos/)

### 5. Angular material

Install [link](https://material.angular.io/guide/getting-started)

[Schematics](https://material.angular.io/guide/schematics)
Ej. navigation:

```sh
ng generate @angular/material:navigation layers/main
```
