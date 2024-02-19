import { Router } from "express";
const router = new Router();
import korea_cuisine_controller from "../controller/korea_cuisine_controller.js"


router.post('/', korea_cuisine_controller.create)

router.get('/', korea_cuisine_controller.find)

router.delete('/:id', korea_cuisine_controller.delete)



export default router