import { info } from 'node:console';
import { format } from 'node:path';
import winston, { level } from 'winston';
import { json } from 'zod';

const logger = winston.createLogger({
     level: "info",
  format:winston.format.combine(
    winston.format.timestamp({format:"MM-DD-YYYY HH:mm:ss"}),
    winston.format.json(),
    
    
    winston.format.printf(({timestamp,level,message,...data}) =>{
        const output = {
            level,message,data,timestamp,...data
        };
        return JSON.stringify(output);
    })
  ),
  transports: [
    new winston.transports.Console(),
  ]
});

export default logger;

