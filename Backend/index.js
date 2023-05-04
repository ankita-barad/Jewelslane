require("dotenv").config();
const express = require("express");
const { userRoute } = require("./routes/user.route");

const { connection } = require("./db");

const app = express();

app.use(express.json());

app.use("/user", userRoute);

app.listen(process.env.PORT, async () => {
  await connection;
  console.log("server started");
});
