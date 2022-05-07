import express from "express"
import { getLetter } from "../controller/letterController";

const letterRouter = express.Router();

letterRouter.route("").get(getLetter);

export default letterRouter;