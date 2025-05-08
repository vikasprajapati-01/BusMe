import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";

import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get("/", async (req: Request, res: Response) => {
    res.json({message: "Yooooooooooooooo"});
})

app.listen(1234, () => {
    console.log("Server is 1234");
})