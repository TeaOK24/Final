import { Router } from "express";
const router = new Router();
import africa_cuisine_controller from "../controller/africa_cuisine_controller.js"
import checkMiddleware from "../middleware/checkMiddleware.js";


router.post('/', checkMiddleware('ADMIN'),  africa_cuisine_controller.create)

router.get('/', africa_cuisine_controller.find)

router.delete('/:id', checkMiddleware('ADMIN'), africa_cuisine_controller.delete)



export default router