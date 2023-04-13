import express from "express"
import { getAllCodeBlocks } from "../../controllers/codeBlockController/codeblock.controller"

const codeRouter = express.Router()

codeRouter.get("/", getAllCodeBlocks);

export default codeRouter;