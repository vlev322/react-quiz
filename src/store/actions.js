import { Axios } from "axios";
export const GET_QUESTIONS = 'GET_QUESTIONS';

export function getOptions() {
	return Axios.get('/api/quiz')
		.then(response => response.data)
		.then(data => ({
			type: GET_QUESTIONS,
			questions: data.quiz
		}));
};
