import React, { useEffect, useState } from "react";

function ProductForm({
  addProduct,
  editProduct,
  editingProduct,
}) {
  const [userInputs, setUserInputs] = useState({
    name: '',
    price: ''
  });

  useEffect((e) => {
    if (editingProduct) {
      setUserInputs({
        name: editingProduct.name,
        price: editingProduct.price,
      });
    }
  }, [editingProduct]);

  const handleChange = (e) => {

    const name = e.target.name;
    const value = e.target.value;
    setUserInputs(values => ({ ...values, [name]: value }))

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(userInputs);

    if (!userInputs.name || !userInputs.price) {
      alert("Please fill all fields");
      return;
    }

    if (editingProduct) {
      editProduct({
        id: editingProduct.id,
        name: userInputs.name,
        price: userInputs.price
      });
    } else {
      addProduct({
        id: Date.now(),
        name: userInputs.name,
        price: userInputs.price
      });
    }

    setUserInputs({
      name: '',
      price: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-6">
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={userInputs.name}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2"
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={userInputs.price}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2"
      />

      <button type="submit" className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
        {editingProduct ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default ProductForm;