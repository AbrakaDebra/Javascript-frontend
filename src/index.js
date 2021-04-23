import 'idempotent-babel-polyfill';

document.addEventListener("DOMContentLoaded", function(event) {
    let h1 = document.createElement('h1')
    h1.innerText = "Hello World"
    document.getElementById("root").appendChild(h1)
})