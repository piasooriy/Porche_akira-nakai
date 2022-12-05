export default function Contact () {

	let contactVisible = false;

	/* querySelector */

	const contactButton = document.querySelector('.navigation__contact-button');
	const contactSection = document.querySelector('.contact__section');


	/* EventListener */
	contactButton.addEventListener('click', handleContactButtonOnClick);

	/* EventHandler */
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

	function renderContactHTML() {
		if (contactVisible === true) {
			contactSection.classList.add('contact__section--visible');
		} else {
			contactSection.classList.remove('contact__section--visible');
		}
	}
}