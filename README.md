<h1 align="center">Challenge realizado para Wiselink</h1>

<h3 align="left">Se genero una api para gestionar la alta y baja de Eventos mediante usuarios. La misma fue realizada utilizando node, typescript y express, por el lado de la arquitectura se utilizo la arquitectura de Domain Driven Design (DDD)</h3>

## Estructura del Respositorio 
``` bash

|--source/
|   -user/
|       -|aplicacion/
|           -| userUseCase.ts
|       -|domain/
|           -| user.entity.ts
|           -| user.value.ts
|           -| user.repository.ts
|       -|infrastructure/
|           -| user.controller/
|           -| user.model/
|           -| user.repository/
|           -| user.routes/
|           -| user.services/
|   -event/
|       -|aplicacion/
|           -| eventUseCase.ts
|       -|domain/
|           -| event.entity.ts
|           -| event.value.ts
|           -| event.repository.ts
|       -|infrastructure/
|           -| event.controller/
|           -| event.model/
|           -| event.repository/
|           -| event.routes/
|           -| event.services/
|   -|server.ts

|-- README.md
```
## Genero un apartado donde se detalla el flujo de cada endpoint
- El mismo fue generado utilizando mermaid --> [Carpeta de los flujos por endpoint](./src/doc/flow) 

![All Events](https://res.cloudinary.com/dmg3cl9dc/image/upload/v1695588014/Screenshot_2023-09-24_at_17.40.01_ixnzhk.png) 

## Endpoint para visualizar la documentacion
``` bash
Get /api/docs
```

![Swagger](https://res.cloudinary.com/dmg3cl9dc/image/upload/v1695587974/Screenshot_2023-09-24_at_17.38.52_tfkmhf.png) 

<h2>Notas</h2>

- Solamente se podra generar un usuario con el rol de administrador si el email contiene la extension de @wiselink.com

- Se deberia tambien validar el email enviando un mail al usuario 

- Solamente los usuario con el rol de administrador pueden:
    - crear un evento
    - editar dicho evento
    - eliminarlo o editarlo
    - ver todos los eventos

- Los usuarios con un rol de usuario solo podran:
    - suscribirse a eventos con el estado de publicado
    - ver eventos con el estado de publicado

