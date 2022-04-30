import express from "express"
import { getHome } from "../controller/homeController";

const homeRouter = express.Router();

homeRouter.route("").get(getHome);

export default homeRouter;