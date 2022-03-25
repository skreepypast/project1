//alert("Hello js");

//alert(a);

function guess() {
    var a = prompt("Введите число:")
    if (a > 5) {
        alert("Ты клоун");
        return guess();
    } else if (a == 5) {

        alert("Я клоун");
    } else {
        alert("bruh");
        return guess();
    }
}
//guess();
function timer() {
    alert("Выходи");
}
//setTimeout(timer,3000);
function valid() {
    var name = document.getElementById("name").value;
    var pass = document.getElementById("pass").value;

    var reg_name = /^[а-яa-zё]+$/i;
    var reg_pass = /^[a-z0-9]{5, 100}/i;
    if (reg_name.test(name) == false) {
        alert("Тебя зовут клоун???");

    }
    if (reg_pass.test(pass) == false) {
        alert("У тебя клоунский пароль???(Sasha2005!)");

    }

}
document.querySelector(".button").addEventListener("click", valid);
