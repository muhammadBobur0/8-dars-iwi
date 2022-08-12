import { Link } from 'react-router-dom';

export const Iteam = ({ top }) => {
	return (
		<>
			{top.length &&
				top?.map((el) => {
					return (
						<li className='iteam' key={el.id}>
							<Link to={`/movies/${el.id}`} className='links'>
								<img
									src={'https://image.tmdb.org/t/p/w500/' + el.poster_path}
									width='270'
									height={405}
									alt={el.original_title}
								/>
								<h2>Title : {el.original_title}</h2>
								{/* <p className='text'> overview: {el.overview}</p> */}
								<p>release_date :{el.release_date}</p>
								<p className='movie-card-rating'> {el.vote_average}</p>
								<p> vote_count : {el.vote_count}</p>
								<p>vote_count: {el.vote_count}</p>
							</Link>
						</li>
					);
				})}
		</>
	);
};
