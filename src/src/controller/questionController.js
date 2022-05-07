import customModel from "../models/Custom";
import QRCode  from "qrcode";

export const getQuestion = async (req, res) => {
    const datas = await customModel.find({}).sort({"id": -1});
    const name = await datas[0].name;
    const url = await "/" + datas[0].url;
    return res.render("question", { name, url });
}

export const postQuestion = async (req, res) => {
    const {messageForClient, lastMessage, userName, name } = req.body;
    const {spawn} = require('child_process');
    const result = spawn('python3', [process.cwd() + '/lastMessage.py', lastMessage]);

    let pororoResult;
    result.stdout.on('data', (data) => {
        console.log(data.toString());
        pororoResult = data.toString();
    })
    result.on('close', (code) => {
        var categoryName = makeMessage(pororoResult);
        var realLastMessage = messageForClient + categoryName + "에 관한 걱정은 내가 갖고 사라질게! 마법처럼 모든 일이 사라지거나 해결되지 않더라도, 분명 네 안에 또 한번 맞설 수 있는 힘이 생겼을거야. 널 믿는다 친구!"
        await customModel.findOneAndUpdate({name:name}, {$set: {userName:userName, message: realLastMessage}});
        res.json(categoryName);
    })
}

function makeMessage(pororoResult) {
    var catecory = new Array();
    var percentage = new Array();

    pororoResult = pororoResult.substr(1, pororoResult.length-2);
    pororoResult = pororoResult.split(",");
    for (var i = 0; i < pororoResult.length; i++) { // 배열 arr의 모든 요소의 인덱스(index)를 출력함.
        var tmp = pororoResult[i].split(":");
        catecory.push(tmp[0].replace("'", "").replace(" ", "").replace("'", ""));
        percentage.push(parseFloat(tmp[1]));               
    }
    var maxPercentage = 0;
    var maxIndex = 0;
    for (var i = 0; i < percentage.length; i++) {
        if (maxPercentage < percentage[i]) {
            maxPercentage = percentage[i];
            maxIndex = i;
        }
    }
    return catecory[maxIndex];
}

export const postQuestionDataForDb = async (req, res) => {
    await customModel.findOneAndUpdate({name:character}, {$set: {username:name, message}});
}
