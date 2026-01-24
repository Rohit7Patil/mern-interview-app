import express from "express";
import path from "path";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";

const app = express();

const __dirname = path.resolve();

app.get("/health", (_, res) => {
  res.status(200).json({ msg: "API is up & running..." });
});

if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () =>
      console.log(`Server is running on port ${ENV.PORT}`),
    );
  } catch (error) {
    console.error("Error starting server\n", error);
  }
};

startServer();

export default app;
