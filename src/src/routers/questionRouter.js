import express from "express"
import { getQuestion, postQuestion } from "../controller/questionController";

const questionRouter = express.Router();

questionRouter.route("").get(getQuestion).post(postQuestion);

export default questionRouter;