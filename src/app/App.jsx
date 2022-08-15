import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import axios from 'axios'

import Main from '../pages/main/Main'
import Favorites from '../pages/favorites/Favorites'
import Orders from '../pages/orders/Orders'
import AppContext from '../context/AppContext'
import Header from '../components/header/Header'
import Layout from '../components/layout/Layout'
import Drawer from '../components/drawer/Drawer'

import addItem from '../services/addItem'
import removeItem from '../services/removeItem'

const App = () => {
   const [loading, setLoading] = useState(true)
   const [cartOpen, setCartOpen] = useState(false)
   const [cartItems, setCartItems] = useState([])
   const [sneakersItems, setSneakersItems] = useState([])
   const [favoritesItems, setFavoriteItems] = useState([])
   const [ordersItems, setOrdersItems] = useState([])

   const {Provider} = AppContext

   const _CART_API = 'https://62fa6964ffd7197707ec0bc0.mockapi.io/cart'
   const _ITEMS_API = 'https://62fa6964ffd7197707ec0bc0.mockapi.io/items'
   const _FAVORITES_API = 'https://62fa6964ffd7197707ec0bc0.mockapi.io/favorites'
   const _ORDERS_API = 'https://62fa6964ffd7197707ec0bc0.mockapi.io/orders'

   useEffect( async () => {
      setLoading(true)

      try {
         await axios.get(_ITEMS_API)
         .then(res => setSneakersItems(res.data))
      } catch(e) {
         console.error(e)
      }
      
      try {
         await axios.get(_CART_API)
         .then(res => setCartItems(res.data))
      } catch(e) {
         console.error(e)
      }

      try {
         await axios.get(_FAVORITES_API)
         .then(res => setFavoriteItems(res.data))
      } catch(e) {
         console.error(e)
      }

      setLoading(false)
   }, [])

   //CART

   const onCartOpen = () => {
      setCartOpen(true)
   }

   const onCartClose = () => {
      setCartOpen(false)
   }

   const onCartCloseByOverlay = (event) => {
      if (event.target.classList.contains('overlay')) {
         onCartClose()
      }
   }

   const onAddCartItem = (id) => {
      addItem(sneakersItems, setCartItems, id, _CART_API)
   }

   const onRemoveCartItem = (id) => {
      removeItem(setCartItems, id, _CART_API)
   }

   //FAVORITE

   const onAddFavoriteItem = (id) => {
      addItem(sneakersItems, setFavoriteItems, id, _FAVORITES_API)
   }

   const onRemoveFavoriteItem = (id) => {
      removeItem(setFavoriteItems, id, _FAVORITES_API)
   }

   //CART PRICE

   const calcTotalPrice = () => {
      let total = 0
      cartItems.forEach(item => {
         total += item.price
      })
      return total
   }

   const calcTax = () => {
      return Math.ceil(calcTotalPrice() * 0.05)
   }

   //ORDERS

   const onAddOrders = async () => {
      cartItems.forEach(async (item) => {
         await axios.post(_ORDERS_API, item)
      })

      cartItems.forEach(async (item) => {
         onRemoveCartItem(item.id)
      })
   }

   return (
      <Provider value={{_ORDERS_API, onAddOrders, ordersItems, setOrdersItems, loading, onCartClose, onCartCloseByOverlay, calcTotalPrice, calcTax, cartOpen, sneakersItems, setSneakersItems, onRemoveFavoriteItem, onAddFavoriteItem, onRemoveCartItem, onAddCartItem, favoritesItems, cartItems, onCartOpen}}>
         <Router>
            <Layout>
               <div className="main">
                  <Drawer/>
                  <Header/>
                  <Routes>
                     <Route path="/" element={
                        <Main/>
                     }/>
                     <Route path="/favorites" element={
                        <Favorites/>
                     }/>
                     <Route path="/orders" element={
                        <Orders/>
                     }/>
                  </Routes>
               </div>
            </Layout>
         </Router>
      </Provider>
   )
}

export default App
