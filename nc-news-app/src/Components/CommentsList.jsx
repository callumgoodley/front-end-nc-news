import React from 'react';
import { getComments, postComment, deleteComment, incrementVotes } from '../API';
import CommentBox from './CommentBox';
import CommentCard from './CommentCard';

class CommentsList extends React.Component {
	state = {
		comments_list: [],
		isLoading: true,
		userName: 'tickle122',
		err: null
	};

	render() {
		if (this.state.isLoading === true) return <p>Loading....</p>;
		if (this.state.err) return <p>{this.state.err.status} No comments.</p>;
		return (
			<main id="comment_section" key="main">
				<CommentBox
					key="comment box"
					article_id={this.props.article_id}
					userName={this.state.userName}
					addComment={this.addComment}
				/>
				<CommentCard
					key="comment card"
					comments_list={this.state.comments_list}
					addComment={this.addComment}
					removeComment={this.removeComment}
					voteUp={this.voteUp}
					voteDown={this.voteDown}
					userName={this.state.userName}
				/>
				<br />
				<br />
			</main>
		);
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.comments_list[this.state.comments_list.length - 1] === 'comment deleted') this.fetchComments();
		if (this.state.comments_list.length !== prevState.comments_list.length) this.fetchComments();
		if (this.props.article_id !== prevProps.article_id) this.fetchComments();
	}
	componentDidMount() {
		this.fetchComments();
	}

	fetchComments = () => {
		const { article_id } = this.props;
		getComments(article_id)
			.then((comments) => {
				this.setState({ comments_list: comments, isLoading: false });
			})
			.catch((err) => {
				this.setState({ err: err.response, isLoading: false });
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
				return { comments_list: [ ...currentState.comments_list, comment ] };
			});
		});
	};
	voteUp = (event) => {
		const incrementDirection = event.target.name;
		const comment_id = event.target.value;
		incrementVotes(incrementDirection, comment_id);
	};

	voteDown = (event) => {
		const incrementDirection = event.target.name;
		const comment_id = event.target.value;
		incrementVotes(incrementDirection, comment_id);
	};
}

export default CommentsList;
