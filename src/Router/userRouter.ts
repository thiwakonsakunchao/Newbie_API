import { Router } from 'express';
import { getUser, addUser, updateUser, deleteUser  } from '../Controller/userController';

const router = Router();

router.get('/get', getUser);
router.post('/add', addUser);
router.put('/update/:_id', updateUser)
router.delete('/delete/:id', deleteUser)

export default router;



