let n = 0;
let texto = document.getElementById('number');

document.getElementById('reset').addEventListener('click', () => {
    para1.innerHTML = '';
    para2.innerHTML = '';
    para3.innerHTML = '';
    para4.innerHTML = '';
    para5.innerHTML = '';
    para6.innerHTML = '';
    para7.innerHTML = '';
    para8.innerHTML = '';
    para9.innerHTML = '';
});

let button1 = document.getElementById('cellone')
let para1 = document.getElementById('cellonep')

button1.addEventListener('click', () => {
    if (para1.innerHTML == '') {
        if ((n % 2) == 0) {
        para1.innerHTML = 'X';
    } else {
        para1.innerHTML = 'O';
    }
    }
    if (header.innerHTML == "It is X's turn.") {
        header.innerHTML = "It is O's turn.";
    } else {
        header.innerHTML = "It is X's turn.";
    }
    n++
    texto.innerHTML = n;
    checkIfWin();
});

let button2 = document.getElementById('celltwo')
let para2 = document.getElementById('celltwop')

button2.addEventListener('click', () => {
    if (para2.innerHTML == '') {
        if ((n % 2) == 0) {
        para2.innerHTML = 'X';
    } else {
        para2.innerHTML = 'O';
    }
    }
    if (header.innerHTML == "It is X's turn.") {
        header.innerHTML = "It is O's turn.";
    } else {
        header.innerHTML = "It is X's turn.";
    }
    n++
    texto.innerHTML = n;
    checkIfWin();
});

let button3 = document.getElementById('cellthree')
let para3 = document.getElementById('cellthreep')

button3.addEventListener('click', () => {
    if (para3.innerHTML == '') {
        if ((n % 2) == 0) {
        para3.innerHTML = 'X';
    } else {
        para3.innerHTML = 'O';
    }
    }
    if (header.innerHTML == "It is X's turn.") {
        header.innerHTML = "It is O's turn.";
    } else {
        header.innerHTML = "It is X's turn.";
    }
    n++
    texto.innerHTML = n;
    checkIfWin();
});

let button4 = document.getElementById('cellfour')
let para4 = document.getElementById('cellfourp')

button4.addEventListener('click', () => {
    if (para4.innerHTML == '') {
        if ((n % 2) == 0) {
        para4.innerHTML = 'X';
    } else {
        para4.innerHTML = 'O';
    }
    }
    if (header.innerHTML == "It is X's turn.") {
        header.innerHTML = "It is O's turn.";
    } else {
        header.innerHTML = "It is X's turn.";
    }
    n++
    texto.innerHTML = n;
    checkIfWin();
});

let button5 = document.getElementById('cellfive')
let para5 = document.getElementById('cellfivep')

button5.addEventListener('click', () => {
    if (para5.innerHTML == '') {
        if ((n % 2) == 0) {
        para5.innerHTML = 'X';
    } else {
        para5.innerHTML = 'O';
    }
    }
    if (header.innerHTML == "It is X's turn.") {
        header.innerHTML = "It is O's turn.";
    } else {
        header.innerHTML = "It is X's turn.";
    }
    n++
    texto.innerHTML = n;
    checkIfWin();
});

let button6 = document.getElementById('cellsix')
let para6 = document.getElementById('cellsixp')

button6.addEventListener('click', () => {
    if (para6.innerHTML == '') {
        if ((n % 2) == 0) {
        para6.innerHTML = 'X';
    } else {
        para6.innerHTML = 'O';
    }
    }
    if (header.innerHTML == "It is X's turn.") {
        header.innerHTML = "It is O's turn.";
    } else {
        header.innerHTML = "It is X's turn.";
    }
    n++
    texto.innerHTML = n;
    checkIfWin();
});

let button7 = document.getElementById('cellseven')
let para7 = document.getElementById('cellsevenp')

button7.addEventListener('click', () => {
    if (para7.innerHTML == '') {
        if ((n % 2) == 0) {
        para7.innerHTML = 'X';
    } else {
        para7.innerHTML = 'O';
    }
    }
    if (header.innerHTML == "It is X's turn.") {
        header.innerHTML = "It is O's turn.";
    } else {
        header.innerHTML = "It is X's turn.";
    }
    n++
    texto.innerHTML = n;
    checkIfWin();
});

let button8 = document.getElementById('celleight')
let para8 = document.getElementById('celleightp')

button8.addEventListener('click', () => {
    if (para8.innerHTML == '') {
        if ((n % 2) == 0) {
        para8.innerHTML = 'X';
    } else {
        para8.innerHTML = 'O';
    }
    }
    if (header.innerHTML == "It is X's turn.") {
        header.innerHTML = "It is O's turn.";
    } else {
        header.innerHTML = "It is X's turn.";
    }
    n++
    texto.innerHTML = n;
    checkIfWin();
});

let button9 = document.getElementById('cellnine')
let para9 = document.getElementById('cellninep')

button9.addEventListener('click', () => {
    if (para9.innerHTML == '') {
        if ((n % 2) == 0) {
        para9.innerHTML = 'X';
    } else {
        para9.innerHTML = 'O';
    }
    }
    if (header.innerHTML == "It is X's turn.") {
        header.innerHTML = "It is O's turn.";
    } else {
        header.innerHTML = "It is X's turn.";
    }
    n++
    texto.innerHTML = n;
    checkIfWin();
});

function checkIfWin() {
    if (para1.innerHTML == 'X' && para2.innerHTML == 'X' && para3.innerHTML == 'X' || para4.innerHTML == 'X' && para5.innerHTML == 'X' && para6.innerHTML == 'X' ||
    para7.innerHTML == 'X' && para8.innerHTML == 'X' && para9.innerHTML == 'X' || para1.innerHTML == 'X' && para4.innerHTML == 'X' && para7.innerHTML == 'X' ||
    para2.innerHTML == 'X' && para5.innerHTML == 'X' && para8.innerHTML == 'X' || para3.innerHTML == 'X' && para6.innerHTML == 'X' && para9.innerHTML == 'X' ||
    para1.innerHTML == 'X' && para5.innerHTML == 'X' && para9.innerHTML == 'X' || para3.innerHTML == 'X' && para5.innerHTML == 'X' && para7.innerHTML == 'X') {
        $(".alertx").hide().show('medium');
    };
    if (para1.innerHTML == 'O' && para2.innerHTML == 'O' && para3.innerHTML == 'O' || para4.innerHTML == 'O' && para5.innerHTML == 'O' && para6.innerHTML == 'O' ||
    para7.innerHTML == 'O' && para8.innerHTML == 'O' && para9.innerHTML == 'O' || para1.innerHTML == 'O' && para4.innerHTML == 'O' && para7.innerHTML == 'O' ||
    para2.innerHTML == 'O' && para5.innerHTML == 'O' && para8.innerHTML == 'O' || para3.innerHTML == 'O' && para6.innerHTML == 'O' && para9.innerHTML == 'O' ||
    para1.innerHTML == 'O' && para5.innerHTML == 'O' && para9.innerHTML == 'O' || para3.innerHTML == 'O' && para5.innerHTML == 'O' && para7.innerHTML == 'O') {
        $(".alerto").hide().show('medium');
    };
    if (para1.innerHTML != '' && para2.innerHTML != '' && para3.innerHTML != '' && para4.innerHTML != '' && para5.innerHTML != '' && para6.innerHTML != '' && 
    para9.innerHTML != '' && para8.innerHTML != '' && para7.innerHTML != '') {
        $(".alerttie").hide().show('medium');
    };
}