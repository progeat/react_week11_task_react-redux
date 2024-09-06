import { WIN_PATTERNS } from '../constants';

export const handlerClickCell = ({
	cellIndex,
	field,
	currentPlayer,
	isGameEnded,
	isDraw,
	dispatch,
}) => {
	if (field[cellIndex] === '' && !isGameEnded) {
		const updateField = field.map((elem, index) =>
			cellIndex === index ? currentPlayer : elem,
		);

		dispatch({ type: 'SET_FIELD', payload: updateField });

		const isWinner = WIN_PATTERNS.some((pattern) =>
			pattern.every((indexPattern) => updateField[indexPattern] === currentPlayer),
		);

		if (isWinner) {
			dispatch({ type: 'SET_GAME_ENDED', payload: true });
		} else {
			const newCurrentPlayer = currentPlayer === 'X' ? '0' : 'X';
			dispatch({ type: 'SET_CURRENT_PLAYER', payload: newCurrentPlayer });
		}

		const isFullCells = updateField.every((cell) => cell !== '');

		if (!isDraw && isFullCells && !isGameEnded)
			dispatch({ type: 'SET_DRAW', payload: true });
	}
};
