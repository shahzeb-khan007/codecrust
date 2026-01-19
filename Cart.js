function Cart({ cart }) {
  return (
    <div>
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <p key={index}>
            {item.name} - ₹{item.price}
          </p>
        ))
      )}
    </div>
  );
}

export default Cart;
