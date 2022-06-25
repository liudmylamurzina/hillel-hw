import ContactFormView from '../view/ContactFormView';
import ContactsCollection from '../model/ContactsCollection';
import ContactsListView from '../view/ContactsListView';
import ContactsView from '../view/ContactsView';

export class ContactsController {
	constructor($container) {
		console.log ('Hi,I am a constructor');
		//this._view = new ContactsView($container);
		this._contactsListView=new ContactsListView({
			onDelete:(id)=>this.removeContact(id),
			onEdit:(id)=>this.editContact(id),
		});
		this._contactFormView = new ContactFormView	({
			onSave:(newContact)=>this.createContact(newContact),
	});			

		$container.append(this._contactsListView.$el);
			$container.append(this._contactFormView.$el);

			this._contactsList = new ContactsCollection();
			this._contactsList
					.fetchList()
					.then(() => this._contactsListView.renderList(this._contactsList.list));
	  }
	  removeContact(id) {
		  this._contactsList.removeContact(id);
		  this._contactsListView.renderList(this._contactsList.list);
    }
    editContact(id) {
		  this._contactsList.editContact(id);
		  this._contactsListView.renderList(this._contactsList.list);
    }
		createContact(newContact) {
			this._contactsList
					.createContact(newContact)
					.then(() => this._contactsListView.renderList(this._contactsList.list));
	 }
	}

