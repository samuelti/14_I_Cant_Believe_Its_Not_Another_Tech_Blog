const router = require('express').Router();

const apiRoute = require("./api")
const homepage = require("./homepage");
const dashboard = require("./dashboard")

router.use("/", homepage);
router.use("/dashboard", dashboard);
router.use("/api", apiRoute);

module.exports=router;