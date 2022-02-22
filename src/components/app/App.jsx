import './app.scss'

import Layout from '../layout/Layout'
import Header from '../header/Header'
import CardList from '../cardList/CardList'
import Drawer from '../drawer/Drawer'

const App = () => {
   return (
      <Layout>
         <div className="app">
            <Drawer/>
            <Header/>
            <CardList/>
         </div>
      </Layout>
   )
}

export default App
