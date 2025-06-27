import { useDispatch, useSelector } from 'react-redux'
import {
	decrementQuantity,
	incrementQuantity,
	removeFromCart,
} from '../../store/cartSlice'

const Cart = () => {
	const cart = useSelector(state => state.cart)
	const dispatch = useDispatch()

	const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

	return (
		<div className='max-w-5xl mx-auto py-12 px-5'>
			<h2 className='text-4xl font-bold mb-10 text-center'>Mening xaridlarim</h2>

			{cart.length === 0 ? (
        <div className='flex flex-col gap-5'>
          <img className='mx-auto w-1/2 h-80' src="/shopping-cart.svg" alt="Shopping Cart image" />
          <p className='text-xl font-semibold text-center'>Xaridlar yo'q</p>
        </div>
			) : (
				cart.map(item => (
					<div className="rounded-lg border border-gray-200 bg-white p-5 md:p-6" key={item.id}>
						<div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
							<div className="md:order-1">
								<img className="w-22 h-22 object-contain" src={item.image} alt={item.title} />
							</div>

							<div className="flex items-center justify-between md:order-3 md:justify-end">
								<div className="flex items-center gap-3">
									<button type="button" className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 cursor-pointer" onClick={() => dispatch(decrementQuantity(item.id))}>
										-
									</button>
									<span className='font-medium'>{item.quantity}</span>
									<button type="button" className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 cursor-pointer" onClick={() => dispatch(incrementQuantity(item.id))}>
										+
									</button>
								</div>
								<button className="inline-flex items-center text-sm font-medium text-red-600 cursor-pointer ml-10" type="button" onClick={() => dispatch(removeFromCart(item.id))}>
									Remove
								</button>
							</div>

							<div className="w-full flex-1 space-y-2 md:order-2">
								<h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
								<p className="font-semibold text-gray-600">${item.price}</p>
							</div>
						</div>
					</div>
				))
			)}

			{cart.length > 0 && (
				<div className='text-right mt-5'>
					<h3 className='text-xl font-bold'>Umumiy: ${total.toFixed(2)}</h3>
				</div>
			)}
		</div>
	)
}

export default Cart
