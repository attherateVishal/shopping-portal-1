const router = require("express").Router();
const {
    userLogin,
    userRegister
} = require("./controller");
const {userValidationRules, validate} = require('../validator.js');


router.post("/login",userValidationRules('login'), validate, userLogin);
router.post("/register", userRegister);
// router.get("/get/:id")

module.exports = router;