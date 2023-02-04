var corpo = document.getElementById ("humano");

var cores = ["blue", "white", "red", "white"]

var i = 0;

setInterval(() => {
    corpo.style.backgroundColor = cores [i];
    i++;
    if (i == 5) i = 0;
}, 90);