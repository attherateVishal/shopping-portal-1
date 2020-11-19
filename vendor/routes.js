const router = require("express").Router();
const {
    addVendor
} = require("./controller");
const {userValidationRules, validate} = require('../validator.js');


router.post("/add",userValidationRules('add-vendor'), validate, addVendor);
// router.get("/get/:id")

module.exports = router;