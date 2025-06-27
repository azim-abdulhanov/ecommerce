import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

const ProductCard = ({ product, onAddToCart }) => {
	const handleClick = () => {
		onAddToCart()
		toast.success('Mahsulot savatchaga qo‘shildi!')
	}

	return (
		<div className='h-full flex flex-col justify-between border border-slate-200 rounded-md p-5'>
			<Link to={`/product/${product.id}`}>
				<img
					className='w-full h-50 object-contain'
					src={product.image}
					alt={product.title}
				/>
				<h3 className='text-md font-bold tracking-tight text-gray-900 mt-5'>
					{product.title}
				</h3>
				<p className='font-normal text-gray-700 mt-4'>${product.price}</p>
			</Link>
			<button
				className='text-white text-sm font-medium bg-blue-700 hover:bg-blue-800 rounded-lg px-5 py-2.5 text-center cursor-pointer'
				onClick={handleClick}
			>
				Add to Cart
			</button>
		</div>
	)
}

export default ProductCard
