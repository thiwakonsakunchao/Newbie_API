import { Router } from 'express';
import { getUser, addUser  } from '../Controller/userController';

const router = Router();

router.get("/get", getUser);
router.post("/add", addUser);

export default router;



