import React from 'react';
import { Link } from '@reach/router';

const SortBy = () => {
	return (
		<nav id="sort_by">
			<Link id="sort_by" to={`/sort/created_at`}>
				Latest
			</Link>
			<br />
			<Link id="sort_by" to={`/sort/votes`}>
				Top voted
			</Link>
			<br />
			<Link id="sort_by" to={`/sort/comment_count`}>
				Most comments
			</Link>
		</nav>
	);
};
export default SortBy;
