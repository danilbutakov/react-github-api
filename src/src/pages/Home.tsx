import { useState, useEffect } from 'react';
import { useDebounce } from '../hooks/debounce';
import {
	useLazyGetUserReposQuery,
	useSearchUsersQuery
} from '../store/github/github.api';
import { Link } from 'react-router-dom';
import RepoCard from '../components/RepoCard';

function Home() {
	const [search, setSearch] = useState('danilbutakov');
	const [dropDown, setDropDown] = useState(false);
	const debounced = useDebounce(search);
	const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
		skip: debounced.length < 3,
		refetchOnFocus: true
	});
	const [fetchRepos, { isLoading: areReposLoading, data: repos }] =
		useLazyGetUserReposQuery();

	useEffect(() => {
		setDropDown(debounced.length > 3 && data?.length! > 0);
	}, [debounced, data]);

	const clickHandler = (username: string) => {
		fetchRepos(username);
		setDropDown(false);
	};

	return (
		<div className='flex justify-center pt-10 px-5 mx-auto w-screen h-screen'>
			{isError && (
				<p className='text-center text-red-600'>Something went wrong...</p>
			)}
			<div className='relative w-[560px] h-full'>
				<input
					type='text'
					className='border border-slate-500  rounded-2xl py-2 px-4 w-full h=[42px] mb-2'
					placeholder='Поиск профиля в GitHub'
					value={search}
					onChange={e => setSearch(e.target.value)}
				/>
				{dropDown && (
					<ul className='list-none absolute top-[70px] left-0 right-0 max-h-full overflow-y-scroll bg-slate-900 shadow-md text-gray-500 rounded-md p-4'>
						{isLoading && <p className='text-center'>Загрузка...</p>}
						{data?.map(user => (
							<li
								key={user.id}
								onClick={() => clickHandler(user.login)}
								className='flex gap-2 flex-col py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer'>
								{user.login}
							</li>
						))}
					</ul>
				)}
				{areReposLoading && <p>Загрузка репозиториев...</p>}
				<div className='max-h-[300px] overflow-y-scroll'>
					{repos?.map(repo => (
						<RepoCard repo={repo} key={repo.id} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Home;
