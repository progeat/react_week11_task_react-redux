import { useEffect, useState } from 'react';
import { GameLayout } from './game-layout';
// import { FIELD_PARAM } from './constants';
import { store } from './store';

export const Game = () => {
	// const [currentPlayer, setCurrentPlayer] = useState('X');
	// const [isGameEnded, setIsGameEnded] = useState(false);
	// const [isDraw, setIsDraw] = useState(false);
	// const [field, setField] = useState(FIELD_PARAM);

	const [state, setState] = useState(store.getState());
	const { field, isDraw, isGameEnded } = state;

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});

		return unsubscribe;
	}, []);

	const isFullCells = field.every((cell) => cell !== '');

	if (!isDraw && isFullCells && !isGameEnded)
		store.dispatch({ type: 'SET_DRAW', payload: true });

	const onClickReset = () => {
		store.dispatch({ type: 'RESTART_GAME' });
		// setCurrentPlayer('X');
		// setIsGameEnded(false);
		// setIsDraw(false);
		// setField(FIELD_PARAM);
	};

	return (
		<GameLayout
			// currentPlayer={currentPlayer}
			// setCurrentPlayer={setCurrentPlayer}
			// isGameEnded={isGameEnded}
			// setIsGameEnded={setIsGameEnded}
			// isDraw={isDraw}
			// field={field}
			// setField={setField}
			onClickReset={onClickReset}
		/>
	);
};
