document.getElementById("payButton").addEventListener("click", function () {

    const amount = document.querySelector('input[type="number"]').value;
    const message = document.getElementById("message");

    if (amount === "") {
        message.textContent = "Please enter amount.";
        return;
    }

    message.textContent = "Payment request submitted!";
});
