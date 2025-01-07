const express = require("express");
const { connect } = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

const { userRoute } = require("./routes/userRoute");
app.use("/user", userRoute);

async function connectToDb() {
  try {
    await connect(process.env.MONGO_URL);
    console.log("MongoDB is connected");
  } catch (error) {
    console.error("MongoDB is connected failed", error.message);
  }
}
connectToDb();

app.get("/", function (req, res) {
  res.status(200).send("Hello World");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("app is listening");
});
