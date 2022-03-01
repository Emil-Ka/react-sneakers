import './main.scss'

import Layout from '../../components/layout/Layout'
import Header from '../../components/header/Header'
import CardList from '../../components/cardList/CardList'
import Drawer from '../../components/drawer/Drawer'

const Main = ({favoritesItems, onRemoveFavoriteItem, onAddFavoriteItem, onRemoveCartItem, onAddCartItem, cartItems, setSneakersItems, sneakersItems, onCartOpen, cartOpen, calcTax, calcTotalPrice, onCartCloseByOverlay, onCartClose}) => {
   return (
      <Layout>
         <div className="main">
            {
               cartOpen ?
               <Drawer
                  onCartClose={onCartClose}
                  onCartCloseByOverlay={onCartCloseByOverlay}
                  cartItems={cartItems}
                  onRemoveCartItem={onRemoveCartItem}
                  calcTotalPrice={calcTotalPrice}
                  calcTax={calcTax}/> :
               null
            }
            <Header 
               onCartOpen={onCartOpen}
               calcTotalPrice={calcTotalPrice}/>
            <CardList
               sneakersItems={sneakersItems}
               setSneakersItems={setSneakersItems}
               onAddCartItem={onAddCartItem}
               onRemoveCartItem={onRemoveCartItem}
               cartItems={cartItems}
               onAddFavoriteItem={onAddFavoriteItem}
               onRemoveFavoriteItem={onRemoveFavoriteItem}
               favoritesItems={favoritesItems}/>
         </div>
      </Layout>
   )
}

export default Main