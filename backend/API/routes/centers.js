const express = require('express');
const controller = require('../controllers/centerController.model')
const mongoose = require('mongoose');
const router = express.Router();

router.get("/", controller.get_center);

router.post("/", controller.post_center);

router.post("/:centerId", controller.post_car);

router.get("/:centerId", controller.get_centerById);

router.put("/:centerId", controller.put_center);

router.put("/:centerId/:carId", controller.put_car );

router.delete("/:centerId", controller.delete_center);


module.exports = router;
