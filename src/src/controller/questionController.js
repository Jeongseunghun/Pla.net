import customModel from "../models/Custom";
import QRCode  from "qrcode";

export const getQuestion = async (req, res) => {
    const datas = await customModel.find({}).sort({"id": -1});
    const name = await datas[0].name;
    const url = await "/" + datas[0].url;
    return res.render("question", { name, url });
}

export const postQuestion = async (req, res) => {
    const {message, lastMessage } = req.body;
    const {spawn} = require('child_process');
    const result = spawn('python3', [process.cwd() + '/lastMessage.py', lastMessage]);

    let pororoResult;
    result.stdout.on('data', (data) => {
        console.log(data.toString());
        pororoResult = data.toString();
    })
    result.on('close', (code) => {
        makeMessage(pororoResult)
    })
}

function makeMessage(pororoResult) {
    pororoResult = pororoResult.subsrt(1, pororoResult.length);
    pororoResult = pororoResult.split(",");
    console.log(pororoResult);
}

export const postQuestionDataForDb = async (req, res) => {
    await customModel.findOneAndUpdate({name:character}, {$set: {username:name, message}});
}
