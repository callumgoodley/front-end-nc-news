import React from 'react';

class LoginPage extends React.Component {
	state = {
		inputValue: 'guest'
	};

	render() {
		return (
			<section>
				<form id="login" onSubmit={this.handleSubmit}>
					<select onChange={this.handleChange}>
						<option>guest</option>
						<option>tickle122</option>
						<option>grumpy19</option>
						<option>happyamy2016</option>
						<option>cooljmessy</option>
						<option>weegembump</option>
						<option>jessjelly</option>
					</select>
					<button type="submit">login</button>
				</form>
			</section>
		);
	}

	handleSubmit = (event) => {
		const user = this.state.inputValue;
		event.preventDefault();
		this.props.setUser(user);
	};
	handleChange = (event) => {
		const input = event.target.value;
		this.setState({ inputValue: input });
	};
}

export default LoginPage;
