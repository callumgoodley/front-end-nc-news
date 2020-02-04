import React from 'react';
import { Link } from '@reach/router';

const Nav = () => {
	return (
		<nav>
			<Link to="/">All.</Link>
			<Link to="topic/football">Football.</Link>
			<Link to="topic/cooking">Cooking.</Link>
			<Link to="topic/coding">Coding.</Link>
		</nav>
	);
};
export default Nav;
