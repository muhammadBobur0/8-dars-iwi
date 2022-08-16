import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Home } from '../pages/home';
import TopMovies from '../pages/TopMovies';
import { MoviesPOP } from './MoviesPOP';
import UpcomingMovies from '../pages/UpcomingMovies';
import TV from '../pages/Tv';
import { Single } from './single';
import Search from '../pages/Search';
import { useEffect, useState } from 'react';

export const Popalation = () => {
	const [Url, setUrl] = useState('');
	const page = useNavigate();

	useEffect(() => {
		if (Url.trim().length) {
			page('/serach/' + Url);
		} else {
			page('/');
		}
	}, [Url]);

	return (
		<>
			<div className='header'>
				<nav className='header-nav'>
					<Link className='links' to={'/'}>
						Home Page
					</Link>
					<Link className='links' to={'/population'}>
						population Movies
					</Link>
					<Link className='links' to={'/Top-rated'}>
						Top-rated Movies
					</Link>
					<Link className='links' to={'/UpcomingMovies'}>
						Up coming Movies
					</Link>
					<Link className='links' to={'/Tv-show'}>
						Tv-show
					</Link>
				</nav>

				<input
					onChange={(evt) => {
						setUrl(evt.target.value);
					}}
					type='search'
					placeholder='Search'
					className='input'
				/>
			</div>

			<div className='body-content'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/population' element={<MoviesPOP />} />
					<Route path='/Top-rated' element={<TopMovies />} />
					<Route path='/UpcomingMovies' element={<UpcomingMovies />} />
					<Route path='/Tv-show' element={<TV />} />
					<Route path='/movies/:id' element={<Single />} />
					<Route path='/serach/:query' element={<Search />} />
					<Route
						path='*'
						element={<h1 className='error'>Error 404 page not found</h1>}
					/>
				</Routes>
			</div>
		</>
	);
};
