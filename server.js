const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");

dotenv.config();

mongoose
.connect(process.env.MONGO_URL, { useNewUrlParser: true })
.then((res) => console.log("Connected"))
.catch((error) => console.log(error));

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);

app.listen(3001, () => {
  console.log(`Your server has started`);
});
