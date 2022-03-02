import './main.scss'
import '../../styles/cardList.scss'

import {useContext, useState} from 'react'

import search from '../../resources/img/search.svg'
import remove from '../../resources/img/btn-remove.svg'

import Layout from '../../components/layout/Layout'
import Header from '../../components/header/Header'
import Card from '../../components/card/Card'
import Drawer from '../../components/drawer/Drawer'
import AppContext from '../../context/AppContext'

const Main = () => {
   const {sneakersItems, cartOpen} = useContext(AppContext)
   const [searchValue, setSearchValue] = useState('')

   const onSetSearchValue = (event) => {
      setSearchValue(event.target.value)
   }

   return (
      <Layout>
         <div className="main">
            {
               cartOpen ?
               <Drawer/> :
               null
            }
            <Header/>
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
                           key={item.id}/>
                     ))
                  }
               </ul>
            </div>
         </div>
      </Layout>
   )
}

export default Main