import React, { useEffect, useState } from "react";

function ProductForm({
  addProduct,
  editProduct,
  editingProduct,
}) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name);
      setPrice(editingProduct.price);
    }
  }, [editingProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !price) {
      alert("Please fill all fields");
      return;
    }

    if (editingProduct) {
      editProduct({
        id: editingProduct.id,
        name,
        price,
      });
    } else {
      addProduct({
        id: Date.now(),
        name,
        price,
      });
    }

    setName("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button type="submit">
        {editingProduct ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default ProductForm;