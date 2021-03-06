import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/health", (req, res) => {
  res.json({ status: true, message: "Server is alive!" });
});

app.post("/testAjax", (req, res) => {
  const { hello } = req.body;

  res.json({ status: true, message: hello });
});

app.listen(3001);
