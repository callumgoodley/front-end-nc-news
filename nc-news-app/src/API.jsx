import axios from 'axios';

export const getArticles = (topic, sort_by, article_id) => {
	if (article_id) {
		return axios
			.get(`http://callum-goodley-nc-news-app.herokuapp.com/api/articles/${article_id}`)
			.then((article) => {
				return article.data.article;
			});
	} else {
		return axios
			.get(`http://callum-goodley-nc-news-app.herokuapp.com/api/articles`, {
				params: {
					topic: topic,
					sort_by: sort_by
				}
			})
			.then((articles) => {
				return articles.data.articles;
			});
	}
};

export const getComments = (article_id) => {
	return axios
		.get(`http://callum-goodley-nc-news-app.herokuapp.com/api/articles/${article_id}/comments`)
		.then((comments) => {
			return comments.data.comments;
		});
};
