import express from "express";
import morgan from "morgan";
import cors from "cors";
import tasksRoutes from "./routes/tasks.routes";
import usersRoutes from "./routes/users.routes";

const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

//middlewares
const corsOptions = {};
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my app" });
});

app.use("/api/tasks", tasksRoutes);
app.use("/api/users", usersRoutes);

export default app;
