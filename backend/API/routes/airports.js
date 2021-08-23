const express = require('express');
const controller = require('../controllers/airportController.model')
const mongoose = require('mongoose');
const router = express.Router();

router.get("/", controller.get_airport);

router.post("/", controller.post_airport);

router.post("/:airportId", controller.post_center);

router.get("/:airportId", controller.get_airportById);

router.put("/:airportId", controller.put_airport);

router.delete("/:airportId", controller.delete_airport);


module.exports = router;
