import './favorites.scss'
import back from '../../resources/img/back.svg'

import {useState, useEffect} from 'react'
import axios from 'axios'

import Layout from '../../components/layout/Layout'
import Header from '../../components/header/Header'

const Favorites = ({onCartOpen, calcTotalPrice}) => {
   return (
      <Layout>
         <div className="favorites">
            <Header
               onCartOpen={onCartOpen}
               calcTotalPrice={calcTotalPrice}/>
            <a href="#">
               <img src={back} alt="back" className="favorites__back" />
            </a>
            <h1 className="favorites__title">Мои закладки</h1>
         </div>
      </Layout>
   )
}

export default Favorites