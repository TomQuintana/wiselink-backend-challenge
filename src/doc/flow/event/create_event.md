```mermaid
sequenceDiagram
actor Event Create 
Event Create->>event.controller: Valido que el Usuario sea USER_ROL o ADMIN_ROL 
event.controller->>validate.service: Interactuo con el servicio validate para validar el token ingresado por el usuario 
validate.service->>event.controller: retorna true o false dependiendo el token
event.controller->>useEventCase: en caso de ser true se procede a crear el evento 
useEventCase->>mongoRepositoy: creo el evento
mongoRepositoy->>useEventCase: Retorna el evento creado
useEventCase->>Event: Retorna el evento creado
event.controller->>useEventCase: en caso de ser false se le informa el usuario que no puede realizar dicha accion
useEventCase->>Event: en caso de ser false se le informa el usuario que no puede realizar dicha accion
