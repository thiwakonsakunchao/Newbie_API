import { Router } from "express";
import { addQuestionnaire, getQuestionnaire } from "../Controller/questionnaireController";

const router = Router();

router.get('/get', getQuestionnaire);

router.post('/add', addQuestionnaire);

export default router;