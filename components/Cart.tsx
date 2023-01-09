import Link from 'next/link';
import React from 'react'
import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import { CiShoppingCart } from "react-icons/ci";
import { BsArrowRightSquare } from "react-icons/bs";
import getStripe from '../lib/getStripe'
import { toast } from 'react-hot-toast';

type Props = {}

const Cart = (props: Props) => {
  const { totalPrice, totalQuantities, cartItems, setShowCart, updateCartItemQuantity, onRemove } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cartItems: cartItems
      })
    });

    if (response.status === 500) return;

    const data = await response.json();

    toast.loading('Redirecting...');

    stripe.redirectToCheckout({ sessionId: data.id });
  }

  return (
    <div className="font-raleway fixed right-0 top-0 w-screen h-screen bg-gray-500 bg-opacity-50 z-50 flex">
      {/* Opacity div to click out */}
      <div className="w-0 md:w-full" onClick={() => {setShowCart(false)}}/>

      {/* Cart content background */}
      <div className="w-full md:w-[80rem] bg-[url('/images/cartbg.jpg')] h-full">
        {/* Cart content container */}
        <div className="w-full h-full backdrop-blur-[1px] bg-slate-200 bg-opacity-20 overflow-y-scroll">
          {/* Title container */}
          <div className="font-orbitron text-2xl text-center pt-5 h-[10vh]">
            <button className="absolute left-10 top-6" onClick={() => {setShowCart(false)}}>
              <BsArrowRightSquare size={25} color="#999999"/>
            </button>
            <h2>
              my cart
            </h2>
          </div>
          
          {/* Empty cart */}
          <div className="flex flex-col items-stretch w-full justify-between h-[90vh]">
            {cartItems.length < 1 && (
              <div className="flex flex-col items-center">
                <CiShoppingCart size={200} color="#BBBBBB"/>
                <h4 className="font-orbitron text-xl">
                  nothing is inside for now.
                </h4>
                <Link href="/">
                  <button type="button" onClick={() => setShowCart(false)}>
                    <span>let's find something to fill it up!</span>
                  </button>
                </Link>
              </div>
            )}

            {/* Cart items container */}
            <div className="px-[15%] sm:px-[20vw] md:px-[10vw]">
              { cartItems.length >= 1 && 
              <>
                {cartItems.map((item, index) => (
                  <div key={item._id} className="flex flex-col gap-3">
                    {/* Image wrapper */}
                    <div className="overflow-hidden border-gray-600 border-opacity-50 border-[2px] rounded-[10px] relative aspect-square">
                      <img src={urlFor(item?.image[0])} alt="product image"/>

                      {/* Image gradient overlay */}
                      <div className="absolute bg-gradient-to-b from-[rgba(204,201,201,0.1)] via-[rgba(104,101,101,0.3)] to-[rgba(73,90,90,0.8)] hover:opacity-50 transition duration-500
                        bg-opacity-50 w-full h-full top-0 left-0 py-5 px-8 flex flex-col justify-end">
                        <p className="font-medium text-2xl text-[#eeeeee]">${item.price}</p>
                        <h4 className="font-orbitron text-5xl tracking-wider text-[#eeeeee]">{item.name}</h4>
                      </div>
                    </div>

                    {/* Quantity editor */}
                    <div className="flex gap-3 items-center">
                      <div className="border-[2px] bg-[#f5f5f5] border-gray-600 border-opacity-50 rounded-[10px] h-[2.5rem] w-[30%] items-center flex justify-around">
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
              </>
              }
            </div>

            {/* Subtotal and checkout */}
            { cartItems.length >= 1 && (
              <div className="sticky gap-3 bottom-0 mt-3 bg-gradient-to-b from-[rgba(200,200,200,0)] to-[rgba(0,0,0,0.3)] flex flex-col px-[15%] sm:px-[20vw] md:px-[10vw] py-5 backdrop-blur-sm">
                <div className="flex items-center justify-between bg-[#EEEEEE] py-2 px-8 border-[2px] border-gray-600 border-opacity-50 rounded-[10px]">
                  <p className="font-orbitron text-lg">total [{totalQuantities} item{(totalQuantities != 1) ? "s" : ""}]:</p>
                  <p>${totalPrice}</p>
                </div>
                <button type="button" onClick={handleCheckout}
                  className="bg-[url('/images/checkoutbg.jpg')] bg-center py-4 bg-cover rounded-[10px] border-[2px] border-gray-600 border-opacity-50">
                  <span className="font-orbitron text-[#eeeeee] text-xl font-medium">check out</span>
                </button>
              </div>
            )}
          </div>
          

        </div>
        
        

        

        
      </div>
    </div>
  )
}

export default Cart