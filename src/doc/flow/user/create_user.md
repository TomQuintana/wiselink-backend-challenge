```mermaid
sequenceDiagram
actor User 
participant create 

User->>register: Registro un Usuario que puede ser USER_ROL o ADMIN_ROL 
register->>userUserCase: Interactuo con el servicio necesario 
userUserCase->>UserService: se valida tanto la extension del email como el rol que solicita para registrar 
UserService->>userUserCase: retorna un true o false en base a si el user se puede registar como ADMIN_ROL o USER_ROL
userUserCase-->mongoRepository: Genera el nuevo usuario
mongoRepository-->userUserCase: Retorna el usuario creado
userUserCase-->register: Retorna el usuario creado

