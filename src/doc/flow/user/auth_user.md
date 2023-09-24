```mermaid
sequenceDiagram
actor User 
User->>user: Valido que el Usuario sea USER_ROL o ADMIN_ROL 
user->>userUserCase: Interactuo con el servicio necesario 
userUserCase->>mongoRepository: se valida el email exista
mongoRepository->>userUserCase: retorna un true o false en base a si el email del usuario existe
userUserCase->>GenerarToken: Genera el token para el usuario
GenerarToken->>userUserCase: Retorna un token
userUserCase->>user: Retorna un token
