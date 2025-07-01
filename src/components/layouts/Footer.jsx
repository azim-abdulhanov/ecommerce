import { Link } from 'react-router-dom'

const socialIconsLink = [
	{
		name: 'facebook',
		link: 'https://www.facebook.com',
		icon: '/images/facebook.svg',
	},
	{
		name: 'twitter',
		link: 'https://x.com/',
		icon: '/images/twitter.svg',
	},
	{
		name: 'instagram',
		link: 'https://www.instagram.com',
		icon: '/images/instagram.svg',
	},
]

const Footer = () => {
	return (
		<footer className='text-gray-600'>
			<div className='max-w-7xl px-5 py-6 md:py-8 mx-auto flex items-center md:flex-row flex-col'>
				<Link className='text-2xl font-bold text-blue-600' to='/'>
					E-Shop
				</Link>
				<p className='text-sm text-gray-600 font-medium sm:ml-4 sm:pl-4 sm:border-l-1 sm:border-gray-200 sm:py-1 sm:mt-0 mt-4'>
					© 2025 NextGen, Barcha huquqlar himoyalangan.
				</p>
				<ul className='inline-flex gap-5 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
					{socialIconsLink.map(social => (
						<li key={social.name}>
							<a href={social.link} target='_blank'>
								<img className='w-5 h-5' src={social.icon} alt={social.name} />
							</a>
						</li>
					))}
				</ul>
			</div>
		</footer>
	)
}

export default Footer
