import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<section className='bg-white'>
			<div className='max-w-6xl px-5 py-10 mx-auto lg:flex items-start lg:items-center lg:gap-5'>
				<div className='w-full wmd:w-1/2'>
					<h1 className='mt-3 text-3xl font-semibold text-gray-800 md:text-6xl'>
						Sahifa topilmadi
					</h1>
					<p className='mt-4 text-gray-500'>
						Kechirasiz, siz qidirayotgan sahifa mavjud emas.
					</p>

					<div className='flex items-center mt-8'>
						<Link
							className='flex items-center gap-1.5 w-auto px-4 py-3 text-white transition duration-200 bg-blue-500 rounded-md hover:bg-blue-600'
							to={'/'}
						>
							<span className='text-sm md:text-md text-nowrap'>Bosh sahifaga qaytish</span>
						</Link>
					</div>
				</div>
				<div className='relative w-full mt-12 lg:w-1/2 lg:mt-0'>
					<img
						className='w-full h-96 object-contain'
						src='/images/404-notfound.svg'
						alt='Not Found image'
					/>
				</div>
			</div>
		</section>
	)
}

export default NotFound
