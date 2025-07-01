import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../store/cartSlice'
import { addToFavourites } from '../../store/favouritesSlice'
import { fetchProducts } from '../../store/productsSlice'
import Spinner from '../ui/Spinner'
import ProductCard from './ProductCard'

const Products = () => {
	const dispatch = useDispatch()
	const { items, status } = useSelector(state => state.products)

	const [searchTerm, setSearchTerm] = useState('')
	const [selectedCategory, setSelectedCategory] = useState('all')
	const [categories, setCategories] = useState([])

	useEffect(() => {
		dispatch(fetchProducts())
	}, [dispatch])

	useEffect(() => {
		if (items.length > 0) {
			const uniqueCats = ['all', ...new Set(items.map(item => item.category))]
			setCategories(uniqueCats)
		}
	}, [items])

	const handleAddToCart = product => {
		dispatch(addToCart(product))
	}

	const handleAddToFavourites = product => {
		dispatch(addToFavourites(product))
	}

	const filteredProducts = items.filter(product => {
		const matchesCategory =
			selectedCategory === 'all' || product.category === selectedCategory
		const matchesSearch = product.title
			.toLowerCase()
			.includes(searchTerm.toLowerCase())
		return matchesCategory && matchesSearch
	})

	if (status === 'loading') return <Spinner />
	if (status === 'failed') {
		return (
			<div className='flex flex-col gap-5 px-5 py-20'>
				<img
					className='w-full h-full md:h-96 object-contain mb-2 md:mb-4'
					src='/images/404-notfound.svg'
					alt='Not Found image'
				/>
				<p className='text-xl md:text-2xl font-semibold text-center'>
					Mahsulotlar yuklanmadi
				</p>
			</div>
		)
	}

	return (
		<div className='max-w-7xl mx-auto px-5 py-10'>
			<div className='flex flex-col md:flex-row items-center gap-4 justify-between mb-10'>
				<input
					className='w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-blue-500'
					type='text'
					placeholder='Mahsulot nomi bo‘yicha qidirish...'
					value={searchTerm}
					onChange={e => setSearchTerm(e.target.value)}
				/>

				<select
					className='w-full md:w-1/5 px-3 py-2 border border-gray-300 rounded-lg focus:outline-blue-500'
					value={selectedCategory}
					onChange={e => setSelectedCategory(e.target.value)}
				>
					{categories.map(category => (
						<option key={category} value={category}>
							{category.charAt(0).toUpperCase() + category.slice(1)}
						</option>
					))}
				</select>
			</div>

			{filteredProducts.length === 0 ? (
				<p className='text-center text-gray-500 text-xl'>
					Hech qanday mahsulot topilmadi.
				</p>
			) : (
				<section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5'>
					{filteredProducts.map(product => (
						<ProductCard
							key={product.id}
							product={product}
							onAddToCart={() => handleAddToCart(product)}
							onAddToFavourites={() => handleAddToFavourites(product)}
						/>
					))}
				</section>
			)}
		</div>
	)
}

export default Products
