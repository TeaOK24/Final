import { Router } from "express";
const router = new Router();
import sidedishes_controller from "../controller/sidedishes_controller.js"


router.post('/', sidedishes_controller.create)

router.get('/', sidedishes_controller.find)

router.delete('/:id', sidedishes_controller.delete)



export default router