import React, { useContext } from 'react';
import { CartContext } from '../../context/CartProvider';
import { useNavigate } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';

const ViewCart = () => {
  const { cart, itemAmount, total } = useContext(CartContext);
  const navigate = useNavigate();

  if (!Array.isArray(cart) || cart.length === 0) {
    return (
      <div className="container mx-auto w-[800px] my-10 text-center">
        <h1 className="uppercase text-4xl font-semibold my-4">Your Cart</h1>
        <p className="text-gray-500">Your cart is currently empty.</p>
        <button
          className="bg-black text-white font-bold py-2 px-4 rounded-lg mt-4"
          onClick={() => navigate('/')}
        >
          Back to Products
        </button>
      </div>
    );
  }

  const handlePlaceOrder = () => {
    alert('Order Placed!');
  };

  return (
    <div className="container mx-auto w-[800px] my-10">
      <h1 className="uppercase text-4xl font-semibold text-center my-4">Your Cart</h1>

      <div className="flex justify-between items-center bg-gray-100 py-6 border-b">
        <h2 className="uppercase text-sm">Shopping Bag ({itemAmount})</h2>
      </div>

      {/* Cart Titles */}
      <div className="flex justify-between items-center font-semibold py-2 border-b uppercase">
        <p>Delete</p>
        <p>Product</p>
        <p>Quantity</p>
        <p>Price</p>
        <p>Subtotal</p>
      </div>

      {/* Cart Items */}
      <div className="flex flex-col gap-y-1 overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => (
          <CartItem key={item._id} item={item} />
        ))}
      </div>

      {/* Total Price and Actions */}
      <div className="flex flex-col gap-y-1 py-2">
        <div className="flex w-full justify-between items-center font-bold">
          <span className="uppercase text-green-500">Total:</span>
          <span>${parseFloat(total).toFixed(2)}</span>
        </div>

        <div className="flex justify-between items-center gap-4">
          <button
            className="bg-black text-white font-bold py-2 px-4 rounded-lg mt-4 w-full"
            onClick={() => navigate('/checkout')}
          >
            Proceed to Checkout
          </button>
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded-lg mt-4 w-full"
            onClick={() => navigate('/')}
          >
            Back to Products
          </button>
        </div>

        <button
          className="bg-green-500 text-white py-2 px-4 rounded-lg mt-4 w-full"
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default ViewCart;
