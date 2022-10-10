import React from 'react'
import { motion } from "framer-motion"
import me from "../../assets/me.jpeg"
const Founder = () => {
    const options = {
        initial:{x: "-100%", opacity: 0,},
        whileInView: {x: 0, opacity: 1,}
    }
    return (
        <section className='founder'>
            <motion.div {...options}>
                <img src={me} alt="founder" height={200} width={200} />
                <h3>Vivek prajapati</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit sunt architecto illo dicta natus omnis <br />
                    accusamus impedit in. Consectetur, quasi.
                </p>
            </motion.div>

        </section>
    )
}

export default Founder