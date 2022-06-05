import express from "express";
import cors from "cors";
import { hasConnection } from "../database";

const app = express();

hasConnection();

app.use(cors());




export default app;
