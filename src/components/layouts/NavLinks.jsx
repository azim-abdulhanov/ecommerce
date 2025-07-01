import { NavLink } from 'react-router-dom'

const NavLinks = ({ onClick = () => {} }) => (
	<>
		<li>
			<NavLink
				className={({ isActive }) =>
					`${isActive ? 'text-blue-500' : 'text-gray-700'} font-medium flex items-center gap-1.5`
				}
				to='/cart'
				onClick={onClick}
			>
				<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
					<circle cx='8' cy='21' r='1' />
					<circle cx='19' cy='21' r='1' />
					<path d='M2.05 2.05h2l2.66 12.42a2 2 0 002 1.58h9.78a2 2 0 001.95-1.57l1.65-7.43H5.12' />
				</svg>
				Savatcha
			</NavLink>
		</li>
		<li>
			<NavLink
				className={({ isActive }) =>
					`${isActive ? 'text-blue-500' : 'text-gray-700'} font-medium flex items-center gap-1.5`
				}
				to='/favourites'
				onClick={onClick}
			>
				<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
					<path d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' />
				</svg>
				Sevimlilar
			</NavLink>
		</li>
	</>
)

export default NavLinks