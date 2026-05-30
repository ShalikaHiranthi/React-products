import React, { useEffect, useState } from "react";

const Fruits = () => {
    const fruits = [
  {
    id: 1,
    name: "Apple",
    color: "Red",
    price: 2.5
  },
  {
    id: 2,
    name: "Banana",
    color: "Yellow",
    price: 1.2
  },
  {
    id: 3,
    name: "Orange",
    color: "Orange",
    price: 2.0
  },
  {
    id: 4,
    name: "Mango",
    color: "Yellow",
    price: 3.5
  },
  {
    id: 5,
    name: "Grapes",
    color: "Purple",
    price: 4.0
  },
  {
    id: 6,
    name: "Pineapple",
    color: "Brown",
    price: 5.0
  },
  {
    id: 7,
    name: "Watermelon",
    color: "Green",
    price: 6.5
  },
  {
    id: 8,
    name: "Strawberry",
    color: "Red",
    price: 4.5
  }
];

const [fruitsData, setfruitsData] = useState(fruits);
const [searchTerm, setsearchTerm] = useState("");

const handleInputChange = (e) => {
    setsearchTerm(e.target.value);
}

const fruitsDataFilter = fruits.filter((fruit) => 
    fruit.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
);

const highlightText = (text, highlight) => {
    if (!highlight) return text;

    const parts = text.split(new RegExp(`(${highlight})`, "gi"));

    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} style={{ backgroundColor: "yellow" }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

return (
    <div>
        <p>Search Term: {searchTerm}</p>
        <input type="text" placeholder="Search" onChange={handleInputChange}/>

        {fruitsDataFilter.map((fruit) => (
        <p key={fruit.id}>
          {highlightText(fruit.name, searchTerm)} : €{fruit.price}
        </p>
      ))}
    </div>
);

};

export default Fruits;