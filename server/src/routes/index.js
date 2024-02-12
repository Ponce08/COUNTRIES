const { Router } = require("express");
const getRout = require("./getRoutes");
const postRout = require("./postRoutes");
const router = Router();

router.use('/countries', getRout);
router.use('/countries', postRout);

module.exports = router;
