import React from 'react';

class CommentBox extends React.Component {
	state = {
		inputValue: ''
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Add a comment:
					<input type="text" name="inputValue" value={this.state.inputValue} onChange={this.handleChange} />
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
