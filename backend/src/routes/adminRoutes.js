import express from 'express'
import verifyToken from '../middlewares/verifyToken.js';
import requireAdmin from '../middlewares/requireAdmin.js';
import { deleteUserById, getStats, getUserById, getUsers, updateUserById } from '../controller/adminController.js';

const router = express.Router();

// api/admin/

router.get('/users', verifyToken, requireAdmin, getUsers);
router.get('/user/:id', verifyToken, requireAdmin, getUserById);
router.put('/user/:id', verifyToken, requireAdmin, updateUserById);
router.delete('/user/:id', verifyToken, requireAdmin, deleteUserById);
router.get('/stats', verifyToken, requireAdmin, getStats);


export default router;