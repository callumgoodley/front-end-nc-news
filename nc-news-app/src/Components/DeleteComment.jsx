import React from 'react';

const DeleteComment = (props) => {
	return (
		<button key="delete button" value={props.comment_id} onClick={props.removeComment}>
			Delete comment.
		</button>
	);
};

export default DeleteComment;