import React from 'react';

class CommentBox extends React.Component {
	state = {
		inputValue: ''
	};
	render() {
		return (
			<form id="comment_box" onSubmit={this.handleSubmit}>
				<label>
					<textarea
						rows="6"
						cols="95"
						type="text"
						name="inputValue"
						value={this.state.inputValue}
						placeholder="comment here"
						onChange={this.handleChange}
					/>
					{/* <input
						type="text"
						name="inputValue"
						value={this.state.inputValue}
						placeholder="comment here"
						onChange={this.handleChange}
					/> */}
					<br />
					<button>Submit comment.</button>
				</label>
			</form>
		);
	}
	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.addComment(this.state);
	};
}

export default CommentBox;
