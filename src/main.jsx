import { configureStore } from '@reduxjs/toolkit'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import cartReducer from './store/cartSlice'
import favouritesReducer from './store/favouritesSlice'
import productsReducer from './store/productsSlice'

const store = configureStore({
	reducer: {
		products: productsReducer,
		cart: cartReducer,
		favourites: favouritesReducer,
	},
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Toaster position='top-center' />
				<App />
			</BrowserRouter>
		</Provider>
	</StrictMode>
)
