import $ from 'jquery';

export default class ContactFormView {
	static FORM_TEMPLATE = `<form id="newContactForm" class="form">
  <table class="u-full-width">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>                        
                    </tr>
                </thead>
                <tbody id="contactsList"></tbody>
                <tfoot>
                    <tr>
                        <td>
                            <input type="hidden" name="id" class="form-input" />
                            <input
                                type="text"
                                name="name"
                                id="nameInput"
                                class="form-input"
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                name="email"
                                id="emailInput"
                                class="form-input"
                            />
                        </td>
                        <td>                        
                            <input
                                type="submit"
                                id="saveContactBtn"
                                value="Save Contact"
                            />
                        </td>
                    </tr>
                </tfoot>
            </table>
				</form>`;
	static TASK_NAME_SELECTOR = '#nameInput';
	static TASK_MAIL_SELECTOR = '#emailInput';			
   constructor(config) {
	    this._config = config;
			this.$el = $(ContactFormView.FORM_TEMPLATE).on('submit', (e) =>
			this.onFormSubmit(e),
	);
	 }
	 onFormSubmit(e) {
		e.preventDefault();
	
		const taskName = this.$el.find(ContactFormView.TASK_NAME_SELECTOR).val();
		const taskMail = this.$el.find(ContactFormView.TASK_MAIL_SELECTOR).val();
	
		this._config.onSave && this._config.onSave({ name: taskName,email:taskMail });
	
		this.$el.trigger('reset');
	 }		
}