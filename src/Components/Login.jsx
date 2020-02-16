import React from 'react';
import { Link } from '@reach/router';

const Login = ({ user }) => {
	return (
		<section id="logged_in">
			<p>user: {user}</p>
			{user === 'guest' ? (
				<Link to="/" id="logged_in">
					Login
				</Link>
			) : (
				<Link to="/" id="logged_in">
					Change user
				</Link>
			)}
		</section>
	);
};

export default Login;
