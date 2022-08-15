import axios from 'axios'

const addItem = (items, setItems, id, API) => {
   const newCartItem = {
      id: id,
      imgUrl: items[id - 1].imgUrl,
      title: items[id - 1].title,
      price: items[id - 1].price
   }
   setItems(prev => [...prev, newCartItem])
   try {
      axios.post(API, newCartItem)
   } catch(e) {
      alert('Произошла ошибка, товар не добавлен в корзину')
   }
}

export default addItem