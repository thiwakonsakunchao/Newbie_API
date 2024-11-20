import { Request, Response } from "express";
import Questionnaire from "../models/questionnaireModel";
import mongoose from "mongoose";

export const addDescription = async ( req: Request, res: Response ) => {

    const { _id: id } = req.params;
    const { comment } = req.body;

    try {

        const newDescription = {
            comment,
            correct: false,
            _id: new mongoose.Types.ObjectId()
        };

        const updatedDocument = await Questionnaire.findOneAndUpdate(
            { "questions._id": id },
            {$push: { "questions.$.descriptions": newDescription}},
            { new: true }
        );
        
        res.status(200).json({
            message: "Add La Na",
            updatedDocument
        });


    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            message: "Error la na",
            error
       }); 
    }
    

}


export const deleteDescription = async ( req: Request, res: Response ) => {

    const { _id: id} = req.params;

    try {

        const updatedDocument = await Questionnaire.findOneAndUpdate(
            { "questions.descriptions._id": id },
            { $pull: { "questions.$.descriptions": { _id: id }} }, 
            { new: true } 
        );
        
        console.log(updatedDocument);
        
        res.json({ updatedDocument })

    } catch (error) {
        res.status(500).json({
            message: "Error Na",
            error
        })
    }

}




