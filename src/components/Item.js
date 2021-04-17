import React from "react";

function Item({ menuItems }) {
  return menuItems.map((item) => {
    const { desc, id, img, price, title } = item;
    return (
      <article className="menu-item" key={id}>
        <img src={img} alt={title} />
        <div className="item-info">
          <div className="item-info-header">
            <h4>{title}</h4>
            <h4 className="price">{price}</h4>
          </div>
          <p className="item-text">{desc}</p>
        </div>
      </article>
    );
  });
}

export default Item;
