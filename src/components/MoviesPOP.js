import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Iteam } from './Iteam';

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
				<Iteam top={array} />
			</ul>
		</div>
	);
};
