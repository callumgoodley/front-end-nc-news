import React from 'react';
import { Link } from '@reach/router';

const Login = (props) => {
	return (
		<section id="logged_in">
			<p>user: {props.user}</p>
			{props.user === 'guest' ? (
				<Link to="/login" id="logged_in">
					Login
				</Link>
			) : (
				<Link to="/login" id="logged_in">
					Change user
				</Link>
			)}
		</section>
	);
};

export default Login;
