import express from "express"
import router from "./routes/route.js";
// import userrouter from "./routes/user.route.js";
import mongoose from "mongoose";
import env from "dotenv"
const app = express();
env.config()
app.use(express.json());
let port=process.env.Port

// app.use("/user", userrouter);
app.use("/", router);
mongoose.connect(process.env.MongoDBLink).then(e => {
    console.log("MongoDB connected")
}).catch((err) => console.log(err));


app.listen( port, (err) => {
    if(err) console.log(err);
    console.log("node is running");
});
