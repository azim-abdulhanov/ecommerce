import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeFromCart } from '../store/cartSlice'

const Checkout = () => {
	const cart = useSelector(state => state.cart)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [form, setForm] = useState({
		fullname: '',
		phone: '',
		address: '',
		payment: 'Naqd',
	})

	const handleChange = e => {
		setForm({ ...form, [e.target.id]: e.target.value })
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (!form.fullname || !form.phone || !form.address) {
			toast.error('Iltimos, barcha maydonlarni to‘ldiring!')
			return
		}

		toast.success('Buyurtma muvaffaqiyatli yuborildi!')
		cart.forEach(item => dispatch(removeFromCart(item.id)))
		navigate('/')
	}

	return (
		<section className='max-w-2xl mx-auto px-5 py-20'>
			<h2 className='text-2xl md:text-4xl font-bold mb-10 text-center'>
				Buyurtmachi ma'lumotlari
			</h2>
			<form className='space-y-4' onSubmit={handleSubmit}>
				<div className='flex flex-col gap-1'>
					<label
						className='text-sm font-medium text-gray-800'
						htmlFor='fullname'
					>
						Ism, familyangiz:
					</label>
					<input
						className='border border-gray-400 rounded-md px-3 py-2 focus:outline-blue-500'
						type='text'
						id='fullname'
						required
						placeholder='Ali Valiyev'
						onChange={handleChange}
					/>
				</div>

				<div className='flex flex-col gap-1'>
					<label className='text-sm font-medium text-gray-800' htmlFor='phone'>
						Telefon raqam:
					</label>
					<input
						className='border border-gray-400 rounded-md px-3 py-2 focus:outline-blue-500'
						type='tel'
						id='phone'
						required
						placeholder='+998901234567'
						onChange={handleChange}
					/>
				</div>

				<div className='flex flex-col gap-1'>
					<label
						className='text-sm font-medium text-gray-800'
						htmlFor='address'
					>
						Manzil:
					</label>
					<input
						className='border border-gray-400 rounded-md px-3 py-2 focus:outline-blue-500'
						type='text'
						id='address'
						required
						placeholder='Toshkent, Chilonzor...'
						onChange={handleChange}
					/>
				</div>

				<div className='flex flex-col gap-1'>
					<label
						className='text-sm font-medium text-gray-800'
						htmlFor='payment'
					>
						To‘lov usuli:
					</label>
					<select
						className='border border-gray-400 rounded-md p-2 focus:outline-blue-500'
						id='payment'
						required
						onChange={handleChange}
					>
						<option>Naqd</option>
						<option>Click</option>
						<option>Payme</option>
					</select>
				</div>

				<button
					className='bg-blue-700 hover:bg-blue-800 text-white font-medium p-2 rounded-md w-full mt-3 cursor-pointer focus:outline-none'
					type='submit'
				>
					Yuborish
				</button>
			</form>
		</section>
	)
}

export default Checkout
