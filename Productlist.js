const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Headphones", price: 2000 },
];

function ProductList({ addToCart }) {
  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <p>
            {product.name} - ₹{product.price}
          </p>
          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
