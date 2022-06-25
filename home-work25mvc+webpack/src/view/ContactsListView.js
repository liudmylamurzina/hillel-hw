import $ from 'jquery';

export default class ContactsListView {
	static LIST_TEMPLATE = `<tbody id="contactsList"></tbody>`;
	static LIST_ITEM_TEMPLATE = `<tr class="contact-row" data-id="{{id}}">
	<td>{{name}}</td>
	<td>{{email}}</td>
	<td>	
			<button type="button" class="edit-btn">Edit</button>
			<button type="button" class="delete-btn">Delete</button>
	</td>
</tr>`;

	static TASK_SELECTOR = '.contact-row';
	static TASK_DELETE_SELECTOR = '.delete-btn';
	static TASK_EDIT_SELECTOR = '.edit-btn';
	static createItemElement(contact) {
		return $(
				ContactsListView.LIST_ITEM_TEMPLATE.replace('{{id}}', contact.id)
						.replace('{{name}}', contact.name)
						.replace('{{email}}', contact.email)
						//.replace('{{phone}}', contact.phone),
		);
}

	constructor(config={}){
		console.log('hello from list'),
		this.$el=$(ContactsListView.LIST_TEMPLATE)
		.on('click', ContactsListView.TASK_DELETE_SELECTOR, (e) => {
			e.stopPropagation();
			config.onDelete &&
					config.onDelete(
							$(e.target)
									.closest(ContactsListView.TASK_SELECTOR)
									.data('id'),
					)
		})		  
    .on('click', ContactsListView.TASK_EDIT_SELECTOR, (e) => {
			e.stopPropagation();
			config.onEdit &&
					config.onEdit(
							$(e.target)
									.closest(ContactsListView.TASK_SELECTOR)
									.data('id'),
					)
		})	
	}
	renderList(list){
		this.$el.empty();
		this.$el.append(list.map(ContactsListView.createItemElement));
	}
	
}
