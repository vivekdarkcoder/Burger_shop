import React from 'react'
import burger1 from "../../assets/burger-png-33933.png"
import { MenuCard } from "./MenuCard"

const menu = () => {
  const addToCardHandler = () => {

  }
  return (
    <section id="menu">
      <h1>MENU</h1>
      <div>
        <MenuCard
          ItemNum={1}
          burgersource={burger1}
          price={200}
          title="cheese burger"
          handler={addToCardHandler} 
          delay={0.1}/>
        <MenuCard
          ItemNum={1}
          burgersource={burger1}
          price={200}
          title="veg cheese burger "
          handler={addToCardHandler} 
          delay={0.5}/>
        <MenuCard
          ItemNum={1}
          burgersource={burger1}
          price={200}
          title="cheese burger With Fries"
          handler={addToCardHandler} 
          delay={0.8}/>
      </div>

    </section>
  )
}

export default menu