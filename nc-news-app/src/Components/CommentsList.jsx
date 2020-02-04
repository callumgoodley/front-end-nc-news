import React from 'react';
import { getComments, postComment, deleteComment } from '../API';
import CommentBox from './CommentBox';

class CommentsList extends React.Component {
	state = {
		comments_list: [],
		isLoading: true,
		userName: 'tickle122'
	};

	render() {
		if (this.state.isLoading === true) return <p>Loading....</p>;
		return (
			<main>
				{this.state.comments_list.map((comment) => {
					return (
						<label key={comment.comment_id}>
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
								{this.state.userName === comment.author ? (
									<button
										key={comment.comment_id}
										value={comment.comment_id}
										onClick={this.removeComment}
									>
										Delete comment.
									</button>
								) : null}
							</li>
						</label>
					);
				})}
				<CommentBox
					article_id={this.props.article_id}
					userName={this.state.userName}
					addComment={this.addComment}
				/>
			</main>
		);
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.comments_list !== prevState.comments_list) this.fetchComments();
		if (this.props.article_id !== prevProps.article_id) this.fetchComments();
	}
	componentDidMount() {
		this.fetchComments();
	}

	fetchComments = () => {
		const { article_id } = this.props;
		getComments(article_id).then((comments) => {
			this.setState({ comments_list: comments, isLoading: false });
		});
	};

	addComment = ({ inputValue }) => {
		postComment(this.props.article_id, inputValue, this.state.userName).then((comment) => {
			this.setState((currentState) => {
				const newCommentsList = [ ...currentState.comments_list, comment ];
				return { comments_list: newCommentsList };
			});
		});
	};

	removeComment = (event) => {
		const comment_id = event.target.value;
		deleteComment(comment_id).then((comment) => {
			this.setState((currentState) => {
				return { comments_list: [ ...currentState.comments_list ] };
			});
		});
	};
}

export default CommentsList;
