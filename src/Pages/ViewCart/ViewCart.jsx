import React, { useContext } from 'react'
import { CartContext } from '../../context/CartProvider';
import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import CartItem from '../CartItem/CartItem';
import { IoMdArrowForward } from 'react-icons/io';
// import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io'

const ViewCart = () => {
    const {cart,itemAmount,total} = useContext(CartContext)
    const navigate = useNavigate()
    if (!Array.isArray(cart)) {
        return <div>Error: Cart data is not available</div>;
      }
      const totalPrice = cart.reduce((total, product) => total + product.price, 0).toFixed(2);
      const handlePlaceOrder = () => {
        alert('Order Placed!');
      };
    
  return (
    <div className="container mx-auto w-[800px] my-10">
      <h1 className='uppercase text-4xl font-semibold text-center my-4'>your cart</h1>
      {/* <div className="bg-white p-8 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="border-b py-2">
                  {item.name} - ${item.price}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-lg font-semibold">Total: ${totalPrice}</p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded mt-4 w-full"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </>
        )}
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded mt-4 w-full"
          onClick={() => navigate('/')}
        >
          Back to Products
        </button>
      </div> */}
      <div className="flex justify-center items-center bg-gray-100">
      <div className="flex items-center justify-between py-6 border-b">
        <div className="">
          <h1 className="uppercase text-sm">Shopping Bag ({itemAmount})</h1>
        </div>
        
        </div>
      </div>

      {/* cart title */}
      <div className="flex justify-between items-center font-semibold py-2 border-b uppercase">
        <p>Deletre</p>
        <p>Product</p>
        <p>Quntiy</p>
        <p>price</p>
        <p>SubTotal</p>
        
      </div>

      <div className="flex flex-col gap-y-1  overflow-y-auto overflow-x-hidden border-b">
        {
        cart.map((item) => (
          <CartItem key={item._id} item={item}></CartItem>
        ))}
      </div>

      <div className="flex flex-col gap-y-1 py-2">
        <div className="flex w-full justify-between items-center font-bold">
            <span className="uppercase text-green-500">Toatal: </span>$
            {parseFloat(total).toFixed(2)}
        </div>
        
        <div className="flex justify-between items-center ">
        <button
              className="bg-black text-white font-bold py-2 px-4 rounded-lg mt-4 w-full"
              onClick={()=>navigate('/checkout')}
            >
              Proceed to checkout
            </button>
            
        </div>
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded-lg mt-4 w-full"
          onClick={() => navigate('/')}
        >
          Back to Products
        </button>
       
      </div>
    </div>
    
  )
}

export default ViewCart