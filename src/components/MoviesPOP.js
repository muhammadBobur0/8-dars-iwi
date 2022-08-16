import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Iteam } from './Iteam';
import { Pagination } from '@mui/material';

export const MoviesPOP = () => {
	const [array, setarray] = useState([]);
	const [page, setPage] = useState();

	const [activepage, setActive] = useState(1);

	useEffect(() => {
		axios
			.get(
				'https://api.themoviedb.org/3/movie/popular?api_key=db6051e2af08e90ef09bfced7f5a8703',
				{
					params: {
						page: activepage,
					},
				},
			)
			.then(function (response) {
				setarray(response.data.results);
				setPage(response.data.total_pages);
			})

			.catch(function (error) {
				console.log(error);
			});
	}, [activepage]);

	return (
		<div className='movises'>
			<ul className='list'>
				<Iteam top={array} />
			</ul>
			<div className='page'>
				<Pagination
					onClick={(evt) => {
						if (evt.target.lastChild.ariaLabel === 'Go to next page') {
							setActive(activepage + 1);
						}
						if (evt.target.lastChild.ariaLabel === 'Go to previous page') {
							setActive(activepage - 1);
						} else {
							setActive(evt.target.innerText);
						}
					}}
					count={page}
					variant='outlined'
					color='primary'
				/>
			</div>
		</div>
	);
};
