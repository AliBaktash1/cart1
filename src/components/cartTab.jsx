import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { CartItem } from './cartItem';
import { toggleStatusTab } from '../store/cart';

const CartTab = () => {
  const dispatch=useDispatch()
  const carts=useSelector(store=>store.cart.items);
  const statusTab=useSelector(store=>store.cart.statusTab)
  const handleCloseTabCart=()=>{
    dispatch(toggleStatusTab())
  }
  return (
    <div className={`fixed right-0 top-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] transform transition-transform  duration-500 ${statusTab===false ?"translate-x-full":""}`}>
      <h2 className="p-5 text-white text-2xl">
        سبد خرید
      </h2>
      <div className="p-5">
        {carts.map((item,key)=>
          <CartItem key={key} data={item}/>
        )}
      </div>
      <div className="grid grid-cols-2">
        <button className='bg-black text-white' onClick={handleCloseTabCart}>بستن</button>
        <button className='bg-amber-600 text-white'>تسویه حساب</button>
      </div>
    </div>
  )
}

export default CartTab
// 27