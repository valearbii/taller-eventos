function clickbutton() {
    alert('Hola! Soy el div');
}

const button = document.getElementById('button');

button.addEventListener('click', function(event) {
    event.stopPropagation();
    clickbutton();
});
