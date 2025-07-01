import { Route, Routes } from 'react-router-dom'
import Footer from './components/layouts/Footer'
import Navbar from './components/layouts/Navbar'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Favourites from './pages/Favourites'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProductDetail from './pages/ProductDetail'

const App = () => {
	return (
		<div>
			<Navbar />
			<div className='min-h-screen'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/product/:id' element={<ProductDetail />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/checkout' element={<Checkout />} />
					<Route path='/favourites' element={<Favourites />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</div>
			<Footer />
		</div>
	)
}
export default App
