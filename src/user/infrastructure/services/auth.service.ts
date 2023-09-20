import jwt from 'jsonwebtoken';

const generarJWT = (email: string, rol: string) => {

  const secretOrPrivateKey = process.env.JWT_WORLD;

  if (!secretOrPrivateKey) {
    console.error('La variable de clave secreta (SECRET_KEY) no está definida en el archivo .env');
    process.exit(1); 
  }

  return new Promise( (resolve, reject) => {
    const payload = {email, rol};
    
    jwt.sign(payload, secretOrPrivateKey, {
      expiresIn: '4h' 
    }, (err, token) => {
      if(err) {
        console.log(err);
        reject('No se pudo generar el token');
      } else {
        resolve(token);
      }
    });

  });
};

export {
  generarJWT
};
