const express = require('express')
const router = express.Router();
const controller = require('../controllers/clientController.model')

router.get("/", controller.get_client);

router.post("/", controller.post_client)

router.post("/clientonly", controller.post_clientonly)

router.post("/:clientId", controller.post_booking)

router.get("/:clientId", controller.get_clientById)

//this put method wont update clients bookings
router.put("/:clientId", controller.put_client)

router.put("/:clientId/:bookingId", controller.put_booking)

router.delete("/:clientId", controller.delete_client)

module.exports = router;
