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

    result.stdout.on('data', (data) => {
        console.log(data.toString())
        res.json(data.toString());
    })
    result.stderr.on('data', (data) => {
        console.log(data.toString('utf8'));
    })

    await customModel.findOneAndUpdate({name:character}, {$set: {username:name, message}});

}
