import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
const Items = ({handleAddToCart, disabledButtons}) => {
  const [items, setItems] = useState([]);
 
  useEffect(() => {
    fetch("Item.json")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  }, []);
  return (
    <div className="card w-3/5 shadow-xl p-10 rounded-xl  bg-white">
     
      
      <div>
        {
            <div className="mx-auto p-4">
           
            <div className="">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Items</th>
                    <th>Current Bid</th>
                    <th>Time Left</th>
                    <th>Bid Now</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className="flex items-center gap-4">
                          <div className="avatar">
                            <div className="w-16 h-16 rounded">
                              <img src={item.image} alt={item.title} />
                            </div>
                          </div>
                          <div>
                            <div className="font-semibold">{item.title}</div>
                          </div>
                        </div>
                      </td>
                      <td className="text-lg font-medium">${item.currentBidPrice}</td>
                      <td>{item.timeLeft}</td>
                      <td>
                      <button
                      onClick={() => handleAddToCart(item)}
                      disabled={disabledButtons[item.id]}
                      className={` bg-transparent border-none text-2xl ${
                        disabledButtons[item.id] ? '!cursor-not-allowed opacity-50' : 'cursor-pointer'
                      }`}
                    >
                      {disabledButtons[item.id] ? (
                        <FaHeart color="red" className="bg-transparent " />
                      ) : (
                        <CiHeart className="bg-transparent"/>
                      )}
                    </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
}
        
      </div>
        
    </div>
  );
};

export default Items;
