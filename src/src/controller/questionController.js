import customModel from "../models/Custom";

export const getQuestion = async (req, res) => {
    const datas = await customModel.find({});
    const name = datas[0].name;
    const url = "/" + datas[0].url;
    return res.render("question", { name, url });
}

export const postQuestion = async (req, res) => {
    const { answer } = req.body;
    
}