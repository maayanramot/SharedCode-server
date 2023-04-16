import express from "express"
import { checkTheRightCode, getAllCodeBlocks } from "../../controllers/codeBlockController/codeblock.controller"

const codeRouter = express.Router()

codeRouter.get("/", getAllCodeBlocks);
codeRouter.post("/", checkTheRightCode);

export default codeRouter;