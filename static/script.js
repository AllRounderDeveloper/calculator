function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

const calculate = async () => {
    const expression = document.getElementById('display').value;
    const response = await fetch('/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ expression })
    });
    const data = await response.json();
    if (data.error) {
        alert('Error: ' + data.error);
    } else {
        document.getElementById('display').value = data.result;
    }
}