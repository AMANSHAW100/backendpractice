import express from "express"

import { create_user } from "../controller/controller.js"

const router = express.Router();

router.post("/registeruser", create_user)

export default router;