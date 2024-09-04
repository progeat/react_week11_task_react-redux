import { InformationLayout } from './information-layout';
import PropTypes from 'prop-types';

export const Information = ({ currentPlayer, isGameEnded, isDraw }) => {
	return (
		<>
			<InformationLayout
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
			/>
		</>
	);
};

Information.propTypes = {
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
};
