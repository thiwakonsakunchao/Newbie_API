import { Router } from "express";
import { addQuestion, deleteQuestion, duplicateQuestion } from "../Controller/questionController";

const router = Router();

router.post('/add/:_id', addQuestion);

router.delete('/delete/:_id', deleteQuestion);

router.post('/duplicate/:_id', duplicateQuestion)

export default router;