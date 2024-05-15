import { Router } from "express";
const router = new Router();
import russian_cuisine_controller from "../controller/russian_cuisine_controller.js"
import checkMiddleware from "../middleware/checkMiddleware.js";


router.post('/', checkMiddleware('ADMIN'), russian_cuisine_controller.create)

router.get('/', russian_cuisine_controller.find)

router.delete('/:id', russian_cuisine_controller.delete)



export default router