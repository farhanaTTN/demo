import express from "express"
const app = express()
const router = express.Router()
import employeeController from "./controllers/controller.js"
import loginController from "./controllers/loginController.js"

router.use("/employees",employeeController)
router.use("/auth",loginController)

export default router;