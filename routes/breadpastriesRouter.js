import { Router } from "express";
const router = new Router();
import breadpastries_controller from "../controller/breadpastries_controller.js"


router.post('/',  breadpastries_controller.create)

router.get('/', breadpastries_controller.find)

router.delete('/:id', breadpastries_controller.delete)



export default router