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

  //const [fruitsData, setfruitsData] = useState(fruits);
  const [searchTerm, setsearchTerm] = useState("");

  const useDebounce = (text, delay) => {
    const [decounce, setDebounce] = useState(text);

    useEffect(() => {
      const timer = setTimeout(() => {
        setDebounce(text)
      }, delay);

      return () => {
        clearTimeout(timer);
      };
    }, [text, delay]);

    return decounce;
  };

  const debouncedText = useDebounce(searchTerm, 1000);

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
        <span key={index} style={{ backgroundColor: "#dbe2f9" }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <p>Search Term: {debouncedText}</p><br />
      <input type="text" placeholder="Search" onChange={handleInputChange} className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />

      {fruitsDataFilter.map((fruit) => (
        <p key={fruit.id} className="mt-5">
          {highlightText(fruit.name, searchTerm)} : €{fruit.price}
        </p>
      ))}
    </div>
  );

};

export default Fruits;