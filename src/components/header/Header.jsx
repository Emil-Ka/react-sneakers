import './header.scss'

import logo from '../../resources/img/logo.png'
import cart from '../../resources/img/cart.svg'
import heart from '../../resources/img/heart.svg'
import user from '../../resources/img/user.svg'

const Header = ({onCartOpen, calcTotalPrice}) => {
   return (
      <header className="header">
         <div className="header__logo logo">
            <img src={logo} alt="logo" className="logo__img"/>
            <div className="inline-block">
               <a className="logo__link" href="#">React sneaker</a>
               <p className="logo__subtitle">Магазин лучших кроссовок</p>
            </div>
         </div>
         <ul className="header__menu menu">
            <li onClick={onCartOpen} className="menu__item">
               <img src={cart} alt="cart" className="menu__cart" />
               <p className="menu__price">{calcTotalPrice()} руб.</p>
            </li>
            <li className="menu__item">
               <img src={heart} alt="heart" className="menu__heart" />
            </li>
            <li className="menu__item">
               <img src={user} alt="user" className="menu__user" />
            </li>
         </ul>
      </header>
   )
}

export default Header