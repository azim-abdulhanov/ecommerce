const Hero = () => {
	return (
		<section className="w-full h-3/4 p-12 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center flex items-center justify-center relative text-center">
			<div className='px-4 w-full max-w-3xl'>
				<h1 className='text-3xl md:text-6xl text-center font-bold text-blue-900 mb-4 leading-tight'>
					Eksklyuziv chegirmalarni o'tkazib yubormang
				</h1>
				<p className='text-sm md:text-xl text-center text-blue-800 mb-8'>
					O'tkazib yubormang - Cheklangan mahsulotlar eng past narxlarda! Hozir
					xarid qiling
				</p>
				<button
					className='bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md text-md font-medium shadow-md transition cursor-pointer'
					type='button'
				>
					Hoziroq ko'rish
				</button>
			</div>
		</section>
	)
}

export default Hero
