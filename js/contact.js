const nameInput = document.getElementById('name_input');
const emailInput = document.getElementById('email_input');
const messageTextarea = document.getElementById('message_textarea');
const errorMessage = document.getElementById('error_message');
const validateFormData = (event) => {
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageTextarea.value;
    if (name.length > 0 && message.length > 0 && email.length > 0) {
        if (email.length < 5 || !email.includes("@") || !email.includes(".")) {
            errorMessage.innerHTML = "Invalid email.";
            errorMessage.style.display = 'block';
            event.preventDefault();
            errorMessage.style.animation = 'none';
            setTimeout(function() {
                errorMessage.style.animation = '';
            }, 10);
        }else{
        	errorMessage.innerHTML = "";
        	errorMessage.style.display = "none";
        }
    }
}