import { Request, Response } from "express";

const admin = ["no.1"];


export const getAdmin = async ( req: Request, res: Response ): Promise<void> => {
    res.status(200).json({
        admin
    });
}

export const addAdmin = async (req: Request, res: Response): Promise<void> => {

    const { admin_name } = req.body;
    admin.push(admin_name);

    res.status(200).json({
        admin
    });
}

export const deleteAdmin = async (req: Request, res: Response): Promise<void> => {

        admin.pop();

        res.status(200).json({
            admin
        });
}

export const updateAdmin = async (req: Request, res: Response): Promise<void> => {

    const { id } = req.params;
    const { admin_name } = req.body;

   
    admin[ parseInt(id)] = admin_name;

    res.status(200).json({
        admin
    });

}




