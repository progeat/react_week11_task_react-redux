import { store } from '../store';

export const handlerReset = () => store.dispatch({ type: 'RESTART_GAME' });
