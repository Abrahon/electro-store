import { useContext } from "react";
import { SidebarContext } from "../../../context/SidebarProvider";
import { IoMdArrowForward } from "react-icons/io";
import { CartContext } from "../../../context/CartProvider";
import CartItem from "../../CartItem/CartItem";
import { FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import ViewCart from "../../ViewCart/ViewCart";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  console.log(cart);
  const navigate = useNavigate()

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full top-0 fixed bg-white h-full shadow-2xl md:w-[30vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[30px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="">
          <h1 className="uppercase text-sm">Shopping Bag ({itemAmount})</h1>
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer h-8 w-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl"></IoMdArrowForward>
        </div>
      </div>

      {/* cart title */}
      <div className="flex justify-between items-center font-semibold py-2 border-b uppercase">
        <p>Delete</p>
        <p>Product</p>
        <p>Quntiy</p>
        <p>price</p>
        <p>SubTotal</p>
        
      </div>

      <div className="flex flex-col gap-y-1 h-[400px] lg:h-[480px] overflow-y-auto overflow-x-hidden border-b">
        {
        cart.map((item) => (
          <CartItem key={item._id} item={item}></CartItem>
        ))}
      </div>

      <div className="flex flex-col gap-y-1 py-2">
        <div className="flex w-full justify-between items-center">
          <div className="uppercase font-semibold text-green-500">
            <span className="mr-2 ">Toatal: </span>$
            {parseFloat(total).toFixed(2)}
          </div>
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 w-12 h-12 flex justify-center items-center rounded-lg text-xl"
          >
            <FaTrash></FaTrash>
          </div>
          
        </div>
        
        <div className="flex justify-between items-center ">
        <Link to='/viewcart' className="bg-black text-white text-xl font-semibodl px-4 py-2 mt-2 shadow-xl uppercase text-center">Veiw Cart</Link>
        <button onClick={()=>navigate('/checkout')} className="bg-black text-white text-xl font-semibodl px-4 py-2 mt-2 shadow-xl uppercase text-center">Place order</button>
        </div>
        {/* <ViewCart item={item}></ViewCart> */}
      </div>
    </div>
  );
};

export default Sidebar;
