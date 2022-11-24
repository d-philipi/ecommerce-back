import express from "express";
import cors from 'cors';
import usersRoutes from "./routes/usersRoutes.js";


const app = express();
app.use(cors());
app.use(express.json());
app.use(usersRoutes);

app.listen(process.env.PORT, () => console.log("Server running in port: " + process.env.PORT));