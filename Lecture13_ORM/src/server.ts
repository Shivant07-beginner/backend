import express from 'express'
import { ServerConfig } from './config';
const app = express();
 app.use(express.json());






 


app.listen(ServerConfig.PORT, () => {
    console.log(`Server is running on port ${ServerConfig.PORT}`);
});
