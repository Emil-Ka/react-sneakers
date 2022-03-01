import {useState} from 'react'

import search from '../../resources/img/search.svg'
import remove from '../../resources/img/btn-remove.svg'
import './cardList.scss'

import Card from '../card/Card'

const CardList = ({sneakersItems, cartItems, favoritesItems, onAddCartItem, onRemoveCartItem, onAddFavoriteItem, onRemoveFavoriteItem}) => {
   const [searchValue, setSearchValue] = useState('')

   const onSetSearchValue = (event) => {
      setSearchValue(event.target.value)
   }

   return (
      <div className="card-list">
         <div className="card-list__header">
            <h1 className="card-list__title">Все кроссовки</h1>
            <div className="card-list__search search">
               <img src={search} alt="search" className="search__img"/>
               <input
                  placeholder="Поиск..."
                  type="text"
                  className="search__input"
                  onChange={onSetSearchValue}
                  value={searchValue}/>
               {
                  searchValue && 
                  <img
                     className="search__clear"
                     src={remove}
                     alt="clear"
                     onClick={() => setSearchValue('')}/>
               }
            </div>
         </div>
         <ul className="card-list__cards cards">
            {
               sneakersItems.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
               .map(item => (
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
   )
}

export default CardList