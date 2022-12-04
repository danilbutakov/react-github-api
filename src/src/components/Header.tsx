import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<nav className='flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-700 text-[#FFFFFF]'>
			<h1 className='flex-1 font-semibold text-[20px]'>Navigation</h1>
			<div className='flex-1 font-normal text-[20px]'>
				<Link to='/'>
					<span className='mr-5'>Home</span>
				</Link>
				<Link to='/favorites'>
					<span>Favorites</span>
				</Link>
			</div>
		</nav>
	);
}

export default Header;
