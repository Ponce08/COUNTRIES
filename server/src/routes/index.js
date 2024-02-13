const { Router } = require("express");
const allRoutes = require("./allRoutes");
const router = Router();

router.use('/countries', allRoutes);

module.exports = router;
