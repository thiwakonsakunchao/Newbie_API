import express from 'express';
import dotenv from 'dotenv';
import adminRouter from './Router/adminRouter';

dotenv.config();


const app = express();
const port = process.env.APP_PORT;

app.use(express.json());

app.use("/api/admin", adminRouter);

app.listen(port, () => {
    console.log(`Server is running in port ${port}`)
})