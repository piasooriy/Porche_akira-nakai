export default function Collection () {

	console.log('hei')

	/* QuerySelectors */
	const collection = document.querySelector('.collection');
	const collectionPicture = document.querySelectorAll('.collection__picture');
	const buttonDots = document.querySelectorAll('.collection__button__dots');
	const nextButton = document.querySelector('.next__button');
	const previousButton = document.querySelector('.previous__button');

	/* Event Listener */
	previousButton.addEventListener('click', handlePreviousButtonOnClick);
	nextButton.addEventListener('click', handleNextButtonOnClick);
	window.addEventListener('keyup', handleWindowKeyUp);


	//maybe I can rewrite this if I find the time and effort
	for (let index = 0; index < buttonDots.lenght; index += 1) {
		buttonDots[index].addEventListener ('click', event => {
			handleButtonDotClick(event, index); 
		});
	}
	/* Event Handlers */
	function handlePreviousButtonOnClick (event) {
		decreaseCurrentCollectionIndex();
		updateCollectionHTML();
	}

	function handleNextButtonOnClick (event) {
		increaseCurrentCollectionIndex();
		updateCollectionHTML();
	}


	function handleWindowKeyUp(event) {
		if (event.key === 'ArrowRight') {
			increaseCurrentCollectionIndex();
			updateCollectionHTML();
		} else if (event.key === 'ArrowLeft') {
			decreaseCurrentCollectionIndex();
			updateCollectionHTML();
		}
	}


	function handleButtonDotClick(event, index) {
		changeCurrentCollectionIndex (index);
		updateCollectionHTML();
	}


	/* Methods */

	function decreaseCurrentCollectionIndex() {
		if (currentCollectionIndex > 0) {
			currentCollectionIndex -= 1;
		} else {
			currentCollectionIndex = collectionPicture.length -1;
		}
	}

	function increaseCurrentCollectionIndex() {
		if (currentCollectionIndex < collectionPicture.length -1) {
			currentCollectionIndex += 1;
		} else {
			currentCollectionIndex = 0;
		}

		console.log(currentCollectionIndex)
	}

	function changeCurrentCollectionIndex(index) {
		currentCollectionIndex = index;
	}


/* 	function removeActiveClassFromDots () {
		for (const buttonDot of buttonDots) {
			buttonDot.classList.remove('collection__button-dots--active')
		}
	} */
		//WHY IS IT NOT WORKING?!?!?!?!?


	/* Variables */
	// I guess we are starting with the first figure when we state that
	//currentCollectionIndex is 0
	let currentCollectionIndex = 0;



	/* I think this is wrong
	should probably look at it one more time */
	//it is definetly wrong
	function updateCollectionHTML() {
		for (const picture of collectionPicture) {
			picture.classList.remove('collection__picture--visible');
		}
		
		for (const dot of buttonDots) {
			dot.classList.remove('collection__button-dots--active');
		}

		collectionPicture[currentCollectionIndex].classList.add('collection__picture--visible');
		buttonDots[currentCollectionIndex].classList.add('collection__button__dots--active');
	}

	/* have to figure out why the buttons are not working */
	/* Maybe the buttons are working, but not the updateCollectionHTML? */

}