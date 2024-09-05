import { FIELD_PARAM } from './constants';

const initialState = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	field: FIELD_PARAM,
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'SET_CURRENT_PLAYER':
			return {
				...state,
				currentPlayer: payload,
			};
		case 'SET_FIELD':
			return {
				...state,
				field: payload,
			};
		case 'RESTART_GAME':
			return initialState;
		default:
			return state;
	}
};
