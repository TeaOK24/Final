import { Router } from "express";
const router = new Router();
import russianCuisineRouter from './russianCuisineRouter.js'
import africaCuisineRouter from './africaCuisineRouter.js'
import americaCuisineRouter from './americaCuisineRouter.js'
import breadpastriesRouter from './breadpastriesRouter.js'
import chinaCuisineRouter from './chinaCuisineRouter.js'
import europaCuisineRouter from './europaCuisineRouter.js'
import japanCuisineRouter from './japanCuisineRouter.js'
import koreaCuisineRouter from './koreaCuisineRouter.js'
import mexicoCuisineRouter from './mexicoCuisineRouter.js'
import saladsRouter from './saladsRouter.js'
import sidedishesRouter from './sidedishesRouter.js'
import soupsRouter from './soupsRouter.js'
import spiciesRouter from './spiciesRouter.js'
import vegetariansRouter from './vegetariansRouter.js'
import userRouter from './userRouter.js'

router.use('/russian', russianCuisineRouter);
router.use('/africa', africaCuisineRouter);
router.use('/america', americaCuisineRouter);
router.use('/breadpastries', breadpastriesRouter);
router.use('/china', chinaCuisineRouter);
router.use('/europa', europaCuisineRouter);
router.use('/japan', japanCuisineRouter);
router.use('/korea', koreaCuisineRouter);
router.use('/mexico', mexicoCuisineRouter);
router.use('/salads', saladsRouter);
router.use('/sidedishes', sidedishesRouter);
router.use('/soups', soupsRouter);
router.use('/spicies', spiciesRouter);
router.use('/vegetarians', vegetariansRouter);
router.use('/user', userRouter);


export default router
