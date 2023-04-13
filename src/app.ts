import express from "express";
import bodyParser from "body-parser"
import cors from "cors"
import { connectToDB } from "./connection";

const app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cors())

//app.use(router)

app.listen(8000, () => console.log("Listening on https://Localhost:8000"));
connectToDB()