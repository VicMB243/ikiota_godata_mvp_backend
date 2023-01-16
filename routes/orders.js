const express = require("express");
const orderActions = require("../controllers/actions/order");
const verify = require("../controllers/validations/verifyToken");

const router = express.Router();

router.get('/', orderActions.getAllOrders);
router.get('/:uID', verify, orderActions.getCurrentUserOrders);
router.get('/:uID', orderActions.getOrder);
router.post('/add', orderActions.addOrder);
router.patch('/update/:uID', orderActions.updateOrder);
router.delete('/:uID', orderActions.deleteOrder);

module.exports = router;