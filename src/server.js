// Routes <=> Controller <=> Services <=> repositories <=> Database
import express, { json } from "express";
import { connectDb } from "./configs/database.js";
import authRouter from "./routes/authRoutes.js";
import transactionRouter from "./routes/transactionRoutes.js";

const app = express();

connectDb();
app.use(json());
app.use(authRouter);
app.use(transactionRouter);

const port = process.env.PORT;

app.listen(port, () => console.log(`Server listening in port ${port}`));
