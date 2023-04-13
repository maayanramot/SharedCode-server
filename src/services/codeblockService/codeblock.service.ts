import { CodeBlockModel } from "../../models/CodeBlockModel";

export const getCodeBlocks = async () => {
    try {
        const codes = await CodeBlockModel.find()
        return codes
    } catch (e) {
        throw Error('Error while try to load codeblocks')
    }
}