import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createOrder, paymentVerification  } from "../../redux/action/order"
import toast from "react-hot-toast"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { server } from '../../redux/store';

const ConfirmOrder = () => {
    const [paymentMethod, setPaymentMethod] = useState("");
    const [disabledBtn, setDisabledBtn] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { cartItems, subTotal, tax, shippingCharge, total, shippingInfo } = useSelector((state) => state.cart);


    const { message, error } = useSelector((state) => state.order);


    const submitHandler = async(e) => {
        e.preventDefault();
        setDisabledBtn(true);
        if (paymentMethod === "COD") {
            dispatch(
                createOrder(
                    shippingInfo,
                    cartItems,
                    paymentMethod,
                    subTotal,
                    tax,
                    shippingCharge,
                    total
                )
            );

        } else {
            
            const {
                data: { order, orderOptions },
            } = await axios.post(
                `${server}/createorderonline`,
                {
                    shippingInfo,
                    orderItems: cartItems,
                    paymentMethod,
                    itemsPrice: subTotal,
                    taxPrice: tax,
                    shippingCharge,
                    totalAmount: total,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );

            const options = {
                key: "rzp_test_xy80LdG3YhQiDt",
                amount: order.amount,
                currency: "INR",
                name: "MBA Burger Wala",
                description: "Burger App",
                order_id: order.id,
                handler: function (response) {
                    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
                        response;

                    dispatch(
                        paymentVerification(
                            razorpay_payment_id,
                            razorpay_order_id,
                            razorpay_signature,
                            orderOptions
                        )
                    );
                },

                theme: {
                    color: "#9c003c",
                },
            };
            const razorpay = new window.Razorpay(options);
            razorpay.open();
        }
    };
    useEffect(() => {
        if (message) {
            toast.success(message)
            // dispatch({ type:"clearMessage"})
            dispatch({ type: "emtyState" })
            navigate("/paymentsuccess")
        }
        if (error) {
            toast.error(error)
            dispatch({ type: "clearError" })
            setDisabledBtn(false);

        }

    }, [dispatch, error, message, navigate])



    return (
        <section className="confirmOrder">
            <main>
                <h1>Confirm Order</h1>
                <form onSubmit={submitHandler}>

                    <div>
                        <label htmlFor="">Cash on Delivery</label>
                        <input type="radio" name="payment" required onChange={() => setPaymentMethod("COD")} />
                    </div>
                    <div>
                        <label htmlFor="">Online</label>
                        <input type="radio" name="payment" required onChange={() => setPaymentMethod("Online")} />
                    </div>

                    <button disabled={disabledBtn} type="submit">Place Order</button>
                </form>
            </main>

        </section>
    )
}

export default ConfirmOrder