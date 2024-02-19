import { Router } from "express";
const router = new Router();
import mexico_cuisine_controller from "../controller/mexico_cuisine_controller.js"


router.post('/', mexico_cuisine_controller.create)

router.get('/', mexico_cuisine_controller.find)

router.delete('/:id', mexico_cuisine_controller.delete)



export default router