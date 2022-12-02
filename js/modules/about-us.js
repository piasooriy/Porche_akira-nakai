export default function AboutUs () {
	/* model */
   let aboutUsVisible = false; 

   /* QuerySelectors */
   // querySelector returns a Node (and all its properties and methods)
   // - if the element actually exists on the page
   // - if it doesnt, querySelector() will return null
   // - null does not have any properties or methods
   // - attempting to add an event listener to null, will result in the
   //   error: Cannot read properties of null (reading .addEventListener)
   const aboutUsButton = document.querySelector('.about__us-button');
   const aboutUsSection = document.querySelector('.about__us-section');

   /* Event listeners */

	/* 
      why do I have to put it in a "if" statement?
      > Cannot read properties of null (reading .addEventListener)

      an easier solution is to always remember to wrap .addEventListener()
      calls around an if statement that checks if the element exists.
   */

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
         aboutUsSection.classList.add('about__us-section--visible');
      } else {
			aboutUsSection.classList.remove('about__us-section--visible');
			//also add the hero image(remember to queryselect it!!)
      }  
	}
}

