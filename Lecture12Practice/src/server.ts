import express, { urlencoded } from "express";
import {z} from "zod";
import { ServerConfig } from "./config/index.js";
import pingRouter from "./routers/v1/pinghandler.router.js";
import { genricErrorHandling } from "./middlewares/error.middleware.js";
import logger from "./config/logger.config.js";
import { addCorrelationIdToTheMiddleware} from "./middlewares/Correlation.middleware.js";
 

const app = express();
app.use(express.json());
//app.use(express.urlencoded({extended : true}));

 app.use(addCorrelationIdToTheMiddleware);

 app.use(pingRouter);

 app.use(genricErrorHandling);
 
app.listen(ServerConfig.PORT, () => {
  console.log(`Server is running on ${ServerConfig.PORT}`);
  logger.info("Press ctrlV to stop",{data : "somethind is "});
});

 