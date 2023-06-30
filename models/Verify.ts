import mongoose, { Schema, model, models, Document } from "mongoose";
import * as crypto from "crypto";

export interface IVerify extends Document {
    token: string;
    id: string;
}

const verifySchema = new Schema({

    id: {
        type: String,
        required: true,
        unique: true,
    },

    token: {
        type: String,
        required: true,
        unique: true
    },

   
});

export const Verify = models.Verify || model<IVerify>("Verify", verifySchema);
