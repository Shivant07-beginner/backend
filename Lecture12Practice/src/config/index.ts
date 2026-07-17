import dotenv from 'dotenv';

type serverConfig = {
    PORT : number;
}
type dbconfig = {
    DB_HOST : string,
    DB_USER:string,
    DB_PASSWORD:string,
    DB_NAME:string
}
dotenv.config();
  
export const ServerConfig : serverConfig = {
    PORT : Number(process.env.PORT)
}
export const dbconfig: dbconfig = {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER:  process.env.DB_USER||'root',
    DB_PASSWORD: process.env.DB_PASSWORD ||'root',
    DB_NAME:  process.env.DB_NAME||'Airbnb'
}