import { CodeBlockModel, ICodeBlockModel } from "../../models/CodeBlockModel";

export const getCodeBlocks = async () => {
    try {
        const codes = await CodeBlockModel.find()
        return codes
    } catch (e) {
        throw Error('Error while try to load codeblocks')
    }
}

export const checkCodeBlock = async (codeToCheck: ICodeBlockModel) => {
    const { _id, title, code, missingCode } = codeToCheck;
    try {
        const rightCode = await CodeBlockModel.findOne({ code });
        if (!rightCode) {
            throw new Error('The wrong code / code missing');
        }
        return rightCode;
    } catch (e) {
        console.error(e); 
        return null; 
    }
}