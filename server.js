import express from "express";
import routes from "./routes/postsRoutes.js";

const app = express();
routes(app);
// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});