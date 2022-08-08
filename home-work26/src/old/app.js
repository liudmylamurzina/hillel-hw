import './styles.css';

import $ from 'jquery';
import { TodoController } from './controller/TodosController';

$(() => {
    new TodoController($('.container'));
});