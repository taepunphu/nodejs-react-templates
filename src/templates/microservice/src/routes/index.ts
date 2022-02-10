import express, { Router } from "express";

const router: Router = express.Router();

const valueRoutes = require("./value.route");

router.get("/status", (req, res) => res.send("OK"));

router.use("/v1/values", valueRoutes);

module.exports = router;
