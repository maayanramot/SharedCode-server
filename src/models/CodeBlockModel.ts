import { Schema } from "mongoose";
import mongoose from "mongoose"

export interface ICodeBlockModel {
    _id: string
    title: string
    content: string
}

export const codeBlockSchema = new Schema<ICodeBlockModel>({
    _id: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true }
})

export const CodeBlockModel = mongoose.model<ICodeBlockModel>('codeblocks', codeBlockSchema)