function onInputDone() {
    var str = document.getElementById("name").value;
    var codeValue = calculateCodeValue(str);
    document.getElementById("nameCodeValue").innerHTML = "The code value is: " + codeValue;
}

function calculateCodeValue(str) {
    var codeValue = 0;

    for (var i = 0; i < str.length; i++) {
        codeValue += str.charCodeAt(i);
    }

    return codeValue;
}

function onPageLoaded() {
    onInputDone();
}