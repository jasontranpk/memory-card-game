import '../style/Header.css';

function Header(props) {
	return (
		<header>
			<h1>MEMORY CARD GAME</h1>

			<div className='round'>Round {props.score}</div>
			<div className='score-board'>
				<p className='fieldName'>Score:</p>
				<p> {props.score}</p>
				<p className='fieldName'>Best Score: </p>
				<p>{props.bestScore}</p>
			</div>
		</header>
	);
}
export default Header;
