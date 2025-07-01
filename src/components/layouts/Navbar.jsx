import { useState } from 'react'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<header className='bg-white shadow'>
			<nav className='max-w-7xl mx-auto px-5 py-4 flex justify-between items-center'>
				<Link className='text-2xl font-bold text-blue-600' to='/'>
					E-Shop
				</Link>

				<button
					className='lg:hidden text-gray-700 focus:outline-none cursor-pointer'
					onClick={toggleMenu}
				>
					<svg
						className='w-6 h-6'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						{isOpen ? (
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M6 18L18 6M6 6l12 12'
							/>
						) : (
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M4 6h16M4 12h16M4 18h16'
							/>
						)}
					</svg>
				</button>

				<ul className='hidden lg:flex items-center gap-6'>
					<NavLinks />
				</ul>
			</nav>

			{isOpen && (
				<div className='lg:hidden px-5 pb-5'>
					<ul className='flex flex-col gap-4'>
						<NavLinks onClick={() => setIsOpen(false)} />
					</ul>
				</div>
			)}
		</header>
	)
}

export default Navbar
