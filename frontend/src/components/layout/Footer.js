import React from 'react'
import { AiFillInstagram, AiFillFacebook, AiFillGithub, AiFillLinkedin} from "react-icons/ai";
export const Footer = () => {
    return (
        <footer>
            <div >
                <h2>Burger Wala</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, ducimus?</p>
                <br />
                <em>We give attention to genuine feedback.</em>
                <strong> All right receive @burgerwala </strong>


            </div>
            <aside>
               <h4>Follow Us</h4>
               <a href="https://www.linkedin.com/"><AiFillLinkedin/></a>
               <a href="https://github.com/"><AiFillGithub/></a>
               <a href="https://www.facebook.com/"><AiFillFacebook/></a>
               <a href="https://www.instagram.com/"><AiFillInstagram/></a>
            </aside>

        </footer>
    )
}
