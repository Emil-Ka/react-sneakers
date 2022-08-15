import axios from 'axios'

const removeItem = async (setItems, id, API) => {
   setItems(prev => [...prev.filter(item => {
      return item.id !== id
   })])

   let idInApi
   await axios.get(API)
   .then(res => {
      res.data.forEach(item => {
         if (item.id === id) {
            idInApi = item._id
         }
      })
   })
   await axios.delete(`${API}/${idInApi}`)
}

export default removeItem