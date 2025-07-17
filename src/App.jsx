
import './App.css'
import Banner from './components/Banner'
import Category from './components/Category'
import Navigation from './components/Navigation'
import Products from './pages/Product'

function App() {

  return (
    <div>
      <Navigation/>
      <Banner/>
      <Category/>
      <Products/>
    </div>
  )
}

export default App
