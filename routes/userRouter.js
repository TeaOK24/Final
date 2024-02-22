import { Router } from "express";
const router = new Router();
import user_controller from "../controller/user_controller.js"
import authMiddleware from "../middleware/authMiddleware.js";


router.post('/registration', user_controller.registration)

router.post('/login', user_controller.login)

router.get('/auth', authMiddleware, user_controller.check)




export default router