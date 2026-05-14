function calculateGann() {
    const price = parseFloat(document.getElementById('price').value);
    const percentage = parseFloat(document.getElementById('percentage').value);

    if (isNaN(price) || isNaN(percentage)) {
        document.getElementById('result').innerHTML = "Please enter valid numbers.";
        return;
    }

    const gannUp = price * (1 + percentage / 100);
    const gannDown = price * (1 - percentage / 100);

    document.getElementById('result').innerHTML =
        `Gann Up: ${gannUp.toFixed(4)}<br>Gann Down: ${gannDown.toFixed(4)}`;
}
