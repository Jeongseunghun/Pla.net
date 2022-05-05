import customModel from "../models/Custom";
import QRCode  from "qrcode";

export const getQuestion = async (req, res) => {
    const datas = await customModel.find({}).sort({"id": -1});
    const name = await datas[0].name;
    const url = await "/" + datas[0].url;
    return res.render("question", { name, url });
}

export const postQuestion = async (req, res) => {
    const { name, message, character } = req.body;
    await customModel.findOneAndUpdate({name:character}, {$set: {username:name, message}});

    QRCode.toDataURL("123").then(
        url => {
            return res.json(url);
        }
    )
}
