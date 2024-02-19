import { Router } from "express";
const router = new Router();
import salads_controller from "../controller/salads_controller.js"


router.post('/', salads_controller.create)

router.get('/', salads_controller.find)

router.delete('/:id', salads_controller.delete)



export default router