import { Request, Response } from "express";
import Questionnaire from "../schema/questionnaireSchema";

export const getQuestionnaire = async ( req: Request, res: Response ): Promise<void> => {
    try {
        const data = await Questionnaire.find();
        res.status(200).json({
            message: "Successful na",
            data
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error na",
            error
        }) 
    }
}

export const addQuestionnaire = async ( req: Request, res: Response ): Promise<void> => {
    const { name, questions } = req.body;
    console.log(req.body);
    
    try {
        const questionnaire = new Questionnaire ({ name, questions});
        await questionnaire.save();
        res.status(200).json({
            message: "Successfully Insert Na",
            questionnaire
        });
    } catch (error) {
        res.status(500).json({
            message: "Error Na",
            error
        });
    }
}