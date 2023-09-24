```mermaid
sequenceDiagram
actor Event Remove 
Event Create->>event.controller: Valido que el Usuario sea USER_ROL o ADMIN_ROL 
event.controller->>validate.service: Interactuo con el servicio validate para validar el token ingresado por el usuario 
validate.service->>event.controller: retorna true o false dependiendo el token
event.controller->>useEventCase: en caso de ser true se procede a crear el evento 
useEventCase->>mongoRepositoy: elimino el evento previamente buscado por un id
mongoRepositoy->>useEventCase: elimno el evento 
useEventCase->>Event: Retorna un estado 200
event.controller->>useEventCase: en caso de ser false se le informa el usuario que no puede realizar dicha accion
useEventCase->>Event: en caso de ser false se le informa el usuario que no puede realizar dicha accion

