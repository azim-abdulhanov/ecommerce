import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromFavourites } from '../store/favouritesSlice'

const Favourites = () => {
	const dispatch = useDispatch()
	const favourites = useSelector(state => state.favourites)

	const handleRemove = id => {
		dispatch(removeFromFavourites(id))
		toast.success('Mahsulot sevimlilardan o‘chirildi')
	}

	return (
		<div className='max-w-7xl mx-auto px-5 py-20'>
			<h1 className='text-2xl md:text-4xl font-bold mb-10 text-center'>
				Sevimli mahsulotlaringiz
			</h1>
			{favourites.length === 0 ? (
				<p className='text-gray-500 text-center'>
					Hozircha sevimli mahsulotlar yo‘q.
				</p>
			) : (
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5'>
					{favourites.map(product => (
						<div
							key={product.id}
							className='border border-gray-100 rounded-lg p-4 shadow bg-white flex flex-col justify-between'
						>
							<div>
								<img
									className='h-40 w-full object-contain mb-5'
									src={product.image}
									alt={product.title}
								/>
								<h2 className='font-bold text-lg truncate'>{product.title}</h2>
								<p className='text-gray-700 mt-2 font-semibold'>
									${product.price}
								</p>
							</div>

							<button
								className='mt-4 bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-2 rounded-md transition cursor-pointer'
								onClick={() => handleRemove(product.id)}
								type='button'
							>
								O‘chirish
							</button>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default Favourites
