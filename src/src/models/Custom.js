import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
autoIncrement.initialize(mongoose.connection);

const customSchema = new mongoose.Schema({
    id: Number,
    name: String,
    url: String,
    username: String,
    message: String,
})

customSchema.plugin(autoIncrement.plugin,{ 
    model : 'Custom', 
    field : 'id', 
    startAt : 1, 
    increment : 1
});

const customModel = mongoose.model("Custom", customSchema);
export default customModel;