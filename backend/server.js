const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const promptRoutes = require("./routes/promptRoutes");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());
app.use("/api/prompts", promptRoutes);

app.get("/", (req, res) => {
  res.send("AI Prompt Library API Running...");
});

const PORT = process.env.PORT || 5000;
//app.use("/api/prompts", promptRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});