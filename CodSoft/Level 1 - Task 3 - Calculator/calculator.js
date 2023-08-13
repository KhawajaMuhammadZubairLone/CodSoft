// js for calculator

let output = document.getElementById('outputscreen');

function display(value) {
    output.value += value;
}

function Clear() {
    output.value = '';

}

function del() {
    output.value = output.value.slice(0, -1);
}

function Calculate() {
    try {
        output.value = eval(output.value);
    }
    catch (error) {
        output.value = 'Syntax Error'
    }
}