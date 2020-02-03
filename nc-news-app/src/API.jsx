import axios from 'axios';

export const getArticles = (topic, sort_by, article_id) => {
	console.log(article_id);
	return axios
		.get('http://callum-goodley-nc-news-app.herokuapp.com/api/articles', {
			params: {
				topic: topic,
				sort_by: sort_by,
				article_id: article_id
			}
		})
		.then((articles) => {
			return articles.data.articles;
		});
};
