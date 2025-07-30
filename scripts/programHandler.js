const runProgramtutorService = document.getElementById('runProject-tutorService');
const closeProgramtutorService = document.getElementById('terminateProject-tutorService');
const tutoringService = document.getElementById('tutoringServiceProgram');


runProgramtutorService.addEventListener('click', () => {

    tutoringService.classList.add('show');

})

closeProgramtutorService.addEventListener('click', () => {

    tutoringService.classList.remove('show');



})

const runProgramPasswordManager = document.getElementById('runProject-passwordManager');
const closeProgramPasswordManager = document.getElementById('terminateProject-passwordManager');
const passwordmanager = document.getElementById('passwordManagerProgram');


runProgramPasswordManager.addEventListener('click', () => {

    passwordmanager.classList.add('show');

})

closeProgramPasswordManager.addEventListener('click', () => {
    passwordmanager.classList.remove('show');

})

