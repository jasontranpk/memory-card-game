import { useState, useEffect } from 'react';

function Main(props) {
	const [pickedPics, setPickedPics] = useState([]);
	const [score, setScore] = useState(0);
	// Import images dynamically function
	function importAll(r) {
		let images = {};
		let imagesArr = [];
		r.keys().forEach((item, index) => {
			images[item.replace('./', '')] = r(item);
		});
		imagesArr = Object.keys(images).map((key, index) => {
			let tempObj = {};
			tempObj['id'] = index;
			tempObj['name'] = key.replace(/\.[^/.]+$/, '');
			tempObj['src'] = images[key];
			return tempObj;
		});

		return imagesArr;
	}
	const images = importAll(
		require.context('../images/cards', false, /\.(png|jpe?g|svg)$/)
	);
	const NUMBER_OF_IMAGES = images.length;
	function randomNum(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	function randomCards() {
		let cardArray = [];
		let cardIndex = randomNum(0, NUMBER_OF_IMAGES - 1);
		while (cardArray.length < 6) {
			if (cardArray.indexOf(cardIndex) === -1) cardArray.push(cardIndex);
			else cardIndex = randomNum(0, NUMBER_OF_IMAGES - 1);
		}
		return cardArray;
	}
	useEffect(() => {
		console.log(pickedPics);
		console.log(score);
	});
	function cardOnclick(e) {
		const id = e.currentTarget.dataset.id;
		if (pickedPics.indexOf(id) === -1) {
			let pickedArrTemp = [...pickedPics];
			pickedArrTemp.push(id);
			setPickedPics(pickedArrTemp);
			setScore(score + 1);
		} else {
			setPickedPics([]);
			setScore(0);
		}
	}
	const randomCardArr = randomCards();

	return (
		<main>
			<div className='card-container'>
				{randomCardArr.map((index) => {
					return (
						<div
							className='card-item'
							key={index}
							data-id={images[index].id}
							onClick={(e) => cardOnclick(e)}
						>
							<img
								src={images[index].src}
								alt='card-img'
								className='card-img'
							/>
							<p className='card-name'>{images[index].name}</p>
						</div>
					);
				})}
			</div>
		</main>
	);
}
export default Main;
