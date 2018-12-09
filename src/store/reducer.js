import * as actions from './actions';

export default function reducer(state, action)	{
	switch (Selection.type) {
		case actions.GET_QUESTIONS:
		return {
			...state,
			questions: actions
		}
		default: 
			return state;
	}
} 