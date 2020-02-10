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

export const postComment = (article_id, inputValue, userName) => {
	return axios
		.post(`http://callum-goodley-nc-news-app.herokuapp.com/api/articles/${article_id}/comments`, {
			body: inputValue,
			username: userName
		})
		.then((comments) => {
			return comments.data.comment;
		});
};

export const deleteComment = (comment_id) => {
	return axios.delete(`http://callum-goodley-nc-news-app.herokuapp.com/api/comments/${comment_id}`).then(() => {
		return 'comment deleted';
	});
};

export const incrementVotes = (comment_id, article_id, increment_by) => {
	if (comment_id) {
		return axios
			.patch(`http://callum-goodley-nc-news-app.herokuapp.com/api/comments/${comment_id}`, {
				inc_votes: increment_by
			})
			.then((comment) => {
				return comment.data.comment;
			});
	} else {
		return axios
			.patch(`http://callum-goodley-nc-news-app.herokuapp.com/api/articles/${article_id}`, {
				inc_votes: increment_by
			})
			.then((comment) => {
				return comment.data.comment;
			});
	}
};
