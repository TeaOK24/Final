import { Router } from "express";
const router = new Router();
import vegetarians_controller from "../controller/vegetarians_controller.js"


router.post('/', vegetarians_controller.create)

router.get('/', vegetarians_controller.find)

router.delete('/:id', vegetarians_controller.delete)



export default router