import { Router } from "express";
const router = new Router();
import america_cuisine_controller from "../controller/america_cuisine_controller.js"


router.post('/',  america_cuisine_controller.create)

router.get('/', america_cuisine_controller.find)

router.delete('/:id', america_cuisine_controller.delete)



export default router