class TodosController {
	constructor($container) {
			this._todosListView = new TodosListView({
					onToggle: (id) => this.toggleTodo(id),
					onDelete: (id) => this.removeTodo(id),
			});
			this._todoFormView = new TodoFormView	({
          onSave:(newTodo)=>this.createTodo(newTodo),
			});			

			$container.append(this._todosListView.$el);
			$container.append(this._todoFormView.$el);

			this._todosList = new TodosCollection();
			this._todosList
					.fetchList()
					.then(() => this._todosListView.renderList(this._todosList.list));
	}

	toggleTodo(id) {
			this._todosList.toggleTodo(id);
			this._todosListView.renderList(this._todosList.list);
	}

	removeTodo(id) {
			this._todosList.removeTodo(id);
			this._todosListView.renderList(this._todosList.list);
	}
	createTodo(newTodo) {
		this._todosList
				.createTodo(newTodo)
				.then(() => this._todosListView.renderList(this._todosList.list));
 }
}
