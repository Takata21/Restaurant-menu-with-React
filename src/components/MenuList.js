import React from "react";
import Item from "./Item";

function MenuList(props) {
  return (
    <div className="section-center">
      <Item menuItems={props.menu} />
    </div>
  );
}

export default MenuList;
