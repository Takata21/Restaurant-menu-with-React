import React from "react";

function Header({ menu, handleFilter, categories }) {
  return (
    <header>
      <div className="title">
        <h1>our Menu</h1>
        <div className="underline"></div>
      </div>
      <nav className="menu__filters">
        <ul className="menu__filter-list">
          {categories.map((item, index) => {
            return (
              <li className="menu__filter-item" key={index}>
                {" "}
                <button onClick={() => handleFilter(item)}>{item}</button>{" "}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
