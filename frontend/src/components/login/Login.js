import React from 'react'
import { motion } from "framer-motion"
import { FcGoogle } from "react-icons/fc";
import { server } from '../../redux/store';
import toast, { Toaster } from "react-hot-toast"

const Login = () => {
    const loginHandler  =() =>{
        console.log('Login')
        window.open(`${server}/googlelogin`, '_self')
        
    }
    return (
        <section className="login">
            <motion.button onClick = {loginHandler}
            inherit={{ y:"-100vh" }}
            animate={{y:0}}
            >
                Login with Google

                <FcGoogle />
            </motion.button>

        </section>
    )
}

export default Login