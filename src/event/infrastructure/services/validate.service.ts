import jwt from 'jsonwebtoken';

interface JwtPayload {
  rol: string
}

export class Validate {
  constructor() {}

  //TODO: cambair nombre de variable headerToken
  rolByToken(headerToken) {
    const token = this.headerToken(headerToken);
    
    try {
      if(token !== undefined) {
        const decoded = jwt.verify(token, 'palabrasupersecreta') as JwtPayload;
        return this.isUserRol(decoded.rol);
        
      }
    } catch (error) {
      console.log(error);
    }

  } 

  isUserRol(rol: string){
    if(rol == 'ADMIN_ROL') {
      return true;
    }
    return false;
  }

  headerToken(tokenHeader: string) {
    const token = tokenHeader.split(' ')[1];
    return token;
  }

  verifyTokenForSuscribe(headerToken) {
    const token = this.headerToken(headerToken);

    try {
      if(token !== undefined) {
        const decoded = jwt.verify(token, 'palabrasupersecreta') as JwtPayload;
        return decoded;

      }
    } catch (error) {
      console.log(error);
    }
  }

}
