// loader


const fadeout = () => {
  const loaderwrapper = document.querySelector('.wrapper');
  loaderwrapper.classList.add('fade');
}

window.addEventListener('load', fadeout);

// go to top

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// mobile menu

const menutoggle = () => {
  const menuicon = document.querySelector('.menuitems');
  menuicon.classList.toggle('show-menu');
}