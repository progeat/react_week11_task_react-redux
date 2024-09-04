import PropTypes from 'prop-types';
import { FieldLayout } from './field-layout';
import { WIN_PATTERNS } from '../../constants';
import styles from './field.module.css';

export const Field = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
}) => {
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
				setIsGameEnded(true);
			} else {
				setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
			}

			setField(updateField);
		}
	};

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
