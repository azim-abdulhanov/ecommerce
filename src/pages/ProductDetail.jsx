import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Spinner from '../components/ui/Spinner'

const ProductDetail = () => {
	const { id } = useParams()
	const { items, status } = useSelector(state => state.products)
	const product = items.find(p => p.id === parseInt(id))

	if (status === 'loading') return <Spinner />
	if (!product)
		return (
			<div className='flex flex-col gap-5 px-5 py-20'>
				<img
					className='w-full h-full md:h-96 object-contain mb-2 md:mb-4'
					src='/images/product-notfound.svg'
					alt='Not Found image'
				/>
				<p className='text-xl md:text-2xl font-semibold text-center'>
					Mahsulot topilmadi
				</p>
			</div>
		)

	return (
		<section className='max-w-5xl mx-auto px-5 py-20'>
			<h2 className='text-2xl md:text-4xl font-bold text-center mb-10'>
				Mahsulot haqida ma'lumot
			</h2>
			<div className='grid md:grid-cols-2 gap-10 items-start'>
				<div>
					<img
						className='w-full h-96 object-contain border border-gray-200 rounded-lg p-5'
						src={product.image}
						alt={product.title}
					/>
				</div>
				<div className='flex flex-col gap-2'>
					<h3 className='text-2xl font-bold'>{product.title}</h3>
					<p className='text-gray-500'>{product.description}</p>
					<div className='flex items-center gap-3'>
						<div class='flex items-center'>
							{Array.from({ length: 5 }).map((_, index) => (
								<svg
									key={index}
									class='h-4 w-4 text-yellow-400'
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
					</div>
					<p className='text-sm font-medium text-gray-600'>
						({product.rating.count})
					</p>
					<p className='text-gray-600 font-semibold'>{product.category}</p>
					<p className='text-2xl font-semibold'>${product.price}</p>
					<Link
						className='flex items-center justify-center w-full sm:w-50 mt-4 font-semibold bg-blue-500 text-white text-sm rounded-md py-2 px-3 hover:bg-blue-600'
						to={'/'}
					>
						<img
							className='me-1 h-4 w-4'
							src='/images/arrow-left.svg'
							alt='Arrow left icon'
						/>
						Bosh sahifaga qaytish
					</Link>
				</div>
			</div>
		</section>
	)
}

export default ProductDetail
