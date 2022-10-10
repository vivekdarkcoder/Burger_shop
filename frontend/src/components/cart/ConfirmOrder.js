import React from 'react'

const confirmOrder = () => {
    return (
        <section className="confirmOrder">
            <main>
                <h1>Confirm Order</h1>
                <form action="">

                    <div>
                        <label htmlFor="">Cash on Delivery</label>
                        <input type="radio" name="payment" />
                    </div>
                    <div>
                        <label htmlFor="">Online</label>
                        <input type="radio" name="payment" />
                    </div>

                    <button type="submit">Place Order</button>
                </form>
            </main>

        </section>
    )
}

export default confirmOrder