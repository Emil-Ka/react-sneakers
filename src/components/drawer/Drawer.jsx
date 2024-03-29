import './drawer.scss'
import {useContext, useEffect, useState} from 'react'

import arrow from '../../resources/img/arrow.svg'
import left_arrow from '../../resources/img/left-arrow.svg'
import remove from '../../resources/img/btn-remove.svg'
import box from '../../resources/img/box.png'
import done from '../../resources/img/done.png'

import AppContext from '../../context/AppContext'

const Drawer = () => {
   const {cartOpen, onAddOrders, onCartClose, cartItems, onCartCloseByOverlay, onRemoveCartItem, calcTotalPrice, calcTax} = useContext(AppContext)
   const [showReadyOrder, setShowReadyOrder] = useState(false)

   useEffect(() => {
      setShowReadyOrder(false)
   }, [])

   return (
      <div
         className={`overlay ${cartOpen ? 'overlayVisible' : ''}`}
         onClick={onCartCloseByOverlay}>
         <div className="drawer">
            <div className="drawer__header">
               <h2 className="drawer__title">Корзина</h2>
               <button onClick={onCartClose} className="drawer__close">
                  <img src={remove} alt="close"/>
               </button>
            </div>
            {
               showReadyOrder ?
               <div className="drawer__done-cart done-cart">
                  <img className="done-cart__img" src={done} alt="done"/>
                  <h3 className="done-cart__title">Заказ оформлен!</h3>
                  <p className="done-cart__desc">Ваш заказ #{(Math.random() * 100000).toFixed()} скоро будет передан курьерской доставке</p>
                  <button onClick={onCartClose} className="done-cart__btn">
                     <img src={left_arrow} alt="next"/>
                     <span>Вернуться назад</span>
                  </button>
               </div>
               :
               cartItems.length > 0 ? (
                  <>
                     <ul className="drawer__cart cart">
                        {
                           cartItems.map(({imgUrl, title, price, id}) => {
                              return (
                                 <li key={id} className="cart__item item">
                                    <img src={imgUrl} alt={title} className="item__img" />
                                    <div className="item__desc">
                                       <p className="item__title">{title}</p>
                                       <b className="item__price">{price} руб.</b>
                                    </div>
                                    <button 
                                       className="item__add"
                                       onClick={() => onRemoveCartItem(id)}>
                                       <img src={remove} alt="remove"/>
                                    </button>
                                 </li>
                              )
                           })
                        }
                     </ul>
                     <div className="drawer__total total">
                        <p className="total__title">Итого:</p>
                        <div className="total__dashed"></div>
                        <b className="total__price">{calcTotalPrice()} руб.</b>
                     </div>
                     <div className="drawer__total total">
                        <p className="total__title">Налог 5%:</p>
                        <div className="total__dashed"></div>
                        <b className="total__price">{calcTax()} руб.</b>
                     </div>
                     <button
                        onClick={() => {
                           onAddOrders()
                           setShowReadyOrder(true)}} 
                        className="drawer__btn">
                        <span>Оформить заказ</span>
                        <img src={arrow} alt="next"/>
                     </button>
                  </>
               )
               : 
               (
                  <div className="drawer__free-cart free-cart">
                     <img className="free-cart__img" src={box} alt="box"/>
                     <h3 className="free-cart__title">Корзина пустая</h3>
                     <p className="free-cart__desc">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                     <button onClick={onCartClose} className="free-cart__btn">
                        <img src={left_arrow} alt="next"/>
                        <span>Вернуться назад</span>
                     </button>
                  </div>
               )
            }
         </div>
      </div>
   )
}

export default Drawer
