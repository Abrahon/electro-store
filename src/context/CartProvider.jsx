import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [itemAmount, setItemAmount] = useState(0);

  // Fetch cart data from the server when the component mounts
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await fetch("http://localhost:5000/cart");
        if (response.ok) {
          const data = await response.json();
          setCart(data);
        } else {
          console.error("Failed to fetch cart data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCartData();
  }, []);

  // Calculate total whenever the cart changes
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  }, [cart]);

  // Calculate the total item amount whenever the cart changes
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  const addToCart = async (product, _id) => {
    const newItem = { ...product, amount: 1 };
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Product added successfully",
      showConfirmButton: false,
      timer: 1500,
    });

    const cartItem = cart.find((item) => item._id === _id);

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item._id === _id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);

      // Send updated cart item to the server
      await fetch(`http://localhost:5000/cart/${_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...cartItem, amount: cartItem.amount + 1 }),
      });
    } else {
      setCart([...cart, newItem]);

      // Add new cart item to the server
      await fetch("http://localhost:5000/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      });
    }
  };

  const removeCart = async (_id) => {
    const newCart = cart.filter((item) => item._id !== _id);
    setCart(newCart);

    // Remove cart item from the server
    await fetch(`http://localhost:5000/cart/${_id}`, {
      method: "DELETE",
    });
  };

  const clearCart = async () => {
    setCart([]);

    // Clear the cart on the server
    await fetch("http://localhost:5000/cart", {
      method: "DELETE",
    });
  };

  const increaseAmount = (_id) => {
    const cartItem = cart.find((item) => item._id === _id);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item._id === _id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart)
    }
  };

  const decreaseAmount = (_id) => {
    const cartItem = cart.find((item) => item._id === _id);
    if (cartItem) {
      if (cartItem.amount > 1) {
        const newCart = cart.map((item) => {
          if (item._id === _id) {
            return { ...item, amount: cartItem.amount - 1 };
          } else {
            return item;
          }
        });
        setCart(newCart);

        // Update the cart item on the server
        fetch(`http://localhost:5000/cart/${_id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...cartItem, amount: cartItem.amount - 1 }),
        });
      } else {
        removeCart(_id);
      }
    }
  };

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
  };

  return (
    <div>
      <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
    </div>
  );
};

export default CartProvider;
