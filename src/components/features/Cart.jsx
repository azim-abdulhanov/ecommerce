import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'

const Cart = () => {
	const cart = useSelector(state => state.cart)
	const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

	return (
		<section className='max-w-5xl mx-auto px-5 py-20'>
			<h2 className='text-2xl md:text-4xl font-bold mb-10 text-center'>
				Mening xaridlarim
			</h2>

			{cart.length === 0 ? (
				<div className='flex flex-col gap-5'>
					<img
						className='mx-auto w-full h-full md:h-96 mb-2 md:mb-4'
						src='/images/shopping-cart.svg'
						alt='Shopping Cart image'
					/>
					<p className='text-xl md:text-2xl font-semibold text-center'>
						Xaridlar yo'q
					</p>
				</div>
			) : (
				cart.map(item => (
					<div className='mb-3'>
						<CartItem key={item.id} item={item} />
					</div>
				))
			)}

			{cart.length > 0 && (
				<>
					<div className='text-right'>
						<h3 className='text-xl font-bold'>
							Umumiy narx: ${total.toFixed(2)}
						</h3>
					</div>

					<div className='flex justify-end mt-5'>
						<Link
							className='bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white font-semibold rounded-md transition duration-200 tracking-wide'
							to={'/checkout'}
						>
							Xarid qilish
						</Link>
					</div>
				</>
			)}
		</section>
	)
}

export default Cart
