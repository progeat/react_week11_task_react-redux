import PropTypes from 'prop-types';
import styles from './information.module.css';

export const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => (
	<div className={styles.info}>
		{isGameEnded
			? `Победа: ${currentPlayer}`
			: isDraw
				? 'Ничья'
				: `Текущий ход: ${currentPlayer}`}
	</div>
);

InformationLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
};
