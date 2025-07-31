
import { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import Items from './components/Items/Items'
import Navbar from './components/Navbar/Navbar'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [cart, setCart] = useState([])
  const [price, setPrice] = useState(0)
  const [disabledButtons, setDisabledButtons] = useState({});

  
   
  const handleAddToCart = (item) => {
   const product =[...cart, item]
   setCart(product);
   setDisabledButtons(prev => ({ ...prev, [item.id]: true })); 
   toast.success("Added to cart")
   
   
  }
  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.currentBidPrice, 0);
    setPrice(total)
  }, [cart])



  const handleRemoveFromCart = (item) => {
   
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCart([...cart, item]);
    }
   toast.error("Removed from cart");
  }
  return (
    <>
      <ToastContainer />
      <Navbar></Navbar>
      <Banner></Banner>
      <div className=' bg-[#EBF0F5] py-20'>
      <div className='container mx-auto'>
          <h2 className='text-3xl font-semibold py-3'>Active Auctions</h2>
          <h3 className='pb-4'>Discover and bid on extraordinary items</h3>
        </div>
      <div className='flex container mx-auto gap-3'>
        
        <Items disabledButtons={disabledButtons} handleAddToCart={handleAddToCart}> </Items> 
        <Cart cart={cart} price={price} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      </div>
      </div>
      <Footer></Footer>
    
      
      
    </>
  )
}

export default App
