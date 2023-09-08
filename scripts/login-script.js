
// mendapatkan modal element dari DOM
const failBox = document.querySelector('#failed');

// fungsi untuk menampilkan modal
function showFail() {
  failBox.classList.add('display');

  // menyembunyikan modal setelah 3 detik
  setTimeout(function() {
    failBox.classList.remove('display')
  }, 3000)
}


function goToWeb()
{
    window.location = 'https://rasadel.github.io/first_website/aboutme.html';
}


const loginContainer = document.querySelector('#loginForm');
const emailInput = document.querySelector('#inputEmail');
const passInput = document.querySelector('#inputPassword');

const emailInData = 'bobo@kucing.id';
const passInData = 'turutidur';



loginContainer.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = emailInput.value;
    const password = passInput.value;

    var x = document.getElementById("logform");
    var y = document.getElementById("wait");

  

    if (email == emailInData && password == passInData) {
        x.style.display = "none"
        y.style.display = "flex"
            
        var second = 4;
        function displayseconds()
        {
            second -= 1;
            document.getElementById("waitp").innerText="This Page Will Be Redirect In "+second+" Seconds...";
        }
        setInterval(displayseconds,1000);

        setTimeout("goToWeb()",4000);
    }
    else {
        showFail();
    }
});