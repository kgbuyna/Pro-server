import express from 'express';
import cors from "cors";
import http from "http";

import { assertDatabaseConnectionOk } from './db/connect.js';
import dotenv from "dotenv";
import authRouter from "./routes/authRouter.js"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import ErrorHandler from './middleware/errorHandler.js';

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);


dotenv.config({
    path: `${__dirname}/.env`
});

const app = express();

const PORT = 3000;

const server = http.createServer(app);

assertDatabaseConnectionOk();

app.use(express.json());
app.use(cors());

app.use("/auth", authRouter)

app.use(ErrorHandler)


server.listen(PORT, ()=> {
    console.log(`listening on port: ${PORT}`);
});