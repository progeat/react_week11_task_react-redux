import { Information, Field } from './components';
import { handlerReset } from './handlers';
import styles from './game.module.css';

export const GameLayout = () => {
	return (
		<div className={styles.game}>
			<Information />
			<Field />
			<button className={styles['button-reset']} onClick={handlerReset}>
				Начать заново
			</button>
		</div>
	);
};
