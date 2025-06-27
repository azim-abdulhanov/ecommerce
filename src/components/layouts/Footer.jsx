const socialIconsLink = [
	{
		name: 'facebook',
		link: 'https://www.facebook.com',
		icon: '/facebook.svg'
	},
	{
		name: 'twitter',
		link: 'https://x.com/',
		icon: '/twitter.svg'
	},
	{
		name: 'instagram',
		link: 'https://www.instagram.com',
		icon: '/instagram.svg'
	},
]

const Footer = () => {
	return (
		<footer className='text-gray-600'>
			<div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
				<a className='text-2xl uppercase font-bold text-gray-900' href='/'>
					NextGen
				</a>
				<p className='text-sm text-gray-600 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-1 sm:mt-0 mt-4'>
					© 2025 NextGen
				</p>
				<ul className='inline-flex gap-5 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
					{socialIconsLink.map((social) => (
						<li key={social.name}>
							<a href={social.link} target='_blank'>
								<img src={social.icon} alt={social.name} />
							</a>
						</li>
					))}
				</ul>
			</div>
		</footer>
	)
}

export default Footer
