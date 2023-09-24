```mermaid
sequenceDiagram
actor Event Update
Event Create->>event.controller: Valido que el Usuario sea USER_ROL o ADMIN_ROL 
event.controller->>validate.service: Interactuo con el servicio validate para validar el token ingresado por el usuario 
validate.service->>event.controller: retorna true o false dependiendo el token
event.controller->>useEventCase: en caso de ser true se procede a crear el evento 
useEventCase->>mongoRepositoy: modifico el evento previamente buscado por un id
mongoRepositoy->>useEventCase: modifico el evento 
useEventCase->>Event: Retorna el evento modificado 
event.controller->>useEventCase: en caso de ser false se le informa el usuario que no puede realizar dicha accion
useEventCase->>Event: en caso de ser false se le informa el usuario que no puede realizar dicha accion
