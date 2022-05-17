const DELETE_BTN_CLASS = 'delete-btn';
const CONTACT_ROW_SELECTOR = '.contact-row';
const STORAGE_KEY ='list';
const contactForm = document.querySelector('#newContactForm');
const contactsListEl = document.querySelector('#contactsList');
const contactTemplate = document.querySelector('#contactTemplate').innerHTML;
const formInputs = document.querySelectorAll('.form-input');

contactForm.addEventListener('submit', onContactFormSubmit);
contactsListEl.addEventListener('click', onContactsListClick);

let contactsList = [];
init();

function onContactFormSubmit(e) {
    e.preventDefault();

    const newContact = getContact();

    if (isContactValid(newContact)) {
        addContact(newContact);
        resetForm();
    } else {
        alert('Not valid');
    }
}

function onContactsListClick(e) {
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
        const id = getContactId(e.target);
        removeContact(id);
    }
}

function init() {
	//contactsList=restoreData();
	fetch ('https://jsonplaceholder.typicode.com/users')
	.then((res)=>res.json())
	.then((data)=> {
		contactsList=data;
		renderList();
	})
}    

function getContact() {
    const contact = {};

    formInputs.forEach((inp) => {
        contact[inp.name] = inp.value;
    });

    return contact;
}

function isContactValid(contact) {
    return (
        isTextFieldValid(contact.name) &&
        isTextFieldValid(contact.email) &&
				isPhoneFieldValid(contact.phone) &&
        isTextFieldValid(contact.address)
    );
}

function isTextFieldValid(value) {
    return value !== '';
}

function isPhoneFieldValid(value) {
    return isTextFieldValid(value) && !isNaN(value);
}

function generateContactHtml(contact) {
    return interpolate(contactTemplate, contact);
}

function addContact(contact) {
    contact.id = Date.now();    
    contactsList.push(contact);
    saveData();
    renderList();
}

function renderList() {
    contactsListEl.innerHTML = contactsList.map(generateContactHtml).join('\n');
}

function resetForm() {
    contactForm.reset();
}

function getContactId(el) {
    const contactRowEl = el.closest(CONTACT_ROW_SELECTOR);

    return +contactRowEl.dataset.contactId;
}

function removeContact(id) {
    contactsList = contactsList.filter((obj) => obj.id !== id);    
    saveData();
    renderList();
}

function saveData() {
	localStorage.setItem (STORAGE_KEY,JSON.stringify(contactsList))
}		

function restoreData() {
		const data=localStorage.getItem(STORAGE_KEY);
	  return data?JSON.parse(data):[];
}