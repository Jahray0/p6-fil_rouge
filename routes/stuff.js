//router
const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config')

const stuffCtrl = require('../controllers/stuff')

//Get All
router.get("/", auth, stuffCtrl.getAllThings);
//ROUTES
router.post("/", auth, multer, stuffCtrl.createThing);
//Get 1
router.get("/:id", auth, stuffCtrl.getOneThing);
//MODIFICATION
router.put("/:id", auth, stuffCtrl.modifyThing);
//SUPPRESSION
router.delete("/:id", auth, stuffCtrl.deleteThing);


module.exports = router;