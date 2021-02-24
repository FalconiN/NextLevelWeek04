import { Router } from 'express'
import { SurveysController } from './controllers/SurveyController'
import { UserController } from "./controllers/UserController"

const router = Router()

const userController = new UserController()
const surveysController = new SurveysController()

router.post("/users", userController.create)

router.post("/surverys", surveysController.create)
router.get("/surverys", surveysController.show)


export { router }