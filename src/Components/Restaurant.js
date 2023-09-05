import React, { useState } from "react";
import "./style.css";
import Menu from './MenuApi'
import MenuCard from './MenuCard'
import Navbar from './NavBar'

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

console.log(uniqueList);

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={uniqueList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;

