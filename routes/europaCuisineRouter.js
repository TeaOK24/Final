import { Router } from "express";
const router = new Router();
import europa_cuisine_controller from "../controller/europa_cuisine_controller.js"


router.post('/', europa_cuisine_controller.create)

router.get('/', europa_cuisine_controller.find)

router.delete('/:id', europa_cuisine_controller.delete)



export default router