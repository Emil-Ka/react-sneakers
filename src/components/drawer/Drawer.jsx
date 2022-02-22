import './drawer.scss'

import sneaker_mini from '../../resources/img/sneakers1-mini.jpg'
import plus from '../../resources/img/plus.svg'
import arrow from '../../resources/img/arrow.svg'

const Drawer = () => {
   return (
      <div className="overlay">
         <div className="drawer">
            <h2 className="drawer__title">Корзина</h2>
            <ul className="drawer__cart cart">
               <li className="cart__item item">
                  <img src={sneaker_mini} alt="sneaker" className="item__img" />
                  <div className="item__desc">
                     <p className="item__title">Мужские Кроссовки Nike Air Max 270</p>
                     <b className="item__price">12 999 руб.</b>
                  </div>
                  <button className="item__add"><img src={plus} alt="add"/></button>
               </li>
               <li className="cart__item item">
                  <img src={sneaker_mini} alt="sneaker" className="item__img" />
                  <div className="item__desc">
                     <p className="item__title">Мужские Кроссовки Nike Air Max 270</p>
                     <b className="item__price">12 999 руб.</b>
                  </div>
                  <button className="item__add"><img src={plus} alt="add"/></button>
               </li>
            </ul>
            <div className="drawer__total total">
               <p className="total__title">Итого:</p>
               <div className="total__dashed"></div>
               <b className="total__price">21 498 руб.</b>
            </div>
            <div className="drawer__total total">
               <p className="total__title">Налог 5%:</p>
               <div className="total__dashed"></div>
               <b className="total__price">1074 руб.</b>
            </div>
            <button className="drawer__btn">
               <span>Оформить заказ</span>
               <img src={arrow} alt="next"/>
            </button>
         </div>
      </div>
   )
}

export default Drawer
