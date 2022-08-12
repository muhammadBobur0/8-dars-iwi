const { default: axios } = require('axios');
const { useState, useEffect } = require('react');
const { Iteam } = require('../components/Iteam');

const TopMovies = () => {
	const [top, setTop] = useState([]);

	useEffect(() => {
		axios
			.get(
				'https://api.themoviedb.org/3/movie/top_rated?api_key=db6051e2af08e90ef09bfced7f5a8703',
			)
			.then(function (response) {
				setTop(response.data.results);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	return (
		<div>
			<ul className='list'>{<Iteam top={top} />}</ul>
		</div>
	);
};

export default TopMovies;
