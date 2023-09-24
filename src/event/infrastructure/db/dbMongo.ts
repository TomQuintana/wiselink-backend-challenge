import {connect} from 'mongoose';

const conectarDB = async () => {
  try {
    const db = await connect(process.env.MONGO_URI ?? '');
    const url = `${db.connection.host}:${db.connection.port}`;
    console.log(`MongoDB conectado en: ${url}`);

  } catch (error) {
    console.log(`error: ${( error as Error).message}`);
    process.exit(1);
  }
};

export default conectarDB;
