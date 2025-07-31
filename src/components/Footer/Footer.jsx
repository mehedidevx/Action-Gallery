import React from "react";

const Footer = () => {
  return (
    <div>
      <div>
        <footer className="footer footer-horizontal footer-center  p-10">
          <aside>
            <h2 className="text-xl">Auction<span className="text-yellow-300 ">Gallery</span></h2>
            <p className="font-bold">
           Bid. Win. Own
              <br />
              
            </p>
            <p className="space-x-4"><span>Home</span> <span>Auctions</span>  <span>Categories</span><span> How to works</span></p>
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
          </aside>
         
        </footer>
      </div>
    </div>
  );
};

export default Footer;
