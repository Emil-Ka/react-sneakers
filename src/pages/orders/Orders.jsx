import './orders.scss'
import '../../styles/cardList.scss'

import back from '../../resources/img/back.svg'
import smile_bad from '../../resources/img/smile-bad.png'
import left_arrow from '../../resources/img/left-arrow.svg'

import axios from 'axios'
import {NavLink} from 'react-router-dom'
import {useContext, useEffect, useState} from 'react'

import Card from '../../components/card/Card'
import AppContext from '../../context/AppContext'
import Skeleton from '../../components/skeleton/Skeleton'

const Orders = () => {
   const {ordersItems, setOrdersItems, _ORDERS_API} = useContext(AppContext)
   const [loading, setLoading] = useState(true)

   useEffect( async () => {
      setLoading(true)
      try {
         await axios.get(_ORDERS_API)
         .then(res => setOrdersItems(res.data))
      } catch(e) {
         console.error(e)
      }
      setLoading(false)
   }, [])

   return (
      <div className="orders">
         {
            ordersItems.length === 0 && !loading ?
            <div className="orders__free-orders free-orders">
               <img className="free-orders__img" src={smile_bad} alt="smile"/>
               <h1 className="free-orders__title">У вас нет заказов</h1>
               <p className="free-orders__desc">
                  Вы нищеброд? Оформите хотя бы один заказ.
               </p>
               <NavLink to="/" className="free-orders__btn">
                  <img src={left_arrow} alt="next"/>
                  <span>Вернуться назад</span>
               </NavLink>
            </div> 
            :
            <>
               <div className="orders__head">
                  <NavLink className="orders__link" to="/">
                     <img src={back} alt="back" className="orders__img" />
                  </NavLink>
                  <h1 className="orders__title">Мои покупки</h1>
               </div>
               <ul className="cards">
                  {
                     loading ?
                     <>
                        <Skeleton/>
                        <Skeleton/>
                        <Skeleton/>
                        <Skeleton/>
                     </>
                     :
                     ordersItems.map(item => (
                        <Card
                           imgUrl={item.imgUrl}
                           price={item.price}
                           title={item.title}
                           key={item.id * 100 + (Math.random() * 100).toFixed()}/>
                     ))
                  }
               </ul>
            </> 
         }
         
      </div>
   )
}

export default Orders