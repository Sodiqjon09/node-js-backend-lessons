const express = require("express");
const { connect } = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

const { userRoute } = require("./routes/userRoute");
app.use("/user", userRoute);

const { carRoute } = require("./routes/carRoute");
app.use("/car", carRoute);

const { eduRoute } = require("./routes/eduRoute");
app.use("/edu", eduRoute);

const { houseRoute } = require("./routes//houseRoute");
app.use("/house", houseRoute);

async function connectToDb() {
  try {
    await connect(process.env.MONGO_URL);
    console.log("MongoDB is connected");
  } catch (error) {
    console.error("MongoDB is connected failed", error.message);
  }
}
connectToDb();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("app is listening");
});
