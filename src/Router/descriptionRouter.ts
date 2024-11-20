import { Router } from "express";
import { addDescription, deleteDescription } from "../Controller/descriptionController";


const router = Router();

router.post('/add/:_id', addDescription);

router.delete('/delete/:_id', deleteDescription);

export default router;