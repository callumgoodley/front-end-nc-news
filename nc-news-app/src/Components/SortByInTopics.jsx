import React from 'react';
import { Link } from '@reach/router';

const SortByInTopics = (props) => {
	let { topic, sort_by } = props;
	return (
		<nav>
			<p>Sort by:</p>
			<Link to={`/${topic}/sort/created_at`}>Latest.</Link>
			<Link to={`/${topic}/sort/votes`}>Top voted.</Link>
			<Link to={`/${topic}/sort/comment_count`}>Most comments.</Link>
		</nav>
	);
};
export default SortByInTopics;
