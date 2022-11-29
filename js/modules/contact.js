export default function Contact () {

	let contactVisible = !false;

	/* querySelector */

	const contactButton = document.querySelector('.navigation__contact__button');
	const contactSection = document.querySelector('.contact__section');


	/* EventListener */
	//Why do I have to have it in an if statement??
	if(contactButton){
	contactButton.addEventListener('click', handleContactButtonOnClick);}

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

	function renderContactHTML() {
		if (contactVisible === true) {
			contactSection.classList.add('contact__section--visible');
		} else {
			contactSection.remove('contact__section--visible');
		}
	}

}