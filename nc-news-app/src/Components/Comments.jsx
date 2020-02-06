import React from 'react';
import CommentsList from './CommentsList';

const Comments = (props) => {
	return (
		<main id="comment_section">
			<h3>Comments...</h3>
			<CommentsList article_id={props.article_id} />
		</main>
	);
};

export default Comments;
