import React from 'react'
import burger1 from "../../assets/burger-png-33933.png"
import { MenuCard } from "./MenuCard"
import toast from "react-hot-toast"
import { useDispatch } from 'react-redux'
const Menu = () => {
  const dispatch = useDispatch()
  const addToCardHandler = (ItemNum) => {
    switch (ItemNum) {
      case 1:
        dispatch({ type: "cheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 2:
        dispatch({ type: "vegCheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 3:
        dispatch({ type: "burgerWithFriesIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;

      default:
        dispatch({ type: "cheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
    }
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
          delay={0.1} />
        <MenuCard
          ItemNum={2}
          burgersource={burger1}
          price={500}
          title="veg cheese burger "
          handler={addToCardHandler}
          delay={0.5} />
        <MenuCard
          ItemNum={3}
          burgersource={burger1}
          price={1800}
          title="cheese burger With Fries"
          handler={addToCardHandler}
          delay={0.8} />
      </div>

    </section>
  )
}

export default Menu