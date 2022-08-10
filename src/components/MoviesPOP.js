import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export const MoviesPOP = () => {
	const [array, setarray] = useState([]);

	useEffect(() => {
		axios
			.get(
				'https://api.themoviedb.org/3/movie/popular?api_key=db6051e2af08e90ef09bfced7f5a8703',
			)
			.then(function (response) {
				setarray(response.data.results);
			})

			.catch(function (error) {
				console.log(error);
			});
	}, []);

	return (
		<div className='movises'>
			<ul className='list'>
				{array.length &&
					array?.map((el) => {
						return (
							<li className='iteam' key={el.id}>
								<img
									src={'https://image.tmdb.org/t/p/w500/' + el.poster_path}
									width='270'
									height={405}
									alt={el.original_title}
								/>

								<h2>Title : {el.original_title}</h2>
								<p className='text'> overview: {el.overview}</p>
								<p>release_date :{el.release_date}</p>
								<p className='movie-card-rating'> {el.vote_average}</p>
								<p> vote_count : {el.vote_count}</p>
								<p>vote_count: {el.vote_count}</p>
							</li>
						);
					})}
			</ul>
		</div>
	);
};
