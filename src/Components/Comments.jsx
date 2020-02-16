import React from 'react';
import CommentsList from './CommentsList';

const Comments = ({ user, article_id }) => {
	return (
		<main id="comment_section">
			<h3>Comments...</h3>
			<CommentsList user={user} article_id={article_id} />
		</main>
	);
};

export default Comments;
