import React, { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import Fruits from "./components/Fruits";
import { Phonenum } from "./components/Phonenum"

function App() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  // Add Product
  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  // Delete Product
  const deleteProduct = (id) => {
    const updatedProducts = products.filter(
      (product) => product.id !== id
    );

    setProducts(updatedProducts);
  };

  // Edit Product
  const editProduct = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id
        ? updatedProduct
        : product
    );

    setProducts(updatedProducts);
    setEditingProduct(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Phonenum></Phonenum>
      <Fruits></Fruits>
      <h1 className="bg-red-500 mt-10">Product CRUD App</h1>

      <ProductForm
        addProduct={addProduct}
        editProduct={editProduct}
        editingProduct={editingProduct}
      />

      <ProductList
        products={products}
        deleteProduct={deleteProduct}
        setEditingProduct={setEditingProduct}
      />
    </div>
  );
}

export default App;