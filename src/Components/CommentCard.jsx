import React from 'react';
import CommentsVoteButton from './CommentsVoteButton';
import DeleteComment from './DeleteComment';

const CommentCard = (props) => {
	return props.comments_list.map((comment) => {
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
					<CommentsVoteButton
						votes={comment.votes}
						comment_id={comment.comment_id}
						voteDown={props.voteDown}
					/>
				</li>
				{props.user === comment.author ? (
					<DeleteComment
						key={`delete comment: ${comment.comment_id}`}
						removeComment={props.removeComment}
						comment_id={comment.comment_id}
					/>
				) : null}
			</ul>
		);
	});
};

export default CommentCard;
