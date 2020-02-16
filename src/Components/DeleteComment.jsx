import React from 'react';

const DeleteComment = ({ removeComment, comment_id }) => {
	return (
		<button type="submit" key="delete button" value={comment_id} onClick={removeComment}>
			Delete comment.
		</button>
	);
};

export default DeleteComment;
