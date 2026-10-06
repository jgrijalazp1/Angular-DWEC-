# Primer Proyecto en Angular

## 1. Requisitos previos

- Tener instalado [Node.js](https://nodejs.org/es), lo cual necesitamos para poder ejecutar comandos de `npm`.
- Tener instalado un editor de código como **Visual Studio Code**.
- Tener instalado **Git** para poder clonar repositorios y manejar el control de versiones.
- Tener una cuenta en [GitHub](https://github.com).
- Tener conocimientos básicos de `HTML`, `CSS` y `JavaScript/TypeScript`.

## 2. Instalación de Angular CLI

```bash
npm install -g @angular/cli
```

## 3. Crear un nuevo proyecto Angular

```bash
ng new my-project
cd my-project
code .
```

## 4. Ejecutar el proyecto

```bash
# Podemos ejecutar el proyecto con:
npm start

# O también con:
ng serve
```

## 5. Crear componentes

```bash
# Crear componentes compartidos
ng generate component shared/navbar --skip-tests
ng generate component shared/footer --skip-tests

# Crear componentes de páginas (método abreviado)
ng g c pages/home --skip-tests
ng g c pages/about --skip-tests
ng g c pages/contact --skip-tests
```

## 6. Crear las rutas

Creamos las rutas en el fichero `src\app\app.routes.ts`.

```bash
export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
```

## 7. Enlaces con routerLink

Para crear enlaces entre las páginas, utilizamos el atributo `routerLink` en los elementos `<a>` de la barra de navegación y del pie de página.

```html
<a class="nav-link" routerLink="/home">Inicio</a>
<a class="nav-link" routerLink="/contact">Contacto</a>
<a class="nav-link" routerLink="/about">Acerca de</a>
```

<div style="page-break-after: always;"></div>

## 8. Instalar [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/) y Bootstrap Icons

Desde la terminal del proyecto ejecutamos los siguientes comandos:

```bash
  # Instalamos Bootstrap y Bootstrap Icons:
  npm install bootstrap
  npm install bootstrap-icons@latest

  # Lo mismo se puede hacer en un solo comando abreviado:
  npm i bootstrap bootstrap-icons@latest


```

**Configurar `angular.json`**:

1. En la sección `architect.build.options.styles` añadimos las siguientes rutas:
   "node_modules/bootstrap/dist/css/bootstrap.min.css",
   "node_modules/bootstrap-icons/font/bootstrap-icons.css"
2. Si no existe, creamos la sección `architect.build.options.scripts` con la siguiente ruta:
   "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

**Quedaría tal que así:**

```json
  "styles": [ "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "node_modules/bootstrap-icons/font/bootstrap-icons.css",
              "src/styles.css"
        ],
  "scripts": ["node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"]
```

## 9. Ejemplos de código HTML con Bootstrap

1. **[Navbar](https://getbootstrap.com/docs/5.3/components/navbar/):**
2. Utilizamos **`Zeal`** con la documentación de **`Bootstrap`**.

Creamos una barra de navegación responsive con enlaces a las diferentes páginas del proyecto.
