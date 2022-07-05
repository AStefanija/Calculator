function display(value) {
    document.getElementById("result").value += value;
}

function sum() {
    var str = document.getElementById("result").value;
    var result = eval(str);
    document.getElementById("result").value = result;
}
