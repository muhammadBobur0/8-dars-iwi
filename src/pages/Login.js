import axios from 'axios';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { UseAuth } from '../hook/useAuth';

export const Login = () => {
	const email = useRef();
	const paswword = useRef();
	const { token, setToken } = UseAuth();

	const naviget = useNavigate();

	const login = () => {
		axios
			.post('https://reqres.in/api/login', {
				email: email.current.value,
				password: paswword.current.value,
			})
			.then(function (response) {
				setToken(response.data);
				if (token) {
					naviget('/');
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<div className='login'>
			<form
				onSubmit={(evt) => {
					evt.preventDefault();
					login();
				}}>
				<input ref={email} placeholder='email...' type='email' />
				<input ref={paswword} placeholder='password...' type='password' />
				<button type='submit'> submit </button>
			</form>
		</div>
	);
};
