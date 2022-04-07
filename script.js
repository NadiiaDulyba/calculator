let number;
let operations;
let numberTwo;
let equal;
let result;

$('.button').click(function() {
    if (number === undefined) {
        number = $(this).attr('value');
    } else if (number !== undefined && operations === undefined){
        number = number + $(this).attr('value');
    } else if(number !== undefined && operations !== undefined  && numberTwo === undefined) {
        numberTwo = $(this).attr('value');
    } else if(numberTwo !== undefined && number !== undefined && operations !== undefined) {
        numberTwo = numberTwo + $(this).attr('value');
    } else {
        return;
    }
    printText('.display', number);
    printText('.display', numberTwo);
});

$('.button_operations').click(function() {
    operations = $(this).attr('value');
    printText('.display', operations);
}); 

$('.button_erase').click(function() {
    printText('.display', '');
    number = undefined;
    operations = undefined;
    numberTwo = undefined;
    result = undefined;
    equal = undefined;
}); 

$('.button_equal').click(function() {
    if(equal === undefined && operations === '+') {
        equal = $(this).attr('value');
        result = +number + +numberTwo;
    } else if(equal === undefined && operations === '-') {
        equal = $(this).attr('value');
        result = +number - +numberTwo;
    } else if(equal === undefined && operations === '*') {
        equal = $(this).attr('value');
        result = +number * +numberTwo;
    } else if(equal === undefined && operations === '/') {
        equal = $(this).attr('value');
        result = +number / +numberTwo;
    } else {
        return;
    }
        printText('.display', result);     
}); 

function printText(selector, textToPrint) {
    $(`${selector}`).attr('value', textToPrint);
}