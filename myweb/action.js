function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }

  async function copyEmailToClipboard() {
    try {
        await navigator.clipboard.writeText('ckchancm@connect.ust.hk');
        document.getElementById('copyEmailToClipboard').innerText = 'Copied!';
        console.log('Email copied to clipboard!');
        setTimeout(function(){document.getElementById('copyEmailToClipboard').innerHTML = '<i class="fas fa-envelope"></i> Contact'},2000)
    } catch (err) {
        console.error('Failed to copy email: ', err);
    }
}
var greetingtext1 = ['Hello World! ','Welcome^^ ', 'Good morning!'];
var greetingtext2 = ['Hello World! ','Welcome^^ ', 'Good afternoon!'];
var greetingtext3 = ['Hello World! ','Welcome^^ ', 'Good evening!'];
var greetingtext4 = ['Hello World! ','Welcome^^ ', 'Good night!', 'Bedtime!!!'];

var arrayIndex = 0;
var charIndex = 0;
var isDeleting = false;

function suitablegreeting(){

    return  greetingtext;
}

function animateTyping() {
      // Get current hour
      var currentHour = new Date().getHours();
      var greetingtext;
      // Choose greeting based on current hour
      var greetingtext;
      if (currentHour < 12 && currentHour > 6) {
          greetingtext = greetingtext1;
      } else if (currentHour < 18) {
          greetingtext = greetingtext2;
      } else if (currentHour < 24) {
          greetingtext = greetingtext3;
      }
      else{
          greetingtext = greetingtext4;
      }
  var animatedText = document.getElementById('animatedText');
  var currentWord = greetingtext[arrayIndex];
  
  console.log('Before if and else',arrayIndex);
  if (isDeleting) {
    // Start deleting
    if (charIndex > 0) {
      charIndex--;
    } else {
      // Switch to typing next word
      isDeleting = false;
      arrayIndex = (arrayIndex + 1) % greetingtext.length; // Go to next word in array
    }
  } else {
    // Start typing
    if (charIndex < currentWord.length) {
      charIndex++;
    } else {
      // Switch to deleting
      isDeleting = true;
    }
  }
  animatedText.innerHTML = currentWord.slice(0, charIndex);
  // Repeat the animation
  setTimeout(animateTyping, isDeleting ? 100 : 200);
}


animateTyping();