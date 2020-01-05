$(document).ready(function(){
  $('.service__slick').slick({
    centerMode: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,  
    slidesToShow: 3,
    variableWidth: true,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('#banner__slick').slick({
    autoplay: true,
    autoplaySpeed: 4500,
    dots: false,
    arrows: false,
    infinite: true
  });
});

var menu = document.getElementById('mobileMenu');
var hamburger = document.getElementById('hamburgerIcon')

function toggleMenu() {
  hamburger.classList.toggle('hamburgerIcon__close-x');
  menu.classList.toggle('mobile-menu--is-active');
}


// Sliding Up and Down the apply drop down
var applyMenu = $('#apply-drop__menu')

$('#apply-drop__menu--close').click( function() {
  applyMenu.slideUp('fast')
})
$('#apply-now').click( function(e) {
  // applyMenu.slideDown('fast')
  e.preventDefault();
  applyMenu.slideDown();
  console.log(applyMenu)
})

$('#applyNowMobile').click(function () {
  $('#applyDropMenuMobile').slideToggle();
})

var firebaseConfig = {
  apiKey: "AIzaSyD-xxLYiX4tkyPfaUCeNrnQkrNLFOHENsU",
  databaseURL: "https://barnes-angels.firebaseio.com",
  projectId: "barnes-angels",
  messagingSenderId: "217696851131",
  appId: "1:217696851131:web:049d73361c3d961fb0459e"
};

firebase.initializeApp(firebaseConfig);

function sendSubscriberToFb(e) {
  var subscriberField = document.getElementById('subscriberEmail')
  var subscriberEmail = subscriberField.value;
  var feedback = document.getElementById('subscriber-feedback')
  var subscribeForm = document.getElementById('subcribeForm')
  e.preventDefault();
  var subscribersRef = firebase.database().ref('subscribers/')


  subscribersRef.push({
    email: subscriberEmail,
    time: Date.now()
  }, function(err) {
    if(err) {
      feedback.style.backgroundColor ="#f7a7a7"
      feedback.style.color ="#2d2d2d"
      feedback.innerHTML = 'Unable to save! Please try again later';
      
    } else {
      feedback.innerHTML = 'Thanks for subscribing to our news letter';
      subscriberField.value = ""
      subscribeForm.style.display = "none"
    }
  });

}


document.getElementById('subcribeForm').addEventListener('submit', sendSubscriberToFb)


