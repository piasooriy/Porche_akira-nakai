export default function Collection () {

	console.log('HalloBallo');
	/******* Slidshow *********/
	/* QuerySelectors */
	const collection = document.querySelector('.collection');
	const collectionPicture = document.querySelectorAll('.collection__picture');
	const buttonDots = document.querySelectorAll('.collection__button-dots');
	const nextButton = document.querySelector('.collection__next-button');
	const previousButton = document.querySelector('.collection__previous-button');

	/* Event Listener */
	previousButton.addEventListener('click', handlePreviousButtonOnClick);
	nextButton.addEventListener('click', handleNextButtonOnClick);
	window.addEventListener('keyup', handleWindowKeyUp);


	//maybe I can rewrite this if I find the time and effort
	for (let index = 0; index < buttonDots.length; index += 1) {

	/* 	buttonDots[index].addEventListener('click', (event) => {
			handleButtonDotClick(event, index); 
		}); */
		//maybe I will give up. the dots aren't working.
	}

	for (let index = 0; index < buttonDots.length; index += 1) {
		buttonDots[index].addEventListener('click', (event) => {
			handleButtonDotClick(event, index);
		})
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

	//This isn't working...
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
	}

	function changeCurrentCollectionIndex(index) {
		currentCollectionIndex = index;
	}


	//why are the dots malfunctioning? This does not work either...

/* 	function removeActiveClassFromDots () {
		for (const buttonDot of buttonDots) {
			buttonDot.classList.remove('collection__button-dots--active')
		}
	} */

	/* Variables */
	// I guess we are starting with the first figure when we state that
	//currentCollectionIndex is 0
	let currentCollectionIndex = 0;

	function updateCollectionHTML() {
		for (const picture of collectionPicture) {
			picture.classList.remove('collection__picture--visible');
		}
	//This is not working(supposed to remove the active hover-class)..
		for (const dot of buttonDots) {
			dot.classList.remove('collection__button-dots--active');
		}

		collectionPicture[currentCollectionIndex].classList.add('collection__picture--visible');
		buttonDots[currentCollectionIndex].classList.add('collection__button-dots--active');
	}


	/****** Toggle Collection Section*********/
	// em should I divide is like this or do I put it 
	//in a new module? Or can i just be here?

	let collectionVisible = false;

	const collectionMainButton = document.querySelector('.collection__main-button ');
	/* const collection = document.querySelector('.collection'); */
	// Pia, you already have this, but if you need to make a new module you can use this
	//you're welcome <3

	/* EventListener */
	collectionMainButton.addEventListener('click', handleCollectionMainButtonOnClick);

	/* EventHandlers */
	function handleCollectionMainButtonOnClick (event) {
		toggleCollection();
		renderCollectionHTML();
	}

	/* Methods */
	function toggleCollection() {
		collectionVisible = !collectionVisible;
	}

	/* render */
	function renderCollectionHTML() {
		if (collectionVisible === true) {
			collection.classList.add('collection__visible');
		} else {
			collection.classList.remove('collection__visible');
		}
	}

	

}


