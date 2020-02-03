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

function App() {
	return (
		<div className="App">
			<Header />
			<Nav />
			<br />
			<Router>
				<Articles path="/" />
				<ArticlesByTopic path="/:topic" />
				<ArticlesSortedBy path="/sort/:sort_by" />
				<ArticlesByTopicSorted path="/:topic/sort/:sort_by" />
				<Article path="/:article_id" />
			</Router>
		</div>
	);
}

export default App;
