import { useContext } from "react";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartProvider";
import ViewCart from "../ViewCart/ViewCart";

const CartItem = ({ item }) => {
  const { _id, price, name, image,amount } = item;
  console.log(item)
  const{removeCart,increaseAmount,decreaseAmount} = useContext(CartContext)
  
  return (
    //  <div>
    
  //   <div className="flex gap-x-4 py-2 border-b border-gray-200 w-full font-light text-gray-500">
        
  //       <div className="w-full  min-h-[100px] flex justify-between items-center gap-x-4">
  //         <Link to={`/productdetails/${_id}`}>
  //           <img className="max-w-[80px]" src={image} alt="product" />
  //         </Link>
  
  //         <div className="w-full flex flex-col">
  //           <div className="flex justify-betwen mb-2">
  //             <Link to={`/productdetails/${_id}`}>
  //               <h1 className="uppercase text-sm font-medium max-w-[250px] text-primary hover:underline">
  //                 {name}
  //               </h1>
  //             </Link>
  //             </div>
  //             </div>
  
  //             {/* <div onClick={()=>removeCart(_id)} className="text-xl cursor-pointer">
  //               <IoMdClose className="text-gray-500 hover:text-red-700 transition"></IoMdClose>
  //             </div> */}
            

  //           <div className="flex justify-between gap-x-2 h-[36px] text-sm">
              
  //             {/* quqntity */}
              
  //             <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
  
  //                 {/* minus icon */}
  //               <div onClick={()=>decreaseAmount(_id)} className="flex-1 h-full flex justify-center items-center cursor-pointer">
  //                 <IoMdRemove></IoMdRemove>
  //               </div>
  //               <div className="h-full flex justify-center items-center px-2">{amount}</div>
  //               <div onClick={()=>increaseAmount(_id)} className="flex-1 h-full flex justify-center items-center cursor-pointer">
  //                 <IoMdAdd></IoMdAdd>
  //               </div>
  //             </div>
  
  //             {/* subtotal item price */}
  //             <div className="flex-1 flex justify-around items-center font-medium">$ {price}</div>
  
  //             {/* final price */}
  //             <div className="flex-1 flex justify-end items-center text-primary font-medium">{`$ ${parseFloat(item.price*amount).toFixed(2)}`}</div>
  //           </div>
  //         </div>
  //       </div>
     
      
  //  </div>
    <div className="flex justify-between items-center gap-4 gap-x-4 py-2 border-b border-gray-200 w-full font-light text-gray-500">
      <div onClick={()=>removeCart(_id)} className="text-xl cursor-pointer"><IoMdClose className="text-gray-500 hover:text-red-700 transition"></IoMdClose>
   </div> 
      <div className="flex justify-around w-[150px] items-center gap-2 ">
        <img className="w-[50px]" src={image} alt="product"  />
        <p className="lg:text-ms lg:font-semibold ">{name}</p>
      </div>
      <div className="flex flex-1 max-w-[80px] items-center border text-primary font-medium" >
      <div onClick={()=>decreaseAmount(_id)} className="flex-1  flex justify-center items-center cursor-pointer">
        <IoMdRemove></IoMdRemove>
        </div>
        <div className="px-2">{amount}</div>
        <div onClick={()=>increaseAmount(_id)} className="flex-1  flex justify-center items-center cursor-pointer">
        <IoMdAdd></IoMdAdd>
        </div>
      </div>

      {/*product price  */}
      <div className="font-medium">
        $ {price}
        </div>
     {/* subtotal*/}
     <div className="text-primary font-medium">{`$ ${parseFloat(item.price*amount).toFixed(2)}`}</div>
    </div>
  );
};

export default CartItem;
