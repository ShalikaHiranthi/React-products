import React from "react";

function ProductList({
  products,
  deleteProduct,
  setEditingProduct,
}) {
  //console.log(products);
  return (
    <div style={{ marginTop: "20px" }}>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{product.name}</h3>

          <p>Price: ${product.price}</p>

          <button
            onClick={() => setEditingProduct(product)}
          >
            Edit
          </button>

          <button
            onClick={() => deleteProduct(product.id)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;