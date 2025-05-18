// * Configs

import express from "express";
import type { Express } from "express";
const app: Express = express();
app.use(express.json());
// * ROUTES
import bookRoutes from "./routes/book.routes";
app.use("/book", bookRoutes);

// * EXPORT
export { app };
