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

export const updateUser = async ( req: Request, res: Response ): Promise<void> => {
    try {

        const { _id: id } = req.params;
        const { username, email, age } = req.body;
        const user = { username, email, age };
        const data = await User.find()
        
        const result = await User.findByIdAndUpdate(id, user, { new: true });


        res.status(200).json({
            result
        });
        
        
    } catch (error) {
        console.log(error);
        
    }
}

export const deleteUser = async ( req: Request, res: Response ): Promise<void> => {
    try {
        
        console.log(req.params);
        
        const { _id: id } = req.params;

        console.log(id);
        

        
        const result = await User.findByIdAndDelete(id, { new: true });

        res.status(200).json({
            result
        });
    } catch (error) {
        console.log(error);
        
    }
}