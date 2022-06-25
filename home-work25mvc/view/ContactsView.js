class ContactsView {
	constructor($container, config) {
			this._contactsListView = new ContactsListView(config);

			this._contactFormView = new ContactFormView(config);

			$container.append(this._contactsListView.$el);
			$container.append(this._contactFormView.$el);
	}

	//renderList(data) {
	//		this._contactsListView.renderList(data);
	//}
}