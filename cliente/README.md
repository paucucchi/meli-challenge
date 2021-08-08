# Cliente - Mercado Libre challenge

Este proyecto se bootstrapeo con [Create React App](https://github.com/facebook/create-react-app).

# Tabla de Contenido
1. [Requerimientos](#requerimientos)
2. [Instalación](#instalación)
3. [Estructura de carpetas](#estructura-de-carpetas)
4. [Componentes](#componentes)
    1. [Search Bar](#search-bar)
    2. [List of items](#list-of-items)
    3. [Item Details](#item-details)
    4. [Breadcrumb](#breadcrumb)
    5. [Page not found](#page-not-found)

## Requerimientos

Se necesita tener `node` y` npm` instalados globalmente en su máquina.
## Instalación

```sh
git clone https://github.com/paulacucchi/meli-challenge.git
cd meli-challenge
cd cliente
npm install
npm start
```

La aplicación ahora debería estar ejecutándose en [localhost:3000](http://localhost:3000/).

La **URL del servidor** es por defecto: [localhost:3001](http://localhost:3001/). El puerto se puede cambiar desde un archivo `.env` configurando la variable: `REACT_APP_BE_URL`.
Copiar el archivo .env.example y agregar la url deseada.
```sh
cp .env.example .env
```

## Estructura de carpetas
* **assets**:
  - **images**: imagenes utlizadas en la aplicación
  - **styles**: todos los archivos de estilos (sass en este proyecto) se agrupan en esta carpeta para un fácil acceso a los estilos. Cada componente cuenta con su archivo scss y además está el archivo variables que se importa en los componentes para utilizar variables genéricas como por ejemplo la paleta de colores.
* **components**: están todos los componentes de la app, dentro de la misma carpeta se subdivide en:
  - **common**: componentes en común que son utilizados en más de 1 vista y pueden ser necesario en futuras vistas
  - **partials**: son subcomponentes de componentes principales (vistas), es una parte parcial de un componente
  - Los componentes principales se encuentra en la raíz de la carpeta components
* **services**: aquí están todas las request que se realizan a una api externa para poder obtener la data
* **utils**: funciones útiles para toda la aplicación y puede ser reutilizadas
* **src / raíz**: dentro de la raíz de la carpeta principal src se encuentran los archivos index y App que inician la aplicación

## Componentes

## Search Bar

La barra de búsqueda es un componente que se encuentra en el header de la app y se utiliza en todas las vistas.
El usuario puede ingresar un texto de búsqueda para obtener un listado de productos.

**Validaciones:**
- Si el usuario trata de realizar una búsqueda sin ingresar un texto va a visualizar un mensaje solicitándole que ingrese un texto para poder realizar la búsqueda

## List of items

El listado de items es una vista principal que contiene el componente Breadcrumb que va a mostrar el filtro de categorias, y además el listado de los 4 productos principales que fueron encontrados en la búsqueda.

**Validaciones:**
- Si no se encontró ningún producto para la búsqueda que realizar el usuario se va a mostrar un mensaje información que no se han hayado producto para esa busqueda.

**Extra:**
- Se muestra un componente de Loader durante el proceso de request a la api externa para obtener el listado de items

## Item Details

Al hacer click en uno de los item del listado previo, el usuario va a poder ver una vista con los detalles especificos de ese producto. Se puede acceder a esta vista sin necesidad de realizar una búsqueda, ingresando a la ruta correspondiente con un ID de producto valido.

**Validaciones:**
- Si no se encontró ninguna información del producto se va a mostrar un mensaje información al respecto.
- Si la request a la descripción del producto no devuelve la data se le mostrara un mensaje al usuario en el container de descripción que la descripción no esta disponible (permitiendo igualmente ver la demás información del producto)

**Extra:**
- Se muestra un componente de Loader durante el proceso de request a la api externa para obtener los detalles del producto

## Breadcrumb

Es un componente que forma parte de las vista del listado de producto y del detalle de producto. La misma arma un filtro de categorías según la respuesta de la api externa.

En el caso del listado de producto se va a mostrar el path de categorias encontrado. En el caso que no haya un filtro especifico encontrado, se mostrara el path de categorias de la cateogria que obtuvo más resultados.

Para la vista de detalle de producto se muestra el path de categorias correspondiente a dicho producto.

**Validaciones:**
- Si la response de la data de categorias no devuelve información, no se mostrara ningún filtro.

**Extra:**
- La categoria final del path es resaltado con bold para mejor visibilidad

## Page not found

En casos donde el usuario intente ingresar a una ruta de la app que no corresponde se le mostrara un mensaje generico de Página no encontrada.
