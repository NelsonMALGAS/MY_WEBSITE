// script.js


// Get the projects list element
const projectsList = document.getElementById('projects-list');

// Add event listener to the projects list
projectsList.addEventListener('click', (event) => {
  const clickedProject = event.target;
  console.log('Clicked project:', clickedProject.textContent);
});

//let aboutMe = document.querySelector('.about-me').innerHTML
let aboutLink = document.querySelector('.abt')
let section = document.querySelector('.blank')


aboutLink.addEventListener('click' ,() =>{
  section.style.display = 'block'
})

const closeAboutOverlayBtn = document.querySelector('.blank-btn')
closeAboutOverlayBtn.addEventListener('click' ,() =>{
  section.style.display = ''
})

const displayProjects = document.querySelector('.projects-display ')
const displayLink = document.querySelector('.prj')

displayLink.addEventListener('click' ,(e)=>{
  e.stopPropagation()
  displayProjects.style.display = 'block'
})


const projectsCloseButton = document.querySelector('.project')
projectsCloseButton.addEventListener('click',()=>{
  displayProjects.style.display = ''
})

const helpBtn = document.querySelector('.help-btn');
    const guide = document.querySelector('.guide');

    helpBtn.addEventListener('click', (e) => {
      guide.style.display = 'block'
    });
    const helpBtnClose = document.querySelector('.help-btn-close');
  
    helpBtnClose.addEventListener('click', () => {
      guide.style.display = ''
    });

const headerButton = document.querySelector('.header-button')
const headerThemeOverlay = document.querySelector('.theme')


  
    const contacts = document.querySelector('.cntcs');
    const contactsOverlay = document.querySelector('.icons');
    let text = document.querySelector('.text');

  contacts.addEventListener('click', () => {
  contactsOverlay.style.display = 'flex';
  
  const pieceOfText = '<p class="text">' + 'My Social Media Platforms & Email Address' + '</p>';

  text.innerHTML = pieceOfText;
});

    const html = document.querySelector('body')
    html.addEventListener('keydown' ,(event)=>{
      if (event.keyCode === 32){
      contactsOverlay.style.display = ''
      
  const pieceOfText = '<p class="text"></p>';

  text.innerHTML = pieceOfText;
      
    }
})

const icons = document.querySelector('.icons')
icons.addEventListener('click' , () =>{
  
  contactsOverlay.style.display = ''   
  const pieceOfText = '<p class="text"></p>';
  text.innerHTML = pieceOfText;

})
    
