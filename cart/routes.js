const router = require("express").Router();
const {
    placeOrder,
    getOrders
} = require("./controller");

router.post("/place-order",placeOrder);
router.get("/get-orders",getOrders);

module.exports = router;