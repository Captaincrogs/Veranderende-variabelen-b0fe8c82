const pi = 3.14;

function Reken() {
    var ID = document.getElementById('number').value;

    var answer = ID * pi;

    document.getElementById("answer").innerText = answer;
}