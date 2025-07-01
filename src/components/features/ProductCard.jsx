import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

const ProductCard = ({ product, onAddToCart, onAddToFavourites }) => {
	const navigate = useNavigate()

	const handleClick = () => {
		onAddToCart()
		toast.success('Mahsulot savatchaga qo‘shildi!')
	}

	const handleFavourite = () => {
		onAddToFavourites()
		toast.success('Mahsulot sevimlilarga qo‘shildi!')
		navigate('/favourites')
	}

	return (
		<div className='flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-4 md:p-5 shadow-sm'>
			<div className='h-56'>
				<img
					className='mx-auto w-full h-full object-contain'
					src={product.image}
					alt={product.title}
				/>
			</div>

			<div className='flex items-center justify-end gap-1 my-2'>
				<Link
					className='rounded-lg p-1.5 text-gray-800 hover:bg-gray-100 hover:text-gray-900'
					to={`/product/${product.id}`}
					title='Mahsulotni ko`rish'
				>
					<span className='sr-only'>Quick look</span>
					<img className='w-4 h-4' src='/images/eye.svg' alt='Eye icon' />
				</Link>

				<button
					className='rounded-lg p-1.5 text-gray-800 hover:bg-gray-100 hover:text-gray-900'
					onClick={handleFavourite}
					title='Sevimlilarga qo`shish'
				>
					<span className='sr-only'>Add to Favorites</span>
					<img className='w-4 h-4' src='/images/heart.svg' alt='Heart icon' />
				</button>
			</div>

			<div>
				<h3 className='text-lg font-semibold leading-tight text-gray-900'>
					{product.title.slice(0, 40)}...
				</h3>

				<div className='mt-2 flex items-center gap-2'>
					<div className='flex items-center'>
						{Array.from({ length: 5 }).map((_, index) => (
							<svg
								key={index}
								className='h-4 w-4 text-yellow-400'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='currentColor'
								viewBox='0 0 24 24'
							>
								<path d='M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z' />
							</svg>
						))}
					</div>
					<p className='text-sm font-medium text-gray-900'>
						{product.rating.rate}
					</p>
					<p className='text-sm font-medium text-gray-500'>
						({product.rating.count})
					</p>
				</div>

				<div className='mt-4 flex items-center justify-between gap-2 md:gap-4'>
					<p className='text-lg md:text-2xl font-extrabold leading-tight text-gray-900'>
						${product.price}
					</p>

					<button
						type='button'
						className='flex items-center rounded-lg bg-blue-700 px-3 py-2.5 text-sm font-medium text-white hover:bg-blue-800 transition duration-200 cursor-pointer focus:outline-none text-nowrap'
						onClick={handleClick}
						title='Mahsulotni savatga qo`shish'
					>
						<img
							className='me-1 w-4 h-4 md:w-5 md:h-5'
							src='/images/basket.svg'
							alt=''
						/>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	)
}

export default ProductCard
