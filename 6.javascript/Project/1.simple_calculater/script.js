
function Display(value) {
    document.getElementById('display').value += value;
}

function clearScreen() {
    document.getElementById('display').value = '';
}

function calculator() {
    var displayValue = document.getElementById('display').value;
    try {
        var result = eval(displayValue);
        if (!isFinite(result)) {
            throw "Invalid expression";
        }
        document.getElementById('display').value = result;
    } catch (error) {
        alert("Error: " + error);
    }
}