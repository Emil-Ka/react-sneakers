import './favorites.scss'
import '../../styles/cardList.scss'

import back from '../../resources/img/back.svg'
import smile_sad from '../../resources/img/smile-sad.png'
import left_arrow from '../../resources/img/left-arrow.svg'

import {NavLink} from 'react-router-dom'
import {useContext} from 'react'

import Card from '../../components/card/Card'
import AppContext from '../../context/AppContext'
import Skeleton from '../../components/skeleton/Skeleton'

const Favorites = () => {
   const {favoritesItems, loading} = useContext(AppContext)
   return (
      <div className="favorites">
         {
            favoritesItems.length === 0 && !loading ?
            <div className="favorites__empty empty">
               <img className="empty__img" src={smile_sad} alt="smile"/>
               <h1 className="empty__title">Закладок нет :(</h1>
               <p className="empty__desc">
                  Вы ничего не добавляли в закладки
               </p>
               <NavLink to="/" className="empty__btn">
                  <img src={left_arrow} alt="next"/>
                  <span>Вернуться назад</span>
               </NavLink>
            </div> 
            :
            <>
               <div className="favorites__head">
                  <NavLink className="favorites__link" to="/">
                     <img src={back} alt="back" className="favorites__img" />
                  </NavLink>
                  <h1 className="favorites__title">Мои закладки</h1>
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
                     favoritesItems.map(item => (
                        <Card 
                           {...item}
                           key={item.id}/>
                     ))
                  }
               </ul>
            </> 
         }
         
      </div>
   )
}

export default Favorites