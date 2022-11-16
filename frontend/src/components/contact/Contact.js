import React, { useState} from 'react'
import { motion } from "framer-motion"
import burger1 from "../../assets/burger-png-33933.png"
// import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { contactUser } from '../../redux/action/contact'
const Contact = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const submitHandler = (e) => {
    e.preventDefault();
    const data ={ name, email, message}
    console.log('data :>> ', data);
    dispatch(contactUser(name, email, message))
  }


  return (
    <section className="contact">
      <motion.form
        initial={{ x: "-100vw", opacity: 0, }}
        animate={{ x: 0, opacity: 1, }}
        transition={{ delay: 0.2 }}
        onSubmit={submitHandler}
      >
        <h2>Contact Us</h2>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <textarea placeholder="Message....." cols="30" row="10" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

        <button type="submit" className="" >Send</button>

      </motion.form>

      <motion.div className="formBorder"
        initial={{ x: "100vw", opacity: 0, }}
        animate={{ x: 0, opacity: 1, }}
        transition={{ delay: 0.2 }}

      >
        <motion.div
          initial={{ y: "-100vw", x: "50%", opacity: 0, }}
          animate={{ y: "-50%", x: "50%", opacity: 1, }}
          transition={{ delay: 1 }}

        >
          <img src={burger1} alt="Burger" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact