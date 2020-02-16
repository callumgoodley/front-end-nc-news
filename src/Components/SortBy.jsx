import React from 'react';
import { Link } from '@reach/router';

const SortBy = () => {
	return (
		<nav id="sort_by">
			<Link id="sort_by" to={`/articles/sort_by/created_at`}>
				Latest
			</Link>
			<br />
			<Link id="sort_by" to={`/articles/sort_by/votes`}>
				Top voted
			</Link>
			<br />
			<Link id="sort_by" to={`/articles/sort_by/comment_count`}>
				Most comments
			</Link>
		</nav>
	);
};
export default SortBy;
