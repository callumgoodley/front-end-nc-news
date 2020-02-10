import React from 'react';
import { incrementVotes } from '../API';

class CommentsVoteButton extends React.Component {
	state = {
		voteChange: 0,
		err: null
	};

	render() {
		return (
			<main id="vote_button">
				<button
					key="vote up button"
					name={1}
					value={this.props.comment_id}
					onClick={this.handleClick}
					disabled={this.state.voteChange === 1}
				>
					vote ↑
				</button>
				<p>votes: {this.props.votes + this.state.voteChange}</p>
				<button
					key="vote down button"
					name={-1}
					value={this.props.comment_id}
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
		const comment_id = event.target.value;
		const article_id = null;
		incrementVotes(comment_id, article_id, increment_by);
		this.setState((currentState) => {
			return { voteChange: currentState.voteChange + increment_by };
		});
	};
}

export default CommentsVoteButton;
