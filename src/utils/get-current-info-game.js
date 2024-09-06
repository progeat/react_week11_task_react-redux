export const getCurrentInfoGame = (currentPlayer, isGameEnded, isDraw) =>
	isGameEnded
		? `Победа: ${currentPlayer}`
		: isDraw
			? 'Ничья'
			: `Текущий ход: ${currentPlayer}`;
