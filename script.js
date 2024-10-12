function splitExpense() {
    const totalAmount = document.getElementById('totalAmount').value;
    const numPeople = document.getElementById('numPeople').value;
    const currency = document.getElementById('currency').value;
    const resultDiv = document.getElementById('result');

    // Validate inputs
    if (totalAmount === "" || numPeople === "" || numPeople <= 0) {
        resultDiv.innerHTML = "<p>Please enter valid values!</p>";
        return;
    }

    const splitAmount = (totalAmount / numPeople).toFixed(2); // Split and round to 2 decimal places

    resultDiv.innerHTML = `<p>Each person owes: ${currency}${splitAmount}</p>`;
}
