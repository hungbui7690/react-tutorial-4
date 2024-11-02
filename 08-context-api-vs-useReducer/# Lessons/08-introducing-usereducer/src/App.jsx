/*
  - change from useState to useReducer
  - reducer -> reduce one or more complex values to a simpler one



*/

import Header from './components/Header.jsx'
import Shop from './components/Shop.jsx'
import Product from './components/Product.jsx'
import { DUMMY_PRODUCTS } from './dummy-products.js'
import CartContextProvider from './store/shopping-cart-context.jsx'

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  )
}

export default App
