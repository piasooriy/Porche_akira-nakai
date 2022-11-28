export default function AboutUs () {
	/* model */

   let aboutUsVisible = false; 
   /* QuerySelectors */

   const aboutUsButton = document.querySelector('.about__us__button');
   const aboutUsSection = document.querySelector('.about__us__section');

   /* Event listeners */
	if (aboutUsButton) {
   aboutUsButton.addEventListener('click', handleAboutUsButtonOnClick);
	}

   /* Event Handlers */
   function handleAboutUsButtonOnClick(event){
      toggleAboutUs();
      renderAboutUsHTML();
   } 

   /* methods */
   function toggleAboutUs() {
      aboutUsVisible = !aboutUsVisible;
   }

   /* render */
   function renderAboutUsHTML() {
      if (aboutUsVisible === true) {
         aboutUsSection.classList.add('about__us__section--visible');
      } else {
			aboutUsSection.classList.remove('about__us__section--visible');
			//also add the hero image(remember to queryselect it!!)
      }  
	}
}

