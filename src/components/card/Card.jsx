import './card.scss'

import {useContext} from 'react'

import favorite from '../../resources/img/heart-on.svg'
import unfavorite from '../../resources/img/heart-off.svg'
import plus from '../../resources/img/plus.svg'
import added from '../../resources/img/added.svg'

import AppContext from '../../context/AppContext'

const Card = ({imgUrl, title, price, id}) => {
   const {cartItems, favoritesItems, onAddCartItem, onRemoveCartItem, onAddFavoriteItem, onRemoveFavoriteItem} = useContext(AppContext)
   return (
      <li className="card">
         {
            favoritesItems.find(item => item.id === id) ?
            <img 
               className="card__heart"
               src={favorite}
               alt="favorite"
               onClick={() => onRemoveFavoriteItem(id)}
               /> 
            :
            <img 
               className="card__heart"
               src={unfavorite}
               alt="unfavorite"
               onClick={() => {id && onAddFavoriteItem(id)}}
               /> 
         }
         <img src={imgUrl} alt={title} className="card__sneaker" />
         <p className="card__title">{title}</p>
         <div className="flex">
            <div>
               <p className="card__price">Цена:</p>
               <b className="card__cost">{price} руб.</b>
            </div>
            {
               cartItems.find(item => item.id == id) ?
               <img 
                  className="card__add"
                  src={added}
                  alt="added"
                  onClick={() => onRemoveCartItem(id)}/> :
               <img
                  className="card__add"
                  src={plus}
                  alt="add"
                  onClick={() => {id && onAddCartItem(id)}}/>
            }
         </div>
      </li>
   )
}

export default Card