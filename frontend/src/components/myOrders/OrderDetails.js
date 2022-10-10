import React from 'react'

const OrderDetails = () => {
  return (

    <section className="OrderDetails">
      <main>
        <h1>order Details</h1>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b>
            {"ajjaa ajjaj jaj"}
          </p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b>
            {"Vivek"}
          </p>

          <p>
            <b>Phone</b>
            {"127862724676"}
          </p>
        </div>
        <div>
          <h1>Status</h1>
          <p>
            <b>Oredr Status</b>
            {"Processing"}
          </p>

          <p>
            <b>Placed At</b>
            {"23-3-2020"}
          </p>

          <p>
            <b>Delivered At</b>
            {"23-3-2028"}
          </p>
        </div>
        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method</b>
            {"Online"}
          </p>

          <p>
            <b>Payment References</b>
            #{"adadadadda"}
          </p>

          <p>
            <b>Paid At</b>
            {"23-3-2028"}
          </p>
        </div>

        <div>
          <h1>Amount</h1>
          <p>
            <b> Items Total</b>
            ₹{20002}
          </p>
          <p>
            <b>shipping charges</b>
            ₹{2002}
          </p>
          <p>
            <b>Tax</b>
            ₹{20}
          </p>
          <p>
            <b>Total Amount</b>
            ₹{20 + 334 + 655}
          </p>

        </div>
        <article>
          <h1>Ordered Items</h1>
          <div>
            <h4>Chees Burger</h4>
            <div>
              <span>{12}</span> x <span>{232}</span>

            </div>
          </div>
          <div>
            <h4>Veg Chees Burger</h4>
            <div>
              <span>{12}</span> x <span>{232}</span>

            </div>
          </div>
          <div>
            <h4>Burger Fries</h4>
            <div>
              <span>{12}</span> x <span>{232}</span>

            </div>
          </div>
          <div>
            <h4 style={{ fontWeight:800}}>Sub Total</h4>
            <div style={{ fontWeight:800}}> ₹{20042}</div>
          </div>
        </article>

      </main>
    </section>
  )
}

export default OrderDetails