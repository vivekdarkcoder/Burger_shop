import React from 'react';
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import {motion} from "framer-motion"


const Header = ({isAuthenticated}) => {
  console.log('object :>> ', isAuthenticated);
  return (
    <nav>
      <motion.div 
      initial={{x:"-100%"}}
      whileInView={{x:0}}
      >
        <IoFastFoodOutline />
      </motion.div>
      <div>
        <Link className="btn-bg" to="/">Home</Link>
        <Link className="btn-bg" to="/contact">Contact</Link>
        <Link className="btn-bg"to="/about">About</Link>
        <Link to="/cart"><FiShoppingCart/></Link>
        <Link to={isAuthenticated ? "/me" : "/login"}>
        {isAuthenticated ? <FaUser/>:<FiLogIn/>}
         </Link>
      </div>
    </nav>
  )
}

export default Header