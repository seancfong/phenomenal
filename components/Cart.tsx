import Link from 'next/link';
import React from 'react'
import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';

type Props = {}

const Cart = (props: Props) => {
  const { totalPrice, totalQuantities, cartItems, setShowCart, updateCartItemQuantity, onRemove } = useStateContext();

  return (
    <div className="font-raleway fixed right-0 top-0 w-screen h-screen bg-slate-300 bg-opacity-70 z-50 flex">
      {/* Opacity div to click out */}
      <div className="w-full" onClick={() => {setShowCart(false)}}/>

      {/* Cart content */}
      <div className="w-full max-w-[30rem] bg-white h-full flex flex-col p-10 overflow-y-scroll">
        <div className="flex gap-1">
          <span>Your Cart</span>
          <span>({totalQuantities} item{(totalQuantities != 1) ? "s" : ""})</span>
        </div>
        
        {cartItems.length < 1 && (
          <div>
            <h4 className="">
              Your cart is empty.
            </h4>
            <Link href="/">
              <button type="button" onClick={() => setShowCart(false)}>
                <span>Continue shopping</span>
              </button>
            </Link>
          </div>
        )}

        {/* Cart items container */}
        <div>
          { cartItems.length >= 1 && 
          <>
            {cartItems.map((item, index) => (
              <div key={item._id}>
                <img src={urlFor(item?.image[0])} alt="product image" />
                <div className="flex gap-3 items-center">
                  <h4>{item.name}</h4>
                  <div className="border-[2px] bg-[#f5f5f5] border-gray-600 border-opacity-50 rounded-[10px] h-[3rem] items-center flex justify-around">
                    <button className="w-8 text-3xl font-light" onClick={() => {updateCartItemQuantity(item._id, 'dec')}}>-</button>
                    <span className="font-orbitron text-center text-lg tracking-wider">{item.quantity}</span>
                    <button className="w-8 text-3xl font-light" onClick={() => {updateCartItemQuantity(item._id, 'inc')}}>+</button>
                  </div>
                  <div>
                    <button className="" onClick={() => {onRemove(item)}}>remove</button>
                  </div>
                </div>
                
              </div>
            ))}
            <div className="sticky bottom-0 bg-gray-300">
            <div className="flex justify-between">
              <p>Subtotal:</p>
              <p>${totalPrice}</p>
            </div>
            <button type="button" onClick={() => {}}>
              Check out
            </button>
          </div>
          </>
          
          }
        </div>

        
      </div>
    </div>
  )
}

export default Cart