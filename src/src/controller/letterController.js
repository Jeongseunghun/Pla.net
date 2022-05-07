import customModel from "../models/Custom";

export const getLetter = async (req, res) => {
    const datas = await customModel.find({}).sort({"id": -1});
   
    return res.render("letter");
}