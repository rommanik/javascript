const BtCreate = document.getElementById('BtCreate');
const TeacherCode = document.getElementById('TeacherCode');
const FullName = document.getElementById('FullName');
const Contact = document.getElementById('Contact');
const mainMsg = document.getElementById('Msg');

BtCreate.addEventListener('click', () => {
    // 1. Run the validation and store the result
    const isFormValid = validationInputs();

    // 2. Only show success if the result is true
    if (isFormValid) {
        mainMsg.innerHTML = "Success! Teacher profile created.";
        mainMsg.style.color = "green";
        mainMsg.style.display = "block";
    } else {
        mainMsg.innerHTML = "Warning! Invalid input(s).";
        mainMsg.style.color = "red";
        mainMsg.style.display = "block";
    }
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validationInputs = () => {
    const codeValue = TeacherCode.value.trim();
    const nameValue = FullName.value.trim();
    const contactValue = Contact.value.trim();

    // Assume the form is valid until we find an error
    let isAllValid = true;

    // Check Teacher Code
    if (codeValue === '') {
        setError(TeacherCode, 'TeacherCode is required');
        isAllValid = false; // Found an error!
    } else {
        setSuccess(TeacherCode);
    }

    // Check Full Name
    if (nameValue === '') {
        setError(FullName, 'FullName is required');
        isAllValid = false; // Found an error!
    } else if (nameValue.length < 5) {
        setError(FullName, 'Name must be at least 5 characters');
        isAllValid = false; // Found an error!
    } else {
        setSuccess(FullName);
    }

    // Check Contact
    if (contactValue === '') {
        setError(Contact, 'Contact is required');
        isAllValid = false; // Found an error!
    } else {
        setSuccess(Contact);
    }

    // Return the final result
    return isAllValid;
};