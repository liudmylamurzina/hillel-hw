import $ from 'jquery';
import TodoForm from './TodoForm';
import TodosList from './TodosList';

export default class TodosView {
    static template = '<div class="u-full-width u-full-height"></div>';

    constructor($container, collection) {
        this._collection = collection;
        this.init();
        this.$el.appendTo($container);

        this._$listView = new TodosList(collection);
        this.$el.append(this._$listView.$el);

        this._$formView = new TodoForm();
        this.$el.append(this._$formView.$el);

        this._$formView.on('save', this.saveData);
    }

    init() {
        this.$el = $(TodosView.template);
    }

    saveData = (data) => {
        this._collection.createTodo(data);
    };
}