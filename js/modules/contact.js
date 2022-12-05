export default function Contact () {

	let contactVisible = false;

	/* querySelector */

	//Choosing the HTML elements I want to target
	const contactButton = document.querySelector('.navigation__contact-button');
	const contactSection = document.querySelector('.contact__section');


	/* EventListener */

	//Adding an "action" -> a click
	contactButton.addEventListener('click', handleContactButtonOnClick);


	/* EventHandler */
	//choosing what the "action" should do
	function handleContactButtonOnClick (event) {
		toggleContact();
		renderContactHTML();
	}

	/* Methods */
	function toggleContact() {
		contactVisible = !contactVisible;
	}

	/* render */

	//Why is the toggle not toggling??
	//Maybe if I come back to it later it will work?
	//Never mind, it works now

	//the action is to add  "--visible" from css(classlist)
	//and to remove it when clicked a second time. 
	function renderContactHTML() {
		if (contactVisible === true) {
			contactSection.classList.add('contact__section--visible');
		} else {
			contactSection.classList.remove('contact__section--visible');
		}
	}
}