import React from 'react';
import { getComments } from '../API';

class CommentsList extends React.Component {
	state = {
		comments_list: [],
		isLoading: true
	};

	render() {
		if (this.state.isLoading === true) return <p>Loading....</p>;
		return this.state.comments_list.map((comment) => {
			return (
				<label key={comment.comment_id}>
					<li>
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
				</label>
			);
		});
	}

	componentDidUpdate(prevProps) {
		if (this.props.article_id !== prevProps.article_id) this.fecthComments();
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
}

export default CommentsList;
