import search from '../../resources/img/search.svg'

import './cardList.scss'

import Card from '../card/Card'

const CardList = () => {
   return (
      <div className="card-list">
         <div className="card-list__header">
            <h1 className="card-list__title">Все кроссовки</h1>
            <div className="card-list__search search">
               <img src={search} alt="search" className="search__img"/>
               <input placeholder="Поиск..." type="text" className="search__input" />
            </div>
         </div>
         <ul className="card-list__cards cards">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
         </ul>
      </div>
   )
}

export default CardList