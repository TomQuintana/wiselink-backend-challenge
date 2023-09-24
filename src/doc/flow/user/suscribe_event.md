```mermaid
sequenceDiagram
actor User Suscribe 
User Suscribe->>user.controller: paso la informacion del user y del id del evento
user.controller->>useUserCase: paso la informacion del user y del id del evento
useUserCase->>mongoRepositoy: busca un usuario por el id y le agegro el id del evento al cual se suscribe
mongoRepositoy->>useUserCase: retorno el usuario con el id del evento agregado
useUserCase->>user.controller: retorna el usuario
user.controller->>User Suscribe: retorno un estado http 200

