import PropTypes from 'prop-types';
import { FieldLayout } from './field-layout';
import { WIN_PATTERNS } from '../../constants';
import styles from './field.module.css';
import { store } from '../../store';
import { useEffect, useState } from 'react';

export const Field = () => {
	const [state, setState] = useState(store.getState());
	const { field, currentPlayer, isGameEnded } = state;

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});

		return unsubscribe;
	}, []);

	const onClickButton = (cellIndex) => {
		if (field[cellIndex] === '' && !isGameEnded) {
			const updateField = field.map((elem, index) =>
				cellIndex === index ? currentPlayer : elem,
			);

			const isWinner = WIN_PATTERNS.some((pattern) =>
				pattern.every(
					(indexPattern) => updateField[indexPattern] === currentPlayer,
				),
			);

			if (isWinner) {
				store.dispatch({ type: 'SET_GAME_ENDED', payload: true });
				// setIsGameEnded(true);
			} else {
				const newCurrentPlayer = currentPlayer === 'X' ? '0' : 'X';
				store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: newCurrentPlayer });
				// setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
			}

			const action = { type: 'SET_FIELD', payload: updateField };
			store.dispatch(action);
			// setField(updateField);
		}
	};

	console.log('Поле', field);
	console.log('Игрок', currentPlayer);

	const cells = field.map((elem, index) => (
		<button
			className={styles.button}
			key={index}
			onClick={() => onClickButton(index)}
		>
			{elem}
		</button>
	));

	return <FieldLayout>{cells}</FieldLayout>;
};

Field.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
};
