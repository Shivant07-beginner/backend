import express, { urlencoded } from "express";
import {z} from "zod";
import { ServerConfig } from "./config/index.js";
import pingRouter from "./routers/v1/pinghandler.router.js";
import { genricErrorHandling } from "./middlewares/error.middleware.js";
 

const app = express();
app.use(express.json());
app.use(express.text());
//app.use(express.urlencoded({extended : true}));


 app.use(pingRouter);

 app.use(genricErrorHandling);
 

app.listen(ServerConfig.PORT, () => {
  console.log(`Server is running on ${ServerConfig.PORT}`);

  const obj = {
  name : "sanket",
  age : 27
}; //objext that i have to test

const objSchema = z.object({
  name : z.string(),
   age : z.number().int().positive()
})
const user = objSchema.parse(obj);
console.log(user);




});

 