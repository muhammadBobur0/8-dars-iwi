import { Route, Routes, Link } from 'react-router-dom';
import { Home } from '../pages/home';
import { MoviesPOP } from './MoviesPOP';

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
					<Link className='links' to={'/population'}>
						Top-rated Movies
					</Link>
					<Link className='links' to={'/population'}>
						Up coming Movies
					</Link>
					<Link className='links' to={'/population'}>
						Tv-show
					</Link>
				</nav>

				<input type='search' placeholder='Search' className='input' />
			</div>

			<div className='body-content'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/population' element={<MoviesPOP />} />
				</Routes>
			</div>
		</>
	);
};
