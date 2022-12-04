import React, { useState } from 'react';
import { IRepo } from '../models/models';
import { useActions } from '../hooks/actions';
import { useAppSelector } from '../hooks/redux';

function RepoCard({ repo }: { repo: IRepo }) {
	const { addFavorite, removeFavorite } = useActions();
	const { favorites } = useAppSelector(state => state.github);

	const [isFav, setIsFav] = useState(favorites.includes(repo.html_url));

	const addToFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		addFavorite(repo.html_url);
		setIsFav(true);
	};

	const removeFromFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		removeFavorite(repo.html_url);
		setIsFav(false);
	};
	return (
		<div className='border py-4 px-5 my-2 rounded hover:shadow-md hover:bg-gray-100 transition-all'>
			<a href={repo.html_url} target='_blank'>
				<h2 className='text-lg font-bold'>{repo.full_name}</h2>
				<p className='text-sm'>
					Forks: <span className='font-bold mr-2'>{repo.forks}</span>
					Watchers: <span className='font-bold'>{repo.watchers}</span>
				</p>
				<p className='text-sm font-thin'>{repo?.description}</p>

				{!isFav && (
					<button
						className='py-2 px-4 mt-2 bg-teal-700 text-white rounded hover:shadow-md transition-all'
						onClick={addToFavorite}>
						Добавить
					</button>
				)}
				{isFav && (
					<button
						className='py-2 px-4 mt-2 bg-rose-400 text-white rounded hover:shadow-md transition-all'
						onClick={removeFromFavorite}>
						Удалить
					</button>
				)}
			</a>
		</div>
	);
}

export default RepoCard;
