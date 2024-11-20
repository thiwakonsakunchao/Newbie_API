import mongoose, { mongo } from "mongoose";

// const descriptionSchema = new mongoose.Schema({
//     comment: String,
//     correct: Boolean
// });

// const questionSchema = new mongoose.Schema({
//     question: String,
//     descriptions: [descriptionSchema]
// });

const questionnaireSchema = new mongoose.Schema({
    name: String,
    questions: [{
        question: String,
        descriptions: [{
            comment: String,
            correct: Boolean
        }]
    }]
});

const Questionnaire = mongoose.model('Questionnaire', questionnaireSchema);

export default Questionnaire;

