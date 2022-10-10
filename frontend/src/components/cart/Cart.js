import React from 'react'
import burger1 from "../../assets/burger-png-33933.png"
import {Link} from "react-router-dom"
const CartItem = ({ value, title, img, increment, decrement }) => (

    <div className="cardItem">
        <div>
            <h4>{title}</h4>
            <img src={img} alt="Item" />
        </div>
        <div>
            <button onClick={decrement}>-</button>
            <input type="number" readOnly value={value} />
            <button onClick={increment}>+</button>
        </div>
    </div>
)

const Cart = () => {
    const increment = (item) => { };
    const decrement = (item) => { };
    return (
        <section className="cart">
            <main>
                <CartItem
                    title={"choose Burger"}
                    img={burger1}
                    value={0}
                    increment={() => increment(1)}
                    decrement={() => decrement(1)}
                />
                <CartItem
                    title={"veg cheese burger"}
                    img={burger1}
                    value={0}
                    increment={() => increment(2)}
                    decrement={() => decrement(2)}
                />
                <CartItem
                    title={"cheese burger With Fries"}
                    img={burger1}
                    value={0}
                    increment={() => increment(3)}
                    decrement={() => decrement(3)}
                />
                <article>
                    <div>
                        <h4>Sub Total</h4>
                        <p>₹{2000}</p>
                    </div>
                    <div>
                        <h4>Tax</h4>
                        <p>₹{2000 * 18 / 100}</p>
                    </div>
                    <div>
                        <h4>Shipping Charges</h4>
                        <p>₹{200}</p>
                    </div>
                    <div>
                        <h4>Total</h4>
                        <p>₹{2000 + 2000 * 18 / 100 +200}</p>
                    </div>
                    <Link to="/shipping">Checkout</Link>
                </article>

            </main>

        </section>
    )
}

export default Cart