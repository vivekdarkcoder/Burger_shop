import { asyncError } from "../middlewares/errorMiddleware.js";
import { User } from "../models/User.js"
import { Order } from "../models/Order.js"
import { Contact } from "../models/Contact.js"
import nodemailer from "nodemailer"
export const myProfile = (req, res, next) => {

    res.status(200).json({
        success: true,
        user: req.user

    })
};
export const logout = (req, res, next) => {
    req.session.destroy((err) => {
        if (err) return next(err);
        res.clearCookie("connect.sid", {
            secure: process.env.NODE_ENV === "development" ? false : true,
            httpOnly: process.env.NODE_ENV === "development" ? false : true,
            sameSite: process.env.NODE_ENV === "development" ? false : "none",
        });
        res.status(200).json({
            message: "Logged Out",
        });
    });
};
export const getAdminUsers = asyncError(async (req, res, next) => {
    const users = await User.find({});
    res.status(200).json({
        success: true,
        users,
    })

})

export const getAdminStats = asyncError(async (req, res, next) => {

    const userCount = await User.countDocuments();
    const orders = await Order.find({})
    const preparingOrders = orders.filter((i) => i.orderStatus === "Preparing")
    const shippedOrders = orders.filter((i) => i.orderStatus === "Shipped")
    const deliveredOrders = orders.filter((i) => i.orderStatus === "Delivered")

    let totalIncome = 0;

    orders.forEach((i) => {
        totalIncome += i.totalAmount;
    })

    const users = await User.find({});
    res.status(200).json({
        success: true,
        userCount,
        orderCount: {
            total: orders.length,
            preparing: preparingOrders.length,
            shipped: shippedOrders.length,
            delivered: deliveredOrders.length
        },
        totalIncome,

    })

})

export const sendMessage = asyncError(async (req, res, next) => {
    const { name, email, message } = req.body;
    const data = { name, email, message }
    await Contact.create(data);
    try {

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        var mailOptions = {
            from:process.env.EMAIL,
            to:  process.env.ADMINEMAIL,
            subject: `Messege from ${name} `,
            text: `${message}, From: ${email}`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        res.status(201).json({
            success: true,
            data,
            message: "Message send Successfully"


        })
    } catch (error) {
        console.log(error)
    };
})