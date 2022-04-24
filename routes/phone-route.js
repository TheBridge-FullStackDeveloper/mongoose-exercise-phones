const router = require("express").Router();
const PhoneModel = require('../models/Phone');

router.get("/", async (req, res) => {});

router.post('/create', async (req, res) => {});

router.put('/update/:id', async (req, res) => {});

router.delete('/delete/:id', async (req, res) => {})

module.exports = router;