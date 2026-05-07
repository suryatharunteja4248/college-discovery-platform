const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const collegeRoutes = require("./routes/collegeRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "College Discovery API Running",
  });
});

app.use("/api/colleges", collegeRoutes);

module.exports = app;