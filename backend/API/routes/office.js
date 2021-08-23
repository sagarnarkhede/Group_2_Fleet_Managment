const express = require('express')
const router = express.Router();
const controller = require('../controllers/officeController.model')

router.get("/", controller.get_office);

router.post("/", controller.post_office);
router.get("/:officeId", controller.get_officeById)

router.put("/:officeId", controller.put_office)

router.delete("/:officeId", controller.delete_office)
module.exports = router;