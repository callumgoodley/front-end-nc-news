import React from 'react';
import { Link } from '@reach/router';

const SortByInTopics = (props) => {
	let { topic } = props;
	return (
		<nav id="sort_by">
			<Link id="sort_by" to={`/${topic}/sort/created_at`}>
				Latest
			</Link>
			<br />
			<Link id="sort_by" to={`/${topic}/sort/votes`}>
				Top voted
			</Link>
			<br />
			<Link id="sort_by" to={`/${topic}/sort/comment_count`}>
				Most comments
			</Link>
		</nav>
	);
};
export default SortByInTopics;
