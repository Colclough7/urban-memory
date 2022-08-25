import mongoose from "mongoose"
import dotenv  from "dotenv"
dotenv.config({ path: 'MONGO_URL' })

export const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}



