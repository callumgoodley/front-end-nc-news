import React from 'react';
import CommentsVoteButton from './CommentsVoteButton';
import DeleteComment from './DeleteComment';

const CommentCard = (props) => {
	return props.comments_list.map((comment) => {
		return (
			<ul id="comment_card" key={`${comment.comment_id} card`}>
				<li key={comment.comment_id}>
					User: {comment.author}
					<br />
					<br />
					Comment: {comment.body}
					<br />
					<br />
					Votes: {comment.votes} Created at: {comment.created_at}
					<br />
					<br />
				</li>

				{props.userName === comment.author ? (
					<DeleteComment
						key={`delete comment: ${comment.comment_id}`}
						removeComment={props.removeComment}
						comment_id={comment.comment_id}
					/>
				) : null}
				<CommentsVoteButton votes={comment.votes} comment_id={comment.comment_id} voteDown={props.voteDown} />
			</ul>
		);
	});
};

export default CommentCard;
