import { Route, Routes } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import NotFound from './pages/NotFound'

const App = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/product/:id' element={<ProductDetail />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/checkout' element={<Checkout />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	)
}
export default App
