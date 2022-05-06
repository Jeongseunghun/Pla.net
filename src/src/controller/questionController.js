import customModel from "../models/Custom";
import QRCode  from "qrcode";
const spawn = require('child_process').spawn;

export const getQuestion = async (req, res) => {
    const datas = await customModel.find({}).sort({"id": -1});
    const name = await datas[0].name;
    const url = await "/" + datas[0].url;
    return res.render("question", { name, url });
}

export const postQuestion = async (req, res) => {
    const { name, message, character, lastMessage } = req.body;

    const result = spawn('python', ['lastMessage.py', lastMessage]);
    result.stdout.on('data', (result) => {
        console.log(result.toString());
    })
    
    await customModel.findOneAndUpdate({name:character}, {$set: {username:name, message}});

}
