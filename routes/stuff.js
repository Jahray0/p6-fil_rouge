//router
const express = require("express");
const router = express.Router();

const stuffCtrl = require('../controllers/stuff')

//ROUTES
router.post("/", stuffCtrl.createThing);
//MODIFICATION
router.put("/:id", stuffCtrl.modifyThing);
//SUPPRESSION
router.delete("/:id", stuffCtrl.deleteThing);
//Get 1
router.get("/:id", stuffCtrl.getOneThing);
//Get All
router.get("/", stuffCtrl.getAllThings);

module.exports = router;