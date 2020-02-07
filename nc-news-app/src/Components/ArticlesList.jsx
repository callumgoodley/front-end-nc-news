import React from 'react';
import { getArticles } from '../API';
import ArticleCard from './ArticleCard';

class ArticlesList extends React.Component {
	state = {
		articles_list: [],
		isLoading: true,
		err: null
	};

	render() {
		if (this.state.isLoading === true) return <p>Loading....</p>;
		if (this.state.err) return <p id="error">{this.state.err.status}: Article not found.</p>;
		return (
			<ArticleCard
				votes={this.state.articles_list.votes}
				article_id={this.props.article_id}
				articles_list={this.state.articles_list}
				user={this.props.user}
			/>
		);
	}
	componentDidUpdate(prevProps) {
		if (this.props.sort_by !== prevProps.sort_by) this.fetchArticles();
		if (this.props.topic !== prevProps.topic) this.fetchArticles();
	}

	componentDidMount() {
		this.fetchArticles();
	}

	fetchArticles = () => {
		const { topic, sort_by, article_id } = this.props;
		getArticles(topic, sort_by, article_id)
			.then((articles) => {
				this.setState({ articles_list: articles, isLoading: false });
			})
			.catch((err) => this.setState({ err: err.response, isLoading: false }));
	};
}

export default ArticlesList;
