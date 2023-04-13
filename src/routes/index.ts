import express from "express"
import codeRouter from "./codeblockRoute/codeblock.routes"

const router = express.Router();

router.use("/codeblocks", codeRouter)

export default router