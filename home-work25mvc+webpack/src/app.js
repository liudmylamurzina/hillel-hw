import './styles.css';

import $ from 'jquery';
import { ContactsController } from './controller/ContactsController';

$(() => {
	new ContactsController($('.container'));
});