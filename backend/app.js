import express from "express";
import morgan from "morgan";

const app = express();

// ******* Configuration of App **************
app.use(express.json());
app.use(morgan("dev"));

//  routes configuration [ import and set]

import userRoutes from "./routes/user.route.js";
import AuthRoutes from "./routes/auth.route.js";
app.use("/api/user", userRoutes);
app.use("/api/auth", AuthRoutes);

export default app;
