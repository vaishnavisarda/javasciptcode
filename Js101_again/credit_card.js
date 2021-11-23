// function validatecard(){

// }
function validateCreditCard () {
    for (var i = 1; i < 7; i++) {
        var cardNumber = document.getElementById("creditCard" + i);

        var pattern = new RegExp("[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{3}[24680]{1}");
        var res = pattern.test(cardNumber);

        if (res) {
            document.getElementById("message").style.color = 'green';
            document.getElementById("message").innerHTML = "Card Number is Valid";
            document.getElementById("creditCard" + i).style.color = "green";
        } else {
            document.getElementById("message").style.color = 'red';
            document.getElementById("message").innerHTML = "Card Number is NOT valid";
            document.getElementById("cardCard" + i).style.color = 'red';
        }
    }
}
validateCreditCard("8382888282821234");