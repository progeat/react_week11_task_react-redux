import { useEffect, useState } from 'react';
import { InformationLayout } from './information-layout';
import { store } from '../../store';
import { getCurrentInfoGame } from '../../utils';

export const Information = () => {
	const [state, setState] = useState(store.getState());
	const { currentPlayer, isDraw, isGameEnded } = state;

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});

		return unsubscribe;
	}, []);

	const currentInfoGame = getCurrentInfoGame(currentPlayer, isGameEnded, isDraw);

	return (
		<>
			<InformationLayout>{currentInfoGame}</InformationLayout>
		</>
	);
};
