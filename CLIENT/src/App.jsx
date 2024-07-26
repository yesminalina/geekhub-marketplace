import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Cart, Catalogue, Favorites, Home, Login, MyProducts, Payment, ProductDetails, Profile, Register, NotFound, AboutUs, Help, Contact } from './views/indexViews.js'
import Navigation from './components/navigation/Navigation.jsx'
import ProductsContextProvider from './context/ProductsContext.jsx'
import CartContextProvider from './context/CartContext.jsx'
import UserContextProvider from './context/UserContext.jsx'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ProductsContextProvider>
          <UserContextProvider>
            <CartContextProvider>
              <Navigation />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/profile/:id' element={<Profile />} />
                <Route path='/my-products' element={<MyProducts />} />
                <Route path='/favorites/:id' element={<Favorites />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/payment' element={<Payment />} />
                <Route path='/catalogue' element={<Catalogue />} />
                <Route path='/product-details/:id' element={<ProductDetails />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/help' element={<Help />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
              <ToastContainer />
            </CartContextProvider>
          </UserContextProvider>
        </ProductsContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
