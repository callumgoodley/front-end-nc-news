import React from 'react';
import { Link } from '@reach/router';

const Nav = () => {
	return (
		<nav id="topic_link">
			<Link id="topic_link" to="/articles">
				All
			</Link>
			<Link id="topic_link" to="/articles/football">
				Football
			</Link>
			<Link id="topic_link" to="/articles/cooking">
				Cooking
			</Link>
			<Link id="topic_link" to="/articles/coding">
				Coding
			</Link>
		</nav>
	);
};
export default Nav;
