# omnicloud-prueba
## Acerca de
  Esta prueba tecnica de crear un chat en tiempo real se creo en un monolito con las sig tecnologias:
### Front end:
```sh
  NodeJs v20.10
  VueJs v3
  Pinia v2
  socketIo v4
```
en el front end se uso una arquitectura basada en fuatures

### Back end:
```sh
  NodeJs v20.10
  ExpressJs v4
  socketIo v4
```


## Levantamiento de sistema
### Con docker:
Necesario tener docker, despues de clonar el repo ejecutar en la raiz

```sh
docker compose build
```
Una vez creado, leventamos el contanedor

```sh
docker compose up
```
y podremos ver el sistema levantado

### Sin docker:
  cada carpeta, "client", "server", tienen las instrucciones para leventarlas