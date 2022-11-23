import express from "express";
import cors from 'cors';



const app = express();
app.use(cors());
app.use(express.json());
app.use(rotaCriada1);
app.use(rotaCriada2);

app.listen(process.env.PORT, () => console.log("Server running in port: " + process.env.PORT));