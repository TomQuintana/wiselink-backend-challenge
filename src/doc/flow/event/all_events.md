```mermaid
sequenceDiagram
actor Event 
Event->>event.controller: Valido que el Usuario sea USER_ROL o ADMIN_ROL 
event.controller->>validate.service: Interactuo con el servicio validate para validar el token ingresado por el usuario 
validate.service->>event.controller: retorna true o false dependiendo el token
event.controller->>useEventCase: en caso de ser true busco todos los eventos
useEventCase->>mongoRepositoy: busco todos los eventos
mongoRepositoy->>useEventCase: Retorna los eventos
useEventCase->>Event: Retorna los eventos con estado publicado y borrador
event.controller->>useEventCase: en caso de ser false busco todos los eventos con estado publicado
useEventCase->>mongoRepositoy: busco todos los eventos
mongoRepositoy->>useEventCase: Retorna los eventos
useEventCase->>Event: Retorna los eventos con estado borrador
