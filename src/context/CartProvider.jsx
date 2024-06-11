
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

const CartProvider = ({children}) => {

    const[cart,setCart] = useState([])
    const [total,setTotal] = useState(0)
    const[itemAmount,setItemAmount] = useState(0)

    useEffect(()=>{
        const total = cart.reduce((accumolator, currentItem)=>{
            return accumolator + currentItem.price * currentItem.amount;
        },0)
        setTotal(total)
        console.log(total)
    },)

    useEffect(()=>{
        if(cart){
            const amount = cart.reduce((accumulator,currentItem)=>{
                return accumulator+currentItem.amount;
            }, 0)
            setItemAmount(amount)
        }

    },[cart])

    const addToCart = (product,_id)=>{
        const newItem = {...product, amount:1}
        console.log(newItem)
        //find the product if the product is already cart

        const cartItem = cart.find(item=>{
            return item._id === _id;
            
        })
        console.log(cartItem)

        if(cartItem){
            const newCart = [...cart].map(item=>{
                if(item._id === _id){
                    return {...item, amount: cartItem.amount+1}
                }
                else{
                    return item
                }
            })
            setCart(newCart)
        }
        else{
            setCart([...cart,newItem])
        }
    }
    console.log(cart)

    const removeCart = (_id)=>{
        const newCart = cart.filter((item)=>{
            return item._id !==_id
            
        })
        setCart(newCart)

    }
    const clearCart = ()=>{
        setCart([])
    }

    const increaseAmount = (_id)=>{
        const cartItem  = cart.find((item)=>item._id === _id)
        addToCart(cartItem , _id)
        // console.log('increase amount')
    }

    const decreaseAmount = (_id)=>{
        const cartItem = cart.find(item=>{
            return item._id === _id
        })
        if(cartItem){
            const newCart = cart.map((item)=>{
                if(item._id === _id){
                    return {...item, amount: cartItem.amount-1}
                }
                else{
                    return item
                }   
            });
            setCart(newCart)
            
        }
        if(cartItem.amount<2){
            removeCart(_id)
        }
    }
    

    const cartInfo = {
        cart,
        setCart,
        addToCart,
        removeCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        total,
        itemAmount,
        
    }

    return (
        <div>
            <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
        </div>
    );
};

export default CartProvider;

