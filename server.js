import { config } from "dotenv";
import express from "express";
import dbConnect from "./dbConnect.js";
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import refreshTokenRoutes from './routes/refreshToken.js';

const app = express();

config();
dbConnect();
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api/refreshToken", refreshTokenRoutes);
app.use("/api/users", userRoutes);
const port = process.env.PORT | 8080;

app.listen(port, () => console.log(`Listening on port ${port}...`))