import React from 'react';

function Footer() {
	return (
		<footer>
			<div className='flex justify-center mt-8 p-5 gap-x-28 bg-amazon_blue-light text-slate-300 text-sm leading-7'>
				<div>
					<h5 className='text-white text-base font-medium'>Get to Know Us</h5>
					<ul>
						<li className='link'>Careers</li>
						<li className='link'>Press Releases</li>
						<li className='link'>About us</li>
						<li className='link'>Blog</li>
						<li className='link'>Imprint</li>
						<li className='link'>Amazon Science</li>
					</ul>
				</div>
				<div className='w-52'>
					<h5 className='text-white text-base font-medium'>
						Make Money with Us
					</h5>
					<ul>
						<li className='link'>Sell on Amazon</li>
						<li className='link'>Sell on Amazon Business</li>
						<li className='link'>Sell on Amazon Handmade</li>
						<li className='link'>Associates Programme</li>
						<li className='link'>Fulfilment by Amazon</li>
						<li className='link'>Seller Fulfilled Prime</li>
						<li className='link'>Advertise Your Products</li>
						<li className='link'>Independently Publish with Us</li>
						<li className='link'>Amazon Pay</li>
					</ul>
				</div>
				<div className='hidden md:flex flex-col w-52'>
					<h5 className='text-white text-base font-medium'>
						Amazon Payment Methods
					</h5>
					<ul>
						<li className='link'>Amazon Visa Card</li>
						<li className='link'>Shop with points</li>
						<li className='link'>Credit Card</li>
						<li className='link'>Gift Cards</li>
						<li className='link'>Payment by Invoice</li>
						<li className='link'>Direct Debit</li>
						<li className='link'>Amazon Currency Converter</li>
						<li className='link'>Top Up Your Account</li>
					</ul>
				</div>
				<div className='hidden lg:flex flex-col w-52'>
					<h5 className='text-white text-base font-medium'>Let Us Help You</h5>
					<ul>
						<li className='link'>Track Packages or View Orders</li>
						<li className='link'>Delivery Rates & Policies</li>
						<li className='link'>Returns & Replacements</li>
						<li className='link leading-4'>
							Recycling (including disposal of electrical and electronic
							equipment)
						</li>
						<li className='link'>Manage Your Content and Devices</li>
						<li className='link'>Amazon Mobile App</li>
						<li className='link'>Amazon Assistant</li>
						<li className='link'>Customer Service</li>
						<li className='link'>Accessibility</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
