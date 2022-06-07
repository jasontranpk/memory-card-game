function Header(props) {
	return (
		<header>
			<h1>MEMORY CARD GAME</h1>

			<div className='round'>Round 9</div>
			<div className='score-board'>
				<p>Score: {props.score}</p>
				<p>Best Score: {props.bestScore}</p>
			</div>
		</header>
	);
}
export default Header;
