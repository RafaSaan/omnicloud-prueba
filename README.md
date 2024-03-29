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
en el front end se uso una arquitectura basada en features,
la comunicacion de informacion de los chats en el cliente, fue a partir de la store con Pinia,
props y eventos personalizados entre componentes padres e hijos 

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

## Descripcion del proyecto:
  Para testear el chat en tiempo real, una vez levantado el sistema, tendremos esta vista inicial,
  en la cual hay una lista de usuarios, podremos acceder al chat con ese usuario al dar click en
  el chat que deseemos.
  Una vez abierto el chat podemos iniciar la conversacion.
  ![Captura de pantalla 2024-03-05 123129](https://github.com/RafaSaan/omnicloud-prueba/assets/83631990/44c994c1-9dcd-45c9-8ebb-02fb6815316a)


  Existen dos formas de comunicarse en la segunda pestaña hacia el chat inicial: 

  La primera es abriendo en otra pestaña en la ruta raiz del poryecto http://localhost:5173/ ,
  y desde aqui se podra responder hacia el otro chat


  la segunda es, en otra pestaña abriremos el sistema en la ruta http://localhost:5173/guest, en esta seccion podremos responder como si fueramos el usuario al cual le mandamos mensaje en una primera instancia y veremos los mensajes en ambos chats
  ![Captura de pantalla 2024-03-05 123144](https://github.com/RafaSaan/omnicloud-prueba/assets/83631990/5209d20e-1697-466f-a468-82369d896625)


  Cualquiera de las dos formas funciona, las dos guardan los chats en el store de pinia y en su respectivo chat, usar la que ustedes gusten

  
