import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import axios from 'axios'

import Main from '../pages/main/Main'
import Favorites from '../pages/favorites/Favorites'
import AppContext from '../context/AppContext'

const App = () => {
   const [cartOpen, setCartOpen] = useState(false)
   const [cartItems, setCartItems] = useState([])
   const [sneakersItems, setSneakersItems] = useState([])
   const [favoritesItems, setFavoriteItems] = useState([])
   const {Provider} = AppContext

   const _CART_API = 'https://621a650dfaa12ee450f71c60.mockapi.io/cart'
   const _ITEMS_API = 'https://621a650dfaa12ee450f71c60.mockapi.io/items'
   const _FAVORITES_API = 'https://621a650dfaa12ee450f71c60.mockapi.io/favorites'

   useEffect(() => {
      axios.get(_ITEMS_API)
      .then(res => setSneakersItems(res.data))

      axios.get(_CART_API)
      .then(res => setCartItems(res.data))

      axios.get(_FAVORITES_API)
      .then(res => setFavoriteItems(res.data))
   }, [])

   //CART

   const onCartOpen = () => {
      setCartOpen(true)
   }

   const onCartClose = () => {
      setCartOpen(false)
   }

   const onCartCloseByOverlay = (event) => {
      console.log(event.target)
      if (event.target.classList.contains('overlay')) {
         onCartClose()
      }
   }

   const onAddCartItem = (id) => {
      const newCartItem = {
         id: id,
         imgUrl: sneakersItems[id - 1].imgUrl,
         title: sneakersItems[id - 1].title,
         price: sneakersItems[id - 1].price
      }
      setCartItems(prev => [...prev, newCartItem])
      axios.post(_CART_API, newCartItem)
      console.log(newCartItem)
   }

   const onRemoveCartItem = async (id) => {
      setCartItems(prev => [...prev.filter(item => {
         return item.id !== id
      })])

      let idInApi
      await axios.get(_CART_API)
      .then(res => {
         res.data.forEach(item => {
            if (item.id === id) {
               idInApi = item._id
            }
         })
      })
      await axios.delete(`${_CART_API}/${idInApi}`)
   }

   //FAVORITE

   const onAddFavoriteItem = (id) => {
      const newFavoriteItem = {
         id: id,
         imgUrl: sneakersItems[id - 1].imgUrl,
         title: sneakersItems[id - 1].title,
         price: sneakersItems[id - 1].price
      }
      setFavoriteItems(prev => [...prev, newFavoriteItem])
      axios.post(_FAVORITES_API, newFavoriteItem)
      console.log(newFavoriteItem)
   }

   const onRemoveFavoriteItem = async (id) => {
         setFavoriteItems(prev => [...prev.filter(item => {
            return item.id !== id
         })])

         let idInApi
         await axios.get(_FAVORITES_API)
         .then(res => {
            res.data.forEach(item => {
               if (item.id === id) {
                  idInApi = item._id
               }
            })
         })
         await axios.delete(`${_FAVORITES_API}/${idInApi}`)
         console.log(idInApi)
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
   return (
      <Provider value={{onCartClose, onCartCloseByOverlay, calcTotalPrice, calcTax, cartOpen, sneakersItems, setSneakersItems, onRemoveFavoriteItem, onAddFavoriteItem, onRemoveCartItem, onAddCartItem, favoritesItems, cartItems, calcTotalPrice, onCartOpen}}>
         <Router>
            <Routes>
               <Route path="/" element={
                  <Main/>
               }/>
               <Route path="/favorites" element={
                  <Favorites/>
               }/>
            </Routes>
         </Router>
      </Provider>
   )
}

export default App
