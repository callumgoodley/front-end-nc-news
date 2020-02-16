import React from 'react';
import { incrementVotes } from '../API';

class VoteButton extends React.Component {
	state = {
		voteChange: 0
	};

	render() {
		const { voteChange } = this.state;
		const { comment_id, votes, article_id } = this.props;
		if (comment_id) {
			return (
				<main id="vote_button">
					<button
						key="vote up button"
						name={1}
						value={comment_id}
						onClick={this.handleClick}
						disabled={voteChange === 1}
					>
						vote ↑
					</button>
					<p>votes: {votes + voteChange}</p>
					<button
						key="vote down button"
						name={-1}
						value={comment_id}
						onClick={this.handleClick}
						disabled={voteChange === -1}
					>
						vote ↓
					</button>
				</main>
			);
		} else {
			return (
				<main id="vote_button">
					<button
						key="vote up button"
						name={1}
						id="vote_button"
						value={article_id}
						onClick={this.handleClick}
						disabled={voteChange === 1}
					>
						vote ↑
					</button>
					<p>votes: {votes + voteChange}</p>
					<button
						key="vote down button"
						name={-1}
						id="vote_button"
						value={article_id}
						onClick={this.handleClick}
						disabled={voteChange === -1}
					>
						vote ↓
					</button>
				</main>
			);
		}
	}
	handleClick = (event) => {
		const increment_by = Number(event.target.name);
		incrementVotes(this.props.comment_id, this.props.article_id, increment_by);
		this.setState((currentState) => {
			return { voteChange: currentState.voteChange + increment_by };
		});
	};
}

export default VoteButton;
