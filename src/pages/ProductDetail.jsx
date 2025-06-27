import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Spinner from '../components/ui/Spinner'

const ProductDetail = () => {
	const { id } = useParams()
	const { items, status } = useSelector(state => state.products)
	const product = items.find(p => p.id === parseInt(id))

	if (status === 'loading') return <Spinner />
	if (!product) return (
		<div className='flex flex-col gap-5 py-12 px-5'>
			<img className='mx-auto w-1/2 h-80 object-contain' src="/public/product-notfound.svg" alt="Product Not Found image" />
			<p className='text-xl font-semibold text-center'>Mahsulot topilmadi</p>
		</div>
	) 

	return (
		<div className='max-w-5xl mx-auto px-5 py-12 grid md:grid-cols-2 gap-10 items-start'>
			{/* <h2 className='text-4xl font-bold mb-10 text-center'>Mahsulot haqida ma'lumot</h2> */}
			<div>
				<img
					className='w-full h-96 object-contain border border-gray-200 rounded-lg p-5'
					src={product.image}
					alt={product.title}
				/>
			</div>
			<div>
				<h3 className='text-3xl font-bold mb-5'>{product.title}</h3>
				<p className='text-gray-500 mb-5'>{product.description}</p>
				<p className='text-gray-700 font-semibold mb-5'>{product.category}</p>
				<p className='text-2xl text-blue-500 font-semibold'>
					${product.price}
				</p>
			</div>
		</div>
	)
}

export default ProductDetail
