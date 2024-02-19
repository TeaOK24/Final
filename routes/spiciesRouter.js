import { Router } from "express";
const router = new Router();
import spicies_controller from "../controller/spicies_controller.js"


router.post('/', spicies_controller.create)

router.get('/', spicies_controller.find)

router.delete('/:id', spicies_controller.delete)



export default router