import React from 'react';
import { incrementVotes } from '../API';

class ArticleVoteButton extends React.Component {
	state = {
		voteChange: 0,
		err: null
	};

	render() {
		return (
			<main>
				<button
					key="vote up button"
					name={1}
					value={this.props.article_id}
					onClick={this.handleClick}
					disabled={this.state.voteChange === 1}
				>
					vote ↑
				</button>
				<p>votes: {this.props.votes + this.state.voteChange}</p>
				<button
					key="vote down button"
					name={-1}
					value={this.props.article_id}
					onClick={this.handleClick}
					disabled={this.state.voteChange === -1}
				>
					vote ↓
				</button>
			</main>
		);
	}
	handleClick = (event) => {
		const increment_by = Number(event.target.name);
		const article_id = event.target.value;
		const comment_id = null;
		incrementVotes(comment_id, article_id, increment_by);
		this.setState((currentState) => {
			return { voteChange: currentState.voteChange + increment_by };
		});
	};
}

export default ArticleVoteButton;
