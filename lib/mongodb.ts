import * as mongoose from "mongoose";

const {
    MONGODB_URI
} = process.env;

if (!MONGODB_URI) {
    throw new Error("No MongoDB URI is present in the .env file")
}

export const connect = async (): Promise<boolean> => {
    try {
        const { connection } = await mongoose.connect(
            MONGODB_URI
        );

        if (
            connection?.readyState === 1
        ) {
            return Promise.resolve( true )
        } else {
            return Promise.resolve( false )
        }
    } catch( e ) {
        return Promise.reject( e )
    }
};