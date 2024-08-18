import express from 'express';

import protectRoute from '../middleWare/protectRoute.js';
import { getUsersOfSidebar } from '../controllers/user.controller.js';
const router = express.Router();
router.get("/",protectRoute,getUsersOfSidebar);

export default router;
