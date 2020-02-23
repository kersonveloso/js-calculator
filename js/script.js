let display = 0;
let current = [];

$( document ).ready(function (){
    $('.display').html(display);
});

function clr(){
    current = [];
    display = 0;
    $('.display').html(display);
}

function insert(v){
    current.push(v);
    display = current;
    $('.display').html(display);
}

function eql(){
    display = eval(display.join(''));
    $('.display').html(display);
}

function per(){
    if ((typeof display) != 'object'){
        display = [display];
    }
    display = eval(display.join('')+'/100');
    $('.display').html(display);
}

function modify(){
    if ((typeof display) != 'object'){
        display = [display];
    }
    display = eval(display.join('')+'*(-1)');
    $('.display').html(display);
}