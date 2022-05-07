import customModel from "../models/Custom";

export const getQuestion = async (req, res) => {
    const datas = await customModel.find({}).sort({"id": -1});
    const name = await datas[0].name;
    const url = await "/" + datas[0].url;
    return res.render("question", { name, url });
}

export const postQuestion = async (req, res) => {
    const { lastMessage } = req.body;
    const {spawn} = require('child_process');
    const result = spawn('python3', [process.cwd() + '/lastMessage.py', lastMessage]);

    let pororoResult;
    var categoryName;
    
    result.stdout.on('data', (data) => {
        console.log(data.toString());
        pororoResult = data.toString();
        categoryName = makeMessage(pororoResult);
    })
    result.on('close', (code) => {
        return res.json({name:categoryName});
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

export const postQuestionSave = async (req, res) => {
    const {message, userName, name } = req.body;
    console.log(message);
    console.log(userName);
    console.log(name);
    await customModel.findOneAndUpdate({name}, {$set:{username: userName, message}});
}