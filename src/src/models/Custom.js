import mongoose from "mongoose";

const customSchema = new mongoose.Schema({
    name: String,
    url: String,
})

const customModel = mongoose.model("Custom", customSchema);
export default customModel;