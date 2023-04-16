import { Request, Response } from "express";
import { checkCodeBlock, getCodeBlocks } from "../../services/codeblockService/codeblock.service";
import { ICodeBlockModel } from "../../models/CodeBlockModel";

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

export const checkTheRightCode = async ( req: Request, res: Response ) => {
    try {
        const code: ICodeBlockModel | null = await checkCodeBlock(req.body)
        return res
        .status(200)
        .json(code)
    } catch (e: any) {
        throw e;
    }
}