import customModel from "../models/Custom";

var name = null;
var url = null;

export const getCustomPage = async (req, res) => {
    return res.render("test");
}

export const postCustomPage = async (req, res) => {
    if (req.body.name !== undefined) {
        name = req.body.name;
    }
    if (req.file !== undefined) {
        url = req.file.path;
    }
    if (name !== null && url !== null) {
        await customModel.create({
            name,
            url,
        })
        name = null;
        url = null;
        res.redirect("/question");
    }
}