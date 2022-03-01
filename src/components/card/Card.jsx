import favorite from '../../resources/img/heart-on.svg'
import unfavorite from '../../resources/img/heart-off.svg'
import plus from '../../resources/img/plus.svg'
import added from '../../resources/img/added.svg'
//import img from '../../resources/img/1.jpg'

import './card.scss'

const Card = ({imgUrl, title, price, id, cartItems, favoritesItems, onAddCartItem, onRemoveCartItem, onAddFavoriteItem, onRemoveFavoriteItem}) => {
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
               onClick={() => onAddFavoriteItem(id)}
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
                  onClick={() => onAddCartItem(id)}/>
            }
         </div>
      </li>
   )
}

export default Card