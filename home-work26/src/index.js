import '../../common/css/normalize.css';
import '../../common/css/skeleton.css';
import '../../common/css/dark-theme.css';
import './styles.css';

import $ from 'jquery';
import TodosController from './controller/TodosController';

$(() => {
    new TodosController($('body'));
});