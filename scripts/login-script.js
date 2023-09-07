
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