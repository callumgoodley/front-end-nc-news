import React from 'react';
import { Link } from '@reach/router';

const SortBy = () => {
	return (
		<nav>
			<p>Sort by:</p>
			<Link to={`/sort/created_at`}>Latest.</Link>
			<Link to={`/sort/votes`}>Top voted.</Link>
			<Link to={`/sort/comment_count`}>Most comments.</Link>
		</nav>
	);
};
export default SortBy;
