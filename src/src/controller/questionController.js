import customModel from "../models/Custom";
import QRCode  from "qrcode";

export const getQuestion = async (req, res) => {
    const datas = await customModel.find({}).sort({"id": -1});
    const name = await datas[0].name;
    const url = await "/" + datas[0].url;
    return res.render("question", { name, url });
}

export const postQuestion = async (req, res) => {
    const { name, message, character, lastMessage } = req.body;
    const {spawn} = require('child_process');
    const result = spawn('python3', [process.cwd() + '/lastMessage.py', lastMessage]);
    
    console.log("1번결과물입니다" + result)
    console.log("2번결과물입니다" + result.data.toString('utf8'));

    await customModel.findOneAndUpdate({name:character}, {$set: {username:name, message}});

}
