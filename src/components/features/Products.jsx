import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../store/cartSlice'
import { fetchProducts } from '../../store/productsSlice'
import Spinner from '../ui/Spinner'
import ProductCard from './ProductCard'

const Products = () => {
	const dispatch = useDispatch()
	const { items, status } = useSelector(state => state.products)

	useEffect(() => {
		dispatch(fetchProducts())
	}, [dispatch])

	const handleAddToCart = product => {
		dispatch(addToCart(product))
	}

	if (status === 'loading') return <Spinner />
	if (status === 'failed') return (
    <div className='flex flex-col gap-5 py-12 px-5'>
      <img className='mx-auto w-1/2 h-80 object-contain' src="/404-notfound.svg" alt="Product Not Found image" />
      <p className='text-xl font-semibold text-center'>Failed to load products</p>
    </div>
  ) 

	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
			{items.map(product => (
				<ProductCard
					key={product.id}
					product={product}
					onAddToCart={() => handleAddToCart(product)}
				/>
			))}
		</div>
	)
}

export default Products
