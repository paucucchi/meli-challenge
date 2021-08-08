# Servidor - Mercado Libre challenge

## Requerimientos

Asegurate de tener [Node.js](http://nodejs.org/) instalado en tu máquina.

## Correr localmente

```sh
git clone https://github.com/paulacucchi/meli-challenge.git
cd meli-challenge
cd servidor
npm install
npm start
```
La app ahora debería estar ejecutándose en [localhost:3001](http://localhost:3001/)

## Tests

Para correr los test:
```sh
npm run test
```

Para correr el coverage:
```sh
npm run cover
```
# REST API

## GET listado de items

### Request

`GET /api/items?q=:query`

    curl --location --request GET 'http://localhost:3001/api/items?q=:query'

### Response example

```
{
    "status": "success",
    "data": {
        "author": {
            "name": "Paula",
            "lastname": "Cucchi"
        },
        "categories": [
            "Computación",
            "Almacenamiento",
            "Discos y Accesorios",
            "Discos Rígidos y SSDs"
        ],
        "items": [
            {
                "id": "MLA859XXXXXX",
                "title": "Disco Sólido Interno Kingston Sa400m8/120g 120gb",
                "price": {
                    "currency": "ARS",
                    "amount": 3999,
                    "decimals": 2
                },
                "condition": "new",
                "free_shipping": true,
                "picture": "http://www.example.com/image.jpg",
                "state": "Buenos Aires"
            },
            {...},
            {...},
            {...}
        ]
    }
}
```

## GET Detalles de item

### Request

`GET /api/items/:id`

    curl --location --request GET 'http://localhost:3001/api/items/:id'

### Response example

```
{
    "status": "success",
    "data": {
        "author": {
            "name": "Paula",
            "lastname": "Cucchi"
        },
        "categories": [
            "Computación",
            "Almacenamiento",
            "Discos y Accesorios",
            "Discos Rígidos y SSDs"
        ],
        "item": {
            "id": "MLA859XXXXXX",
            "title": "Disco Sólido Interno Kingston Sa400m8/120g 120gb",
            "price": {
                "currency": "ARS",
                "amount": 3999,
                "decimals": 2
            },
            "condition": "new",
            "free_shipping": true,
            "picture": "http://www.example.com/image.jpg",
            "sold_quantity": 5,
            "description": "Con el disco sólido Kingston vas a incrementar la capacidad de respuesta de tu equipo. Invertí en velocidad y eficiencia para el inicio, la carga y la transferencia de datos."
        }
    }
}
```
