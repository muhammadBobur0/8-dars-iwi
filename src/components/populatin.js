import { Route, Routes, Link } from 'react-router-dom';
import { Home } from '../pages/home';
import TopMovies from '../pages/TopMovies';
import { MoviesPOP } from './MoviesPOP';
import UpcomingMovies from '../pages/UpcomingMovies';
import TV from '../pages/Tv';
import { Single } from './single';
import { TvIteam } from './TvIteam';

export const Popalation = () => {
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

				<input type='search' placeholder='Search' className='input' />
			</div>

			<div className='body-content'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/population' element={<MoviesPOP />} />
					<Route path='/Top-rated' element={<TopMovies />} />
					<Route path='/UpcomingMovies' element={<UpcomingMovies />} />
					<Route path='/Tv-show' element={<TV />} />
					<Route path='/movies/:id' element={<Single />} />
				</Routes>
			</div>
		</>
	);
};
