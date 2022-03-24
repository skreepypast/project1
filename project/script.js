alert("Hello js");

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
guess();