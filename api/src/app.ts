import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/search", (req: Request, res: Response) => {
  // TODO implement search
  const results = ["result1", "result2", "result3"];
  res.send(results);
});

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Semantic Search API");
});

app
  .listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })
  .on("error", (err) => {
    throw new Error(err.message);
  });
