import { useLoaderData } from "react-router-dom";
import "./App.css";
import CartCoffee from "./Components/CartCoffee/CartCoffee";
import { useState } from "react";

function App() {
  const coffeesLoader = useLoaderData();
  const [coffees, setCoffees] = useState(coffeesLoader);

  return (
    <div className="px-28">
      <h1 className="text-6xl text-center text-sky-400">
        Coffee {coffees.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {coffees.map((coffee) => (
          <CartCoffee
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CartCoffee>
        ))}
      </div>
    </div>
  );
}

export default App;
