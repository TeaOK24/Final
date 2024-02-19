import { Router } from "express";
const router = new Router();
import africa_cuisine_controller from "../controller/africa_cuisine_controller.js"


router.post('/',  africa_cuisine_controller.create)

router.get('/', africa_cuisine_controller.find)

router.delete('/:id', africa_cuisine_controller.delete)



export default router