
const contactButton = document.getElementById('contactButton');
const contactArrow = document.getElementById('contactArrow');
const hiddenOptionsContainer = document.getElementById('hiddenContactOptions');

const emailButton = document.getElementById('emailButton');
const copiedMessage = document.getElementById('emailCopied');


//This function is for showing contacts when contact button is pressed
contactButton.addEventListener('click', () => {
  if (hiddenOptionsContainer.classList.contains('show')) {
    // Hide: remove "show", add "hide"
    hiddenOptionsContainer.classList.remove('show');
    hiddenOptionsContainer.classList.add('hide');
    contactArrow.classList.remove('turn');
  } else {
    // Show: remove "hide", add "show"
    hiddenOptionsContainer.classList.remove('hide');
    hiddenOptionsContainer.classList.add('show');
    contactArrow.classList.add('turn');
  }});

//This function is for showing 'copied' after email button is pressed;

emailButton.addEventListener('click', () => { 
    
    
    copiedMessage.classList.add('show');

    navigator.clipboard.writeText('keerthanankantharuban@gmail.com');

    setTimeout(() => {

        copiedMessage.classList.remove('show');

    }, 1000);


});