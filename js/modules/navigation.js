export default function Navigation () {
   /* model */

	//basically letting this not show up
	let navigationVisible = false; 
	/* QuerySelectors */
	// Guess I am choosing the elements I want to *toggle*
	const menuButton = document.querySelector('.menu__button');
	const headerNavigation = document.querySelector('.header__navigation');


	/* Event listeners */
	//when you click -> you get something out of it
	menuButton.addEventListener('click', handleMenuButtonClick);


	/* Event Handlers */
	//this is what you get out of the click, but like
	//we get to what exactly click is doing further down
	function handleMenuButtonClick(event){
		toggleNavigation();
		renderNavigationHTML();
	} 

	/* methods */
	//if you click, then the navigationVisible will pop up
	//what is navigationVisible?
	function toggleNavigation() {
		navigationVisible = !navigationVisible;
	}


	/* render */
	//this is navigationVisible
	//here we take ".header__navigation-visible" from css
	//and we add it when we click on "menu__button"
	//when you click on it, the visible pops up, and you can 
	//remove it by clicking again.
	// et voilà! a toggle( I think )
	function renderNavigationHTML() {
		if (navigationVisible === true) {
			headerNavigation.classList.add('header__navigation--visible');
		} else {
			headerNavigation.classList.remove('header__navigation--visible');
		}
	}

}


