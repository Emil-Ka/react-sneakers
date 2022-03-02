import './favorites.scss'
import '../../styles/cardList.scss'
import back from '../../resources/img/back.svg'

import {NavLink} from 'react-router-dom'
import {useContext} from 'react'

import Layout from '../../components/layout/Layout'
import Header from '../../components/header/Header'
import Card from '../../components/card/Card'
import AppContext from '../../context/AppContext'

const Favorites = () => {
   const {favoritesItems} = useContext(AppContext)
   return (
      <Layout>
         <div className="main">
            <Header/>
            <div className="favorites">
               <div className="favorites__head">
                  <NavLink className="favorites__link" to="/">
                     <img src={back} alt="back" className="favorites__img" />
                  </NavLink>
                  <h1 className="favorites__title">Мои закладки</h1>
               </div>
               <ul className="cards">
                  {
                     favoritesItems.map(item => (
                        <Card 
                           {...item}
                           key={item.id}/>
                     ))
                  }
               </ul>
            </div>
         </div>
      </Layout>
   )
}

export default Favorites