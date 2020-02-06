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
// import ErrorPage from './Components/ErrorPage';

function App() {
	return (
		<main className="App">
			<Header />
			<Nav />
			<br />
			<Router primary={false}>
				<Articles path="/" />
				<ArticlesByTopic path="topic/:topic" />
				<ArticlesSortedBy path="/sort/:sort_by" />
				<ArticlesByTopicSorted path="/:topic/sort/:sort_by" />
				<Article path="/:article_id" />
			</Router>
			{/* <ErrorPage default /> */}
		</main>
	);
}

export default App;
