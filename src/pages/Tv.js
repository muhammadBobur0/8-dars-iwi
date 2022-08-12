const { default: axios } = require('axios');
const { useState, useEffect } = require('react');
const { TvIteam } = require('../components/TvIteam');

const TV = () => {
	const [top, setTop] = useState([]);

	useEffect(() => {
		axios
			.get(
				'https://api.themoviedb.org/3/tv/popular?api_key=db6051e2af08e90ef09bfced7f5a8703',
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
			<ul className='list'>
				<TvIteam top={top} />
			</ul>
		</div>
	);
};

export default TV;
