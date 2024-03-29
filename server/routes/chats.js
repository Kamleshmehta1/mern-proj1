import express from 'express';
import { authenticateToken } from '../utils/middlewares.js';
import { createChat, findChat, findUserChats } from '../controllers/chats.js';

const router = express.Router();

router.use(authenticateToken);

router.post('/', createChat);
router.get('/:userId', findUserChats);
router.get('/find/:firstId/:secondId', findChat);

export default router;
