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
    var catecory = new Array();
    var percentage = new Array();

    pororoResult = pororoResult.substr(1, pororoResult.length-2);
    pororoResult = pororoResult.split(",");
    for (var i = 0; i < pororoResult.length; i++) { // 배열 arr의 모든 요소의 인덱스(index)를 출력함.
        tmp = pororoResult[i].split(":");
        catecory.push(tmp[0].replace("'", "").replace(" ", ""));
        percentage.push(parseFloat(tmp[1]));               
    }
    console.log(catecory);
    console.log(percentage);
}

export const postQuestionDataForDb = async (req, res) => {
    await customModel.findOneAndUpdate({name:character}, {$set: {username:name, message}});
}
