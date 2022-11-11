import express from 'express';
import {authorizeAdmin, isAuthenticated} from "../middlewares/auth.js"
import {getAdminOrder, placeOrder, processOrder, placeOrderOnline, paymentVerification} from "../controller/order.js";
import {getMyOrder} from "../controller/order.js";
import {getOrderDetails} from "../controller/order.js";

const router = express.Router();

router.post("/createorder",isAuthenticated, placeOrder)
router.post("/createorderonline",isAuthenticated, placeOrderOnline)
router.post("/paymentVerification",isAuthenticated, paymentVerification)
router.get("/myorder",isAuthenticated, getMyOrder)
router.get("/order/:id", isAuthenticated, getOrderDetails)

//Add Admin middleware
router.get("/admin/order", isAuthenticated, authorizeAdmin, getAdminOrder)


router.get("/admin/order/:id", isAuthenticated, authorizeAdmin, processOrder)


export default router;