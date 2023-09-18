import dotenv from 'dotenv';
import Server from "./infrastrucutre/services/server";

dotenv.config();

const server = new Server();
server.listen();
