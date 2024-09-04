const initialState = {
	// ...
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'SET_CURRENT_PLAYER':
			return {
				// ...
			};
		case 'SET_FIELD':
		// ...
		case 'RESTART_GAME':
			return initialState;
		default:
			return state;
	}
};
