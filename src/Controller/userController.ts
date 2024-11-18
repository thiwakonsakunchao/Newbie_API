import { Request, Response } from "express";
import User from "../schema/userSchema";

export const getUser = async ( req: Request, res: Response ): Promise<void> => {
    try {
        const data = await User.find()
        res.status(200).json({
            data
        });
    } catch (error) {
        console.log(error);
        
    }
}

export const addUser = async ( req: Request, res: Response ): Promise<void> => {
    try {
        const { username, email, age } = req.body;
        const user = new User({ username, email, age});
        await user.save();
        res.send(user);
    } catch (error) {
        console.log(error);
        
    }
}
