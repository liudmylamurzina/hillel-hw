import $ from 'jquery';
import EventEmitter from '../EventEmitter';
import { interpolate } from '../../../common/js/utils';

export default class TodoRow extends EventEmitter {
    static template = `<div></div>`;

    static todoTemplate = `<div class="task-item u-full-width {{doneClass}}" data-id="{{id}}">
                            {{title}}
                            <span class="delete-btn">✘</span>
                        </div>`;

    static deleteButtonSelector = '.delete-btn';
    static taskItemSelector = '.task-item';

    constructor(model) {
        super();

        this._model = model;
        this._model.on('delete', this.deleteRow);
        this._model.on('update', this.updateRow);

        this.init();
    }

    init() {
        this.$el = $(TodoRow.template);
        this.renderRow();
        this.$el.on('click', TodoRow.deleteButtonSelector, (e) => {
            this._model.delete();
            e.stopPropagation();
        });
        this.$el.on('click', TodoRow.taskItemSelector, () =>
            this._model.toggle(),
        );
    }

    renderRow() {
        this.$el.empty();
        this.$el.html(
            interpolate(TodoRow.todoTemplate, {
                ...this._model,
                doneClass: this._model.isDone ? 'done' : '',
            }),
        );
    }

    deleteRow = () => {
        this.$el.remove();
    };

    updateRow = () => {
        this.renderRow();
    };
}