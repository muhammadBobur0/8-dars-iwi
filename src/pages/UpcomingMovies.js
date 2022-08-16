import { Pagination } from '@mui/material';
const { default: axios } = require('axios');
const { useState, useEffect } = require('react');
const { Iteam } = require('../components/Iteam');

const UpcomingMovies = () => {
	const [top, setTop] = useState([]);
	const [page, setPage] = useState();

	const [activepage, setActive] = useState(1);

	useEffect(() => {
		axios
			.get(
				'https://api.themoviedb.org/3/movie/upcoming?api_key=db6051e2af08e90ef09bfced7f5a8703',
				{
					params: {
						page: activepage,
					},
				},
			)
			.then(function (response) {
				setTop(response.data.results);
				setPage(response.data.total_pages);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, [activepage]);

	return (
		<div>
			<ul className='list'>
				<Iteam top={top} />
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

export default UpcomingMovies;
