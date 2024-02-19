import { Router } from "express";
const router = new Router();
import china_cuisine_controller from "../controller/china_cuisine_controller.js"


router.post('/', china_cuisine_controller.create)

router.get('/', china_cuisine_controller.find)

router.delete('/:id', china_cuisine_controller.delete)



export default router