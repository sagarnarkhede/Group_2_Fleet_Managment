const express = require('express')
const router = express.Router();
const controller = require('../controllers/contact_usController.model');

router.get("/", controller.getContact_us);

router.post("/", controller.postCountact_us)
module.exports = router;
