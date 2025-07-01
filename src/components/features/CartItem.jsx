import { useDispatch } from 'react-redux'
import {
	decrementQuantity,
	incrementQuantity,
	removeFromCart,
} from '../../store/cartSlice'

const CartItem = ({ item }) => {
	const dispatch = useDispatch()

	return (
		<div className='rounded-lg border border-gray-200 bg-white p-5 md:p-6'>
			<div className='space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0'>
				<div className='md:order-1'>
					<img
						className='w-22 h-22 object-contain'
						src={item.image}
						alt={item.title}
					/>
				</div>

				<div className='flex items-center justify-between gap-10 md:order-3 md:justify-end'>
					<div className='flex items-center gap-3'>
						<button
							type='button'
							className='flex items-center justify-center w-5 h-5 text-gray-600 rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 cursor-pointer'
							onClick={() => dispatch(decrementQuantity(item.id))}
						>
							-
						</button>
						<span className='font-medium'>{item.quantity}</span>
						<button
							type='button'
							className='flex items-center justify-center w-5 h-5 text-gray-600 rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 cursor-pointer'
							onClick={() => dispatch(incrementQuantity(item.id))}
						>
							+
						</button>
					</div>
					<button
						className='flex items-center text-sm font-medium text-red-600 border border-red-600 rounded-lg py-0.5 px-2 cursor-pointer hover:bg-red-600 hover:text-white'
						type='button'
						onClick={() => dispatch(removeFromCart(item.id))}
					>
						O'chirish
					</button>
				</div>

				<div className='w-full flex-1 space-y-2 md:order-2'>
					<h3 className='font-bold text-gray-900 text-lg'>{item.title}</h3>
					<p className='font-semibold text-gray-600'>${item.price}</p>
				</div>
			</div>
		</div>
	)
}

export default CartItem
