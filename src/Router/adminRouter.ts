import { Router, Request, Response } from 'express';
import { getAdmin, addAdmin, deleteAdmin, updateAdmin } from '../Controller/adminController';

const router = Router();

router.get("/get", getAdmin);

router.post("/add", addAdmin);

router.delete("/delete", deleteAdmin)

router.patch("/update/:id", updateAdmin)



export default router;




