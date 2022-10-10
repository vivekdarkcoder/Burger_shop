import React from 'react'
import { Link } from 'react-router-dom'
import { RiFindReplaceLine } from 'react-icons/ri'
import me from "../../assets/me.jpeg"
const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>
        <article>
          <h4>Burger wala</h4>
          <p>We are Burger wala. The place for most tasty burger on th entire earth</p>
          <p>explore the various type of food</p>
          <Link to="/"><RiFindReplaceLine /></Link>
        </article>
        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Vivek kumar prajapati</h3>

            </div>
            <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, a.</p>
          </article>
        </div>
      </main>

    </section>
  )
}

export default About