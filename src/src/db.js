import mongoose from "mongoose";

const connect = mongoose.connect("mongodb://127.0.0.1:27017/n3plus", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ connect to DB");
const handleError = (error) => console.log("DB Error", error);

db.once("open", handleOpen);
db.on("error", handleError);