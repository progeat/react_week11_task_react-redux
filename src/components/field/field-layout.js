import PropTypes from 'prop-types';
import styles from './field.module.css';

export const FieldLayout = ({ children }) => (
	<div className={styles.field}>{children}</div>
);

FieldLayout.propTypes = {
	field: PropTypes.array,
	onClickButton: PropTypes.func,
};
