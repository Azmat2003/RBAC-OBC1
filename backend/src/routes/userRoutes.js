import express from 'express'
import verifyToken from '../middlewares/verifyToken.js';
import { deleteProfile, getProfile, updatePassword } from '../controller/userController.js';

const router = express.Router();

// api/user/

router.get('/profile', verifyToken, getProfile);
router.put('/profile', verifyToken, updatePassword);
router.delete('/profile', verifyToken, deleteProfile);

export default router;