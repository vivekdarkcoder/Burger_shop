import axios from "axios";
import { server } from "../store"

export const createOrder = (
  shippingInfo,
  orderItems,
  paymentMethod,
  itemsPrice,
  taxPrice,
  shippingCharge,
  totalAmount

) => async (dispatch) => {
  try {
    dispatch({
      type: "createOrderRequest",
    });
    const { data } = await axios.post(`${server}/createorder`, {
      shippingInfo,
      orderItems,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingCharge,
      totalAmount
    }, {
      header: {
        "content-type": "application/json"
      },
      withCredentials: true,
    });
    dispatch({
      type: "createOrderSuccess",
      payload: data.message,
    });

  } catch (error) {
    dispatch({
      type: "createOrderFail",
      payload: error.responsed.data?.message,
    });
  }
}

export const paymentVerification =
  (razorpay_payment_id, razorpay_order_id, razorpay_signature, orderOptions) =>
    async (dispatch) => {
      try {
        dispatch({
          type: "paymentVerificationRequest",
        });

        const { data } = await axios.post(
          `${server}/paymentverification`,
          {
            razorpay_payment_id,
            razorpay_order_id,
            razorpay_signature,
            orderOptions,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

        dispatch({
          type: "paymentVerificationSuccess",
          payload: data.message,
        });
      } catch (error) {
        dispatch({
          type: "paymentVerificationFail",
          payload: error.response.data.message,
        });
      }
    };



export const getMyOrders = () => async (dispatch) => {
  try {
    dispatch({ type: "getMyOrdersRequest" });
    const { data } = await axios.get(`${server}/myorder`,{
      withCredentials: true,
    })
     
    dispatch({ type: "getMyOrdersSuccess", payload: data.orders });
  } catch (error) {
    dispatch({ type: "getMyOrdersFail",payload: error.response.data.message });
  }
};


export const getOrderDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: "getOrdersDetailsRequest" });
    const { data } = await axios.get(`${server}/order/${id}`,{
      withCredentials: true,
    })

    dispatch({ type: "getOrdersDetailsSuccess", payload: data.order });
  } catch (error) {
    dispatch({ type: "getOrdersDetailsFailure",payload: error.response.data.message });
  }
};