import React, { createContext, useContext, useState } from 'react';

import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
	const [ showCart, setShowCart ] = useState(false);
	const [ cartItems, setCartItems ] = useState([]);
	const [ totalPrice, setTotalPrice ] = useState(0);
	const [ totalQuantities, setTotalQuantities ] = useState(0);
	const [ qty, setQty ] = useState(1);

	let foundProduct;
	let index;

	const onAdd = (product, quantity) => {
		const checkProductInCart = cartItems.find((item) => item._id === product._id);
		
		setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
		setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

		if (checkProductInCart) {
			// console.log(`${product.name} found in cart`);
			const updatedCartItems = cartItems.map((cartProduct) => {
				return {
					...cartProduct,
					quantity: cartProduct.quantity 
						+ ( (cartProduct._id === product._id) ? quantity : 0 )
				}
			})

			setCartItems(updatedCartItems);
		} else {
			product.quantity = quantity;

			setCartItems([...cartItems, { ...product }]);
		}
		
		toast.success(`${qty} ${product.name} added to cart.`);
		setQty(1);
	}

	const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice -foundProduct.price * foundProduct.quantity);
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
    setCartItems(newCartItems);
  }

	const updateCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);

    if (value === 'inc') {
      setCartItems(cartItems.map((item) => {
				// found the item to increase quantity
				if (item._id === id) {
					return { ...foundProduct, quantity: foundProduct.quantity + 1 };
				}
					return item;
			}));
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1);

    } else if (value === 'dec') {
      if (foundProduct.quantity > 1) {
        setCartItems(cartItems.map((item) => {
					// found the item to increase quantity
					if (item._id === id) {
						return { ...foundProduct, quantity: foundProduct.quantity - 1 }
					}
						return item
				}));
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1);

      }
    }
  }

	const incQty = () => {
		setQty((prevQty) => prevQty + 1)
	}

	const decQty = () => {
		setQty((prevQty) => {
			if (prevQty - 1 < 1) return 1;
			
			return prevQty - 1
		})
	}

	return (
		<Context.Provider
			value={{
				showCart,
				setShowCart,
				cartItems,
				totalPrice,
				totalQuantities,
				qty,
				incQty,
				decQty,
				onAdd,
				updateCartItemQuantity,
				onRemove
			}}
		>
			{children}
		</Context.Provider>
	)
}

export const useStateContext = () => useContext(Context)