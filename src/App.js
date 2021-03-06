import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Header from './Components/Header';
import Articles from './Components/Articles';
import ArticlesByTopic from './Components/ArticlesByTopic';
import Nav from './Components/Nav';
import ArticlesSortedBy from './Components/ArticlesSortedBy';
import ArticlesByTopicSorted from './Components/ArticlesByTopicSorted';
import Article from './Components/Article';
import Login from './Components/Login';
import LoginPage from './Components/LoginPage';

class App extends React.Component {
	state = {
		user: 'guest'
	};
	render() {
		return (
			<main className="App">
				<Login setUser={this.setUser} user={this.state.user} />
				<Header />
				<Nav />
				<br />
				<Router primary={false}>
					<LoginPage setUser={this.setUser} user={this.state.user} path="/" />
					<Articles path="/articles" user={this.state.user} />
					<ArticlesByTopic path="/articles/topic/:topic" user={this.state.user} />
					<ArticlesSortedBy path="/articles/sort_by/:sort_by" user={this.state.user} />
					<ArticlesByTopicSorted path="/articles/:topic/sort_by/:sort_by" user={this.state.user} />
					<Article path="/article/:article_id" user={this.state.user} />
				</Router>
			</main>
		);
	}

	setUser = (user) => {
		this.setState({ user });
	};
}

export default App;
