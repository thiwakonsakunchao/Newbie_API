import { Router } from "express";
import { addQuestionnaire, deleteQuestionnaire, getQuestionnaire } from "../Controller/questionnaireController";
import validate from "../middleware/validationMiddleware";
import questionnaireSchema from "../schema/questionnaireSchema";

const router = Router();

router.get('/get', getQuestionnaire);

router.post('/add', validate(questionnaireSchema), addQuestionnaire);

router.delete('/delete/:_id', deleteQuestionnaire);

export default router;