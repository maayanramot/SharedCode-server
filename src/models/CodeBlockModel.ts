import { Schema } from "mongoose";
import mongoose from "mongoose"

export interface ICodeBlockModel {
    title: string
    content: string
}

export const codeBlockSchema = new Schema<ICodeBlockModel>({
    title: { type: String, required: true },
    content: { type: String, required: true }
})

export const CodeBlockModel = mongoose.model<ICodeBlockModel>('codeblocks', codeBlockSchema)