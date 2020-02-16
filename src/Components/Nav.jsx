import React from 'react';
import { Link } from '@reach/router';

const Nav = () => {
	return (
		<nav id="topic_link">
			<Link id="topic_link" to="/articles">
				All
			</Link>
			<Link id="topic_link" to="/articles/topic/football">
				Football
			</Link>
			<Link id="topic_link" to="/articles/topic/cooking">
				Cooking
			</Link>
			<Link id="topic_link" to="/articles/topic/coding">
				Coding
			</Link>
		</nav>
	);
};
export default Nav;
