import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { ShoppingCars } from './pages/ShoppingCars'
import { CheckoutScreen } from './pages/CheckoutScreen'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/">
          <Route path="/" element={<Home />} />
          <Route path="/ShoppingCars" element={<ShoppingCars />} />
          <Route path="CheckoutScreen" element={<CheckoutScreen />} />
        </Route>
      </Route>
    </Routes>
  )
}
