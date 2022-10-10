import React from 'react'
import { Link } from "react-router-dom"
const PaymentSuccess = () => {
    return (

        <section className="payment-success">
            <main>
                <h1>Order Confirmed</h1>
                <p>Order Place Successfully, You can check order Status below.</p>
                <Link to="/myorders">Check Status</Link>
            </main>
        </section>

    )
}

export default PaymentSuccess