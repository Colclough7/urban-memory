import mongoose from "mongoose"
import dotenv  from "dotenv"
dotenv.config()

export const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(process.env.PORT,{
            useNewUrlParser: true
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

