import express from "express"
import { getCustomPage, postCustomPage } from "../controller/CustomController";
import { uploadFiles } from "../middlewares";

const customRouter = express.Router();

customRouter.route("").get(getCustomPage).post(uploadFiles.single("file"), postCustomPage);

export default customRouter;