import React from "react";
import { CiHeart } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import NoProduct from "../NoProduct/Noproduct";

const Cart = ({cart, handleRemoveFromCart, price}) => {
  return (
    <div className="card w-2/5 bg-white shadow-xl p-10 rounded-xl ">
      

    
        <div className="w-full mx-auto bg-base-100 rounded-xl text-center space-y-4">
      
          <div className="flex justify-center items-center gap-2 relative border-b pb-2 border-dotted">
            <CiHeart  className="text-primary text-2xl" />
            <h2 className="text-lg font-semibold ">Favorite Items</h2>
           
          </div>
           <div>
            {
              cart.length === 0 ? (
                <NoProduct></NoProduct>
              ):(
                <div className="py-6  ">
            {
                cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 border-b py-2 border-dotted border-gray-300">
                  <div className="avatar">
                      <div className="w-16 h-16 rounded">
                          <img src={item.image} alt={item.title} />
                      </div>
                  </div>
                  <div className="flex justify-between w-full">
                      <div className="font-semibold text-sm">{item.title}

                       <div className="flex gap-2 text-sm font-normal text-gray-500">
                       <p>Price: {item.currentBidPrice}</p>
                       <p>Binds: {item.bidsCount}</p>
                       </div>
                      </div>
                      
                      <button onClick={()=>handleRemoveFromCart(item)} className="btn bg-transparent border-none text-2xl text-red-700">
                      <RxCross2  style={{ color: 'red' }}/>
                      </button>
                  </div>
                  
              </div>
                ))
            }
            
          </div>
              )
            }
           </div>
    
          

          <div className="border-t pt-4 flex justify-between text-md font-semibold">
            <span>Total bids Amount</span>
            <span>${price}</span>
          </div>
        </div>
      
    </div>
  );
};

export default Cart;
