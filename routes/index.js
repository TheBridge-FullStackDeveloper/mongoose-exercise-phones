const router = require("express").Router();

router.use('/phones', require("./phone-route"));

module.exports = router;