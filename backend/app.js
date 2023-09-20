import express from "express";
import morgan from "morgan";

const app = express();

// ******* Configuration of App **************
app.use(morgan("dev"));

//  routes configuration [ import and set]

import userRoutes from "./routes/user.route.js";

app.use("/api/user", userRoutes);

export default app;
