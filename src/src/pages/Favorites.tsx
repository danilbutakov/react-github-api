import React from 'react';
import { useAppSelector } from '../hooks/redux';

function Favorites() {
	const { favorites } = useAppSelector(state => state.github);

	if (favorites.length === 0)
		return (
			<div className='flex justify-center mt-5 text-white '>
				<p className='mx-auto bg-rose-300 p-5 text-[20px] rounded-3xl'>
					{'В избранном пусто :('}
				</p>
			</div>
		);

	return (
		<>
			<h2 className='text-black flex justify-center mt-5 font-semibold text-[20px]'>
				Избранное
			</h2>
			<div className='flex w-auto justify-center pt-5 mx-auto w-screen'>
				<div className='bg-slate-600 rounded-xl py-5 px-5 max-h-[300px] overflow-y-scroll'>
					<ul className='list-none'>
						{favorites.map(f => (
							<li
								className='border rounded-2xl border-slate-500 bg-sky-100 p-3 mb-3'
								key={f}>
								<a href={f} target='_blank'>
									{f}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}

export default Favorites;
