import "./App.css";
import Header from "./components/Header";
import MenuList from "./components/MenuList";
import data from "./data";
import { useState } from "react";

function App() {
  const [menu, setMenu] = useState(data);

  const filter = (category) => {
    if (category === "all") {
      setMenu(data);
      return;
    }
    const items = data.filter((item) => item.category === category);
    setMenu(items);
  };

  const allCategories = ["all", ...new Set(data.map((item) => item.category))];
  console.log(allCategories);
  return (
    <main className="container">
      <section className="menu-section">
        <Header menu={data} handleFilter={filter} categories={allCategories} />
        <MenuList menu={menu} />
      </section>
    </main>
  );
}

export default App;
