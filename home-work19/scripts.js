$(() => {
const URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers';

const DELETE_NOTE_CLASS = 'delete-note';
const EDIT_NOTE_CONTROL_CLASS = 'edit-note-control';

const noteTemplate = $('#noteTemplate').html();
const $fieldElement = $('#field');

let notesList = [];

$ ('#addNoteBtn').on('click', onAddNoteBtnClick);

$fieldElement.on ('focusout', '.'+EDIT_NOTE_CONTROL_CLASS,onFieldItemToggle);
$fieldElement.on('click','.'+DELETE_NOTE_CLASS, onFieldItemDelete); 

init();

function onAddNoteBtnClick() {
    createNote();
}

function onFieldItemDelete(e) {
  	deleteNote(e.target.closest.data('$noteIndex'));
		//deleteNote(e.target.closest.data.noteIndex);
 }         

function onFieldItemToggle(e) {
	const element = e.target;
	updateNote(
		element.closest.data('$noteIndex'),
		element.name,
		element.value,
);
}

function init() {
    getList();
}

function getList() {
    fetch(URL)
        .then((res) => res.json())
        .then(setData)
        .then(renderList);
}

function setData(data) {
    return (notesList = data);
}

function getNoteElement(id) {
    //return $fieldElement.querySelector(`[data-note-index="${id}"]`);
	 return $fieldElement (`#[data-note-index="${id}"]`);
}

function createNote() {
    const note = {
        description: '',
    };

    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
    })
        .then((res) => res.json())
        .then((note) => {
            notesList.push(note);
            renderNote(note);
        });
}

function updateNote(id, name, value) {
    const note = notesList.find((el) => el.id == id);

    note[name] = value;

    fetch(`${URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
    });
}

function deleteNote(id) {
    notesList = notesList.filter((el) => el.id != id);

    deleteNoteElement(id);

    fetch(`${URL}/${id}`, {
        method: 'DELETE',
    });
}

function deleteNoteElement(id) {
    const $element = getNoteElement(id);

    $element && $element.remove();
}

function renderList(notesList) {
    notesList.forEach(renderNote);
}

function renderNote(note) {
  $fieldElement.before(getNoteHtml(note));
}    

function getNoteHtml(note) {
    return noteTemplate
        .replace('{{id}}', note.id)
        .replace('{{description}}', note.description);
}
})