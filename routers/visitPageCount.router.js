const express = require('express');
const router = express.Router();
const visitPageCountController = require("../controllers/visitPageCount.controller");

router.put('/', visitPageCountController)

module.exports = router