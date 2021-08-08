# Mercado Libre Frontend Challenge

Test práctico para aspirantes al área de front-end de Mercado Libre.

## Requerimientos

Construir las siguientes tres vistas:
* Caja de búsqueda
* Resultados de la búsqueda
* Detalle del producto

Las vistas son navegables de manera independiente y cuentan con su propia url:
* Caja de Búsqueda: `/`
* Resultados de la búsqueda: `/items?search=`
* Detalle del producto: `/items/:id`

En la vista de caja de búsqueda, debería poder ingresar el producto a buscar y al enviar el formulario navegar a
la vista de Resultados de búsqueda, visualizando solo 4 productos. Luego, al hacer clic sobre uno de ellos,
debería navegar a la vista de Detalle de Producto.

Dado un id de producto, debería poder ingresar directamente a la vista de detalle de producto.

## Tecnologías utilizadas

**Cliente:**
- HTML5
- Sass (CSS)
- ReactJS

**Servidor:**
- NodeJS
- Express

## Instalación

Clonar repositorio:
```sh
git clone https://github.com/paulacucchi/meli-challenge.git
cd meli-challenge
```

**Cliente:**

```sh
cd cliente
npm install
npm start
```
La app ahora debería estar ejecutándose en [localhost:3000](http://localhost:3000/)

Para más información leer README de carpeta `cliente`

**Servidor:**

```sh
cd servidor
npm install
npm start
```
La app ahora debería estar ejecutándose en [localhost:3001](http://localhost:3001/)

Para más información leer README de carpeta `servidor`
