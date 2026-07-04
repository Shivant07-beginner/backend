import dotenv from 'dotenv';

type serverConfig = {
    PORT : number;
}
dotenv.config();
  
export const ServerConfig : serverConfig = {
    PORT : Number(process.env.PORT)
}