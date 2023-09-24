<h1 align="center">Challenge realizado para Wiselink</h1>

<h3 align="left">Se genero una api para gestionar la alta y baja de Eventos mediante usuarios. La misma fue realizada utilizando node, typescript y express, por el lado de la arquitectura se utilizo la arquitectura de Domain Driven Design (DDD)</h3>

## Repository Structure
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

## Endpoint para visualizar la documentacion
``` bash
Get /api/docs
```

## Genero un apartado donde se detalla el flujo de cada endpoint
[Flujo](./src/doc/flow) 
