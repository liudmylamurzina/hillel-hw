const CONTACTS_URL=	'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/';
//const formInputs = document.querySelectorAll('.form-input');

export default class ContactsCollection {
	constructor() {
		this.list=[];
		console.log ('Hello from model');	  
	}
	fetchList() {
		return fetch(CONTACTS_URL)
				.then((res) => res.json())
				.then((data) => (this.list = data));
  }
	
  removeContact(contactId) {
		this.list = this.list.filter(({ id }) => id != contactId);
				return fetch(CONTACTS_URL + contactId, {
				method: 'DELETE',
		});
  }
	editContact(contactId) {
		const contact = contactsList.find((contact) => contact.id === id);
    currentId = id;
    setFormData(contact);
		const contactItem = this.list.find(({ id }) => id == contactId);
		//this.list = this.list.filter(({ id }) => id == contactId);
				return fetch(CONTACTS_URL + contactId, {
				method: 'PUT',
				body: JSON.stringify(contactItem),
            headers: {
                'Content-Type': 'application/json',
		}});
	}
	setFormData(contact) {
    formInputs.forEach((inp) => {
        inp.value = contact[inp.name];
    });
  }
	createContact(newContact) {
		return fetch(CONTACTS_URL, {
				method: 'POST',
				body: JSON.stringify(newContact),
				headers: {
						'Content-Type': 'application/json',
				},
		})
				.then((res) => res.json())
				.then((data) => this.list.push(data));
 }
}