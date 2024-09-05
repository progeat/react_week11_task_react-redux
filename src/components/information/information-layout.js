import { useEffect, useState } from 'react';
import { store } from '../../store';
import PropTypes from 'prop-types';
import styles from './information.module.css';

export const InformationLayout = () => {
	const [state, setState] = useState(store.getState());
	const { currentPlayer, isGameEnded, isDraw } = state;

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});

		return unsubscribe;
	}, []);

	return (
		<div className={styles.info}>
			{isGameEnded
				? `Победа: ${currentPlayer}`
				: isDraw
					? 'Ничья'
					: `Текущий ход: ${currentPlayer}`}
		</div>
	);
};

InformationLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
};
