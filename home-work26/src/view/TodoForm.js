import $ from 'jquery';
import EventEmitter from '../EventEmitter';

export default class TodoForm extends EventEmitter {
    static template = `
                <form id="addTaskForm">
                    <div class="row">
                        <div class="ten columns">
                            <input
                                type="text"
                                name="title"
                                id="taskNameInput"
                                class="u-full-width"
                            />
                            <span id="errorContainer" class="error hidden"></span>
                        </div>
                        <div class="two columns">
                            <button type="submit" id="addBtn" class="u-full-width">
                                Add
                            </button>
                        </div>
                    </div>
                </form>`;
    constructor() {
        super();

        this.init();
    }

    init() {
        this.$el = $(TodoForm.template);
        this.$el.on('submit', (e) => {
            e.preventDefault();

            const formData = this._getFormData();

            this.trigger('save', formData);
            this.reset();
        });

        this._$inputs = this.$el.find('input');
    }

    _getFormData() {
        const formData = {};

        this.$el
            .serializeArray()
            .forEach(({ name, value }) => (formData[name] = value));

        return formData;
    }

    reset() {
        this._$inputs.each((_, input) => {
            input.value = '';
        });
    }
}