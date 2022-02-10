import express from "express";

import { getValue } from "../controllers/value.controller";
const router = express.Router();

router.route("/").get(getValue);

module.exports = router;
