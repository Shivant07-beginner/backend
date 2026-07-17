import { timeStamp } from 'node:console';
import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';



const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
           winston.format.timestamp({format:"MM-DD-YYYY HH:mm:ss"}),
           winston.format.json(),
           winston.format.printf(({timestamp,level, message,...data})=>{
            const output = {
                  level,message,data,timestamp,...data
            }
            return JSON.stringify(output)
           })
    ),

    transports:[
       new winston.transports.Console(),
       new DailyRotateFile({
        filename: 'logs/%date%-app.log',
        datePattern: "YYYY-MM-DD-HH",
        maxSize: '20m',
        maxFiles: '14d'
       })
    ]
    
})
export default logger;

 