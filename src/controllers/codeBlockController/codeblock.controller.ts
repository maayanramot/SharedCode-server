import { Request, Response } from "express";
import { getCodeBlocks } from "../../services/codeblockService/codeblock.service";

export const getAllCodeBlocks = async ( req: Request, res: Response ) => {
    try {
        const codes = await getCodeBlocks()
        return res
        .status(200)
        .json(codes)
    } catch (e: any) {
        throw e;
    }
}