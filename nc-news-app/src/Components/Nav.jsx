import React from 'react';
import { Link } from '@reach/router';

const Nav = () => {
	return (
		<nav>
			<Link to="/">Home.</Link>
			<Link to="/football">Football.</Link>
			<Link to="/cooking">Cooking.</Link>
			<Link to="/coding">Coding.</Link>
		</nav>
	);
};
export default Nav;
