import './favorites.scss'
import back from '../../resources/img/back.svg'

import {NavLink} from 'react-router-dom'

import Layout from '../../components/layout/Layout'
import Header from '../../components/header/Header'
import Card from '../../components/card/Card'

const Favorites = ({onCartOpen, calcTotalPrice, onRemoveFavoriteItem, onAddFavoriteItem, onRemoveCartItem, onAddCartItem, favoritesItems, cartItems}) => {
   return (
      <Layout>
         <div className="main">
            <Header
               onCartOpen={onCartOpen}
               calcTotalPrice={calcTotalPrice}/>
            <div className="favorites">
               <div className="favorites__head">
                  <NavLink className="favorites__link" to="/">
                     <img src={back} alt="back" className="favorites__img" />
                  </NavLink>
                  <h1 className="favorites__title">Мои закладки</h1>
               </div>
               <ul className="card-list__cards cards">
                  {
                     favoritesItems.map(item => (
                        <Card 
                           {...item}
                           key={item.id}
                           cartItems={cartItems}
                           favoritesItems={favoritesItems}
                           onAddCartItem={onAddCartItem}
                           onRemoveCartItem={onRemoveCartItem}
                           onAddFavoriteItem={onAddFavoriteItem}
                           onRemoveFavoriteItem={onRemoveFavoriteItem}/>
                     ))
                  }
               </ul>
            </div>
         </div>
      </Layout>
   )
}

export default Favorites