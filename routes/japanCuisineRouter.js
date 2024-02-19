import { Router } from "express";
const router = new Router();
import japan_cuisine_controller from "../controller/japan_cuisine_controller.js"


router.post('/', japan_cuisine_controller.create)

router.get('/', japan_cuisine_controller.find)

router.delete('/:id', japan_cuisine_controller.delete)



export default router