import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Cart, Catalogue, Favorites, Home, Login, MyProducts, Payment, ProductDetails, Profile, Register, NotFound } from './views/indexViews.js'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/myproducts' element={<MyProducts />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/catalogue' element={<Catalogue />} />
          <Route path='/productdetails' element={<ProductDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App
