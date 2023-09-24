```mermaid
sequenceDiagram
actor Event Suscribe 
Event Suscribe->>event.controller: Valido que el Usuario sea USER_ROL o ADMIN_ROL 
event.controller->>validate.service: Interactuo con el servicio validate para validar el token ingresado por el usuario 
validate.service->>event.controller: retorna true o false dependiendo el token
event.controller->>mongoRepositoy: busca el evento solicitado por id
mongoRepositoy->>event.controller: retorno el evento
event.controller->>suscribe.service: el suscribe service valida que el usuario se suscriba a un evento con fecha futura
suscribe.service->>event.controller: retorna los datos del usuario 
useEventCase->>Event: Retorna los datos de un usuario mas el id del evento
event.controller->>useEventCase: en caso de ser false se le informa el usuario que no puede realizar dicha accion
useEventCase->>Event: en caso de ser false se le informa el usuario que no puede realizar dicha accion

