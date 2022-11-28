import express from "express";
import cors from 'cors';
import usersRoutes from "./routes/usersRoutes.js";
import cartRoutes from "./routes/cartRoutes.js"


const app = express();
app.use(cors());
app.use(express.json());
app.use(usersRoutes);
app.use(cartRoutes);

app.listen(5000, () => console.log("Server running in port: 5000 "));