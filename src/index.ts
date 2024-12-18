import express from 'express';
import dotenv from 'dotenv';
import adminRouter from './Router/adminRouter';
import userRouter from './Router/userRouter';
import questionnaireRouter from './Router/questionnaireRouter';
import questionRouter from './Router/questionRouter';
import descriptionRouter from './Router/descriptionRouter';
import mongoose from 'mongoose';

dotenv.config();


const app = express();
const PORT = process.env.APP_PORT;

app.use(express.json());

const mongoURI = "mongodb://rootuser:rootpass@localhost:27018/test?authSource=admin";


app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);
app.use("/api/questionnaire", questionnaireRouter);
app.use("/api/question", questionRouter);
app.use("/api/description", descriptionRouter);

app.listen(PORT, async() => {

    try {
        await mongoose.connect(mongoURI);
        console.log(`Database is connected`);

        console.log(`Server is running in port ${PORT}`)

    } catch (error) {
        console.log(error);
        
    }
    
})