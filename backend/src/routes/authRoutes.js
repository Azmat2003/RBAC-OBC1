import express from 'express'
import { getMe, login, logout, register } from '../controller/authController.js';
import verifyToken from '../middlewares/verifyToken.js';

const router = express.Router();

// api/auth/

router.post('/register', register);
router.post('/login', login);
router.post('/logout',verifyToken, logout);
router.get('/me', verifyToken, getMe);

export default router;