import customModel from "../models/Custom";
import QRCode  from "qrcode";

export const getQuestion = async (req, res) => {
    const datas = await customModel.find({}).sort({"id": -1});
    const name = await datas[0].name;
    const url = await "/" + datas[0].url;
    return res.render("question", { name, url });
}

export const postQuestion = async (req, res) => {
    const {lastMessage } = req.body;
    const {spawn} = require('child_process');
    const result = spawn('python3', [process.cwd() + '/lastMessage.py', lastMessage]);

    let dataToSend;
    result.stdout.on('data', (data) => {
        console.log(data.toString());
        dataToSend = data.toString();
    })
    console.log("시작" + dataToSend + "종료");
}

export const postQuestionDataForDb = async (req, res) => {
    await customModel.findOneAndUpdate({name:character}, {$set: {username:name, message}});
}
