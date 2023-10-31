import mongoose from "mongoose"

export const connectMongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('connect to mongodb')
    } catch (error) {
        console.log('an error occured while connecting', error)
    }
}
