function handleOptIn(event) {
    event.preventDefault();
    const phoneInput = document.getElementById('phone');
    const message = document.getElementById('optInMessage');

    if (phoneInput.value) {
        message.textContent = 'Subscription successful!';
        message.classList.add('success');
    } else {
        message.textContent = 'No phone number entered.';
        message.classList.remove('success');
    }
}

function handleOptOut(event) {
    event.preventDefault();
    const phoneInput = document.getElementById('optOutPhone');
    const message = document.getElementById('optOutMessage');

    if (phoneInput.value) {
        message.textContent = 'Opt-out successful!';
        message.classList.add('success');
    } else {
        message.textContent = 'No phone number entered.';
        message.classList.remove('success');
    }
}
