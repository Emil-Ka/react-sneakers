import heart_on from '../../resources/img/heart-on.svg'
import sneaker from '../../resources/img/sneakers1.jpg'
import plus from '../../resources/img/plus.svg'

import './card.scss'

const Card = () => {
   return (
      <li className="card">
         <button className="card__heart"><img src={heart_on} alt="like"/></button>
         <img src={sneaker} alt="" className="card__sneaker" />
         <p className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</p>
         <div className="flex">
            <div>
               <p className="card__price">Цена:</p>
               <b className="card__cost">12 999 руб.</b>
            </div>
            <button className="card__add"><img src={plus} alt="add"/></button>
         </div>
      </li>
   )
}

export default Card