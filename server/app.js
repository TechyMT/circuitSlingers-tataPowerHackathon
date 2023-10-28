//docker exec -it postgres psql -U postgres -d ems
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
const cors = require("cors");

const client = require("./db/connect");

let indexRouter = require("./routes/index");
const weatherRouter = require("./routes/predictionRoutes");
const weatherApiRouter = require("./utils/getWeather");

let app = express();
client
  .connect()
  .then(() => console.log("connected"))
  .catch((err) => console.error("connection error", err.stack));

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
// app.use("/weather");
app.use("/api/weather", weatherApiRouter);
module.exports = app;
