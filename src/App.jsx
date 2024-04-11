import React from 'react';
import Productmain from './pages/Product_main';
import Seeproduct from './pages/Seeproduct';
import { Order } from './pages/Order'; // Use named import
import Addtoformcart from './pages/Addtoformcart';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Cardpay from './pages/Cardpay'
import  CashD from './pages/CashD'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Productmain />} />
     <Route path='/Seeproduct' element={<Seeproduct />} />
      <Route path='/Order' element={<Order/>} />
      <Route path='/Addtoformcart' element={<Addtoformcart/>}/>
      <Route path='/Cardpay' element={<Cardpay/>}/>
      <Route path='/CashD' element={<CashD/>}/>
    </Routes>
    </BrowserRouter>
    </>
   );
}

export default App;
