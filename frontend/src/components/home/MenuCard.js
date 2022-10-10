import React from 'react'
import { motion } from "framer-motion"


export const MenuCard = ({ ItemNum, burgersource, price, title, handler, delay = 0 }) => {
    return (
        <motion.div className="menu_card"
        initial={{x:"-100%", opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{delay}}
        >
            <div>Item {ItemNum}</div>
            <main>
                <img src={burgersource} alt={ItemNum} />
            </main>

            <h5> ₹{price}</h5>
            <p>{title}</p>

            <button onClick={() => handler(ItemNum)}>Buy Now</button>
        </motion.div>
    )
}
