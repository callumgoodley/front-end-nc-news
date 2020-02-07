import React from 'react';
import { Link } from '@reach/router';

const Nav = () => {
	return (
		<nav id="topic_link">
			<Link id="topic_link" to="/">
				All
			</Link>
			<Link id="topic_link" to="topic/football">
				Football
			</Link>
			<Link id="topic_link" to="topic/cooking">
				Cooking
			</Link>
			<Link id="topic_link" to="topic/coding">
				Coding
			</Link>
		</nav>
	);
};
export default Nav;
