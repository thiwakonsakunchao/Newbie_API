import { Request, Response  } from "express";
import Questionnaire from "../models/questionnaireModel";
import mongoose from "mongoose";

export const addQuestion = async ( req: Request, res: Response ) => {

    const { _id: id } = req.params;
    const { question, descriptions } = req.body;

    try {
        const data = await Questionnaire.findById(id);
        data?.questions.push({question, descriptions});
        
        await data?.save();

        res.status(200).json({
            data
        });
        
    } catch (error) {
       res.status(500).json({
            message: "Error la na",
            error
       }); 
    }
}

export const deleteQuestion = async ( req: Request, res: Response ) => {

    const { _id: id} = req.params;

    try {
        const updatedDocument = await Questionnaire.findOneAndUpdate(
            { "questions._id": id },
            { $pull: { questions: { _id: id } } }, 
            { new: true } 
        );
        
        res.json({ updatedDocument })
    } catch (error) {
        res.status(500).json({
            message: "Error Na",
            error
        })
    }

}


export const duplicateQuestion = async (req: Request, res: Response) => {
    const { _id: id } = req.params;

    try {
        
        const findDocument = await Questionnaire.aggregate([
            { $unwind: "$questions" },
            { $match: { "questions._id": new mongoose.Types.ObjectId(id) } }
        ]);


        const questionToDuplicate = findDocument[0].questions;

        const duplicatedQuestion = {
            ...questionToDuplicate,
            _id: new mongoose.Types.ObjectId()
        };

        const updatedDocument = await Questionnaire.findOneAndUpdate(
            { _id: findDocument[0]._id }, 
            { $push: { questions: duplicatedQuestion } },
            { new: true } 
        );

        res.json({
            message: "Question duplicated successfully",
            data: updatedDocument
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error occurred",
            error
        });
    }
};


