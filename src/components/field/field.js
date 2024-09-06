import { useEffect, useState } from 'react';
import { FieldLayout } from './field-layout';
import { store } from '../../store';
import { handlerClickCell } from '../../handlers';
import styles from './field.module.css';

export const Field = () => {
	const [stateField, setStateField] = useState(store.getState());
	const { field, currentPlayer, isGameEnded, isDraw } = stateField;

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setStateField(store.getState());
		});

		return unsubscribe;
	}, []);

	const dispatch = store.dispatch;

	const cells = field.map((elem, index) => (
		<button
			className={styles.button}
			key={index}
			onClick={() =>
				handlerClickCell({
					cellIndex: index,
					field,
					currentPlayer,
					isGameEnded,
					isDraw,
					dispatch,
				})
			}
		>
			{elem}
		</button>
	));

	return <FieldLayout>{cells}</FieldLayout>;
};
