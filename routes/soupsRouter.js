import { Router } from "express";
const router = new Router();
import soups_controller from "../controller/soups_controller.js"


router.post('/', soups_controller.create)

router.get('/', soups_controller.find)

router.delete('/:id', soups_controller.delete)



export default router