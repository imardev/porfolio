import express from "express";
import cors from "cors";
import "dotenv/config";
import routerProjects from "./routes/projects.routes.js";
import routerTecnologias from "./routes/tecnologias.routes.js";
import helmet from "helmet";
import { generalLimiter } from "./middleware/rateLimit.js";

const app = express();
const port = process.env.PORT || 4444;

const corsOptions = {
  origin: ["https://ismartin.com", "http://127.0.0.1:3000"],
};

app.disable("x-powered-by");
app.use(helmet());
app.use(express.json({ limit: "10kb" }));
app.use(cors(corsOptions));

app.use(generalLimiter);
app.get("/", (req, res) => {
  res.status(200).json("Servidor funcionando");
});

app.use("/api/proyectos", routerProjects);

app.use("/api/tecnologias", routerTecnologias);

app.listen(port, () => {
  console.log(`Backend del porfolio funcionando en el puerto ${port}`);
});
