import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const Single = () => {
	const { id } = useParams();
	const [movie, setmovie] = useState({});
	useEffect(() => {
		axios
			.get(
				`https://api.themoviedb.org/3/movie/${id}?api_key=db6051e2af08e90ef09bfced7f5a8703`,
			)
			.then(function (response) {
				setmovie(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, [id]);

	return (
		<div className='box'>
			<img
				className='backgraund'
				src={'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path}
				alt=''
			/>
			<div className='singlebox'>
				<div className='dflex'>
					<div>
						<img
							className='movie-poster'
							src={'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path}
							alt=''
						/>
					</div>
					<div className='text-box'>
						<h2>{movie.title}</h2>
						<p>{movie.overview}</p>
						<p>budget: {movie.budget}</p>
						<p>release - date: {movie.release_date}</p>
						<p>runtime: {movie.runtime} Min</p>
						<div className='dflex'>
							<span>genres:</span>
							{movie.genres?.map((el) => {
								return <span className='gener'> {el.name}</span>;
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
