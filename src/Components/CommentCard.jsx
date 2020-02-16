import React from 'react';
import VoteButton from './VoteButton';
import DeleteComment from './DeleteComment';

const CommentCard = ({ comments_list, user, removeComment, voteDown }) => {
	return comments_list.map((comment) => {
		const date = new Date(comment.created_at);
		return (
			<ul id="card" key={`${comment.comment_id} card`}>
				<li key={comment.comment_id}>
					User: {comment.author}
					<br />
					<br />
					Comment: {comment.body}
					<br />
					<br />
					Votes: {comment.votes} Posted: {date.toString()}
					<br />
					<br />
					<VoteButton votes={comment.votes} comment_id={comment.comment_id} voteDown={voteDown} />
				</li>
				{user === comment.author ? (
					<DeleteComment
						key={`delete comment: ${comment.comment_id}`}
						removeComment={removeComment}
						comment_id={comment.comment_id}
					/>
				) : null}
			</ul>
		);
	});
};

export default CommentCard;
