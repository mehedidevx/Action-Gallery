import React from "react";
import Img from "../../assets/Banner-min.jpg";
const Banner = () => {
  return (
    <div>
      <div>
        <div
          className="hero"
          style={{
            backgroundImage:
                `url(${Img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="hero-overlay"></div>
          <div className=" text-neutral-content text-left w-full">
            <div className="container mx-auto text-left py-30">
              <h1 className=" text-5xl font-bold py-2">Bid on Unique Items from <br />Around the World</h1>
              <p className="py-3">
              Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
              </p>
              <button className="btn btn-primary bg-white text-black rounded-full">Explore Auctions</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
