const API_URL='https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/';
const STICKERS_ITEM_CLASS='stickers-item';
const DELETE_BTN_CLASS = 'delete-btn';
const ADD_BTN_CLASS = 'add-btn';
const STICKER_ITEM_SELECTOR = '.stickers-item';

const STORAGE_KEY = 'stickersList';
const stickersListEl=document.getElementById('stickersList');
const STICKER_ITEM_TEMPLATE=document.getElementById('stickerItemTemplate').innerHTML;
const addBtn = document.getElementById('addBtn');
const stickerForm = document.querySelector('#addStickersForm');
stickerForm.addEventListener('submit', onStickerFormSubmit);
stickersListEl.addEventListener('click', onStickersListClick);
stickersListEl.addEventListener('change', onStickersListChange);

let stickersList = [];
const stickersApi = new RespApi(
	'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/',
);

init();

function onStickerFormSubmit(e) {
	e.preventDefault();

	const sticker = getFormData();

			saveSticker(sticker);
}			

function onStickersListClick(e) {
	if (e.target.classList.contains(DELETE_BTN_CLASS)) {
			const id = getStickerItemId(e.target);
			removeSticker(id);
	}
	if (e.target.classList.contains(ADD_BTN_CLASS)) {
			const id = getStickerItemId(e.target);
			addSticker(id);
	}
}

function onStickersListChange(sticker) {
	updateSticker(sticker);
}

function init() {
	fetchList();
}

function fetchList() {
	stickersApi.getList().then((data) => {
			stickersList = data;
			renderList();
	});
}

function getFormData() {
	const sticker = {};
		return sticker;
}

function getStickerItemId(el) {
	return el.closest(STICKER_ITEM_SELECTOR).dataset.id;
}
function renderList() {
	stickersListEl.innerHTML = stickersList.map(renderListItem).join('\n');
	return stickersList;
}
function removeSticker(id) {
	const prevIndex = stickersList.findIndex((c) => c.id === id);
	const prevContact = stickersList[prevIndex];

	stickersList = stickersList.filter((sticker) => sticker.id !== id);

	renderList();

	stickersApi.delete(id).catch(() => {
		stickersList.splice(prevIndex, 0, prevContact);
			renderList();
	});
}
function saveSticker(sticker) {
	if (sticker.id) {
			updateSticker(sticker);
	} else {
			addSticker(sticker);
	}
}

function updateSticker(sticker) {
	sticker.id = sticker.id;

	const prevSticker = stickersList.find((c) => c.id === sticker.id);

	stickersList = stickersList.map((c) => (c.id === sticker.id ? sticker : c));
	renderList();

	stickersApi.update(sticker).catch(() => {
		stickersList = stickersList.map((c) =>
					c.id === prevSticker.id ? prevSticker : c,
			);
			renderList();
	});
}
function addSticker(sticker) {
		stickersApi	
			.create(sticker)
			.then((data) => {
				stickersList.push(data); 
				renderList();					
			});
}						
function renderListItem(sticker) {
	return interpolate(STICKER_ITEM_TEMPLATE, sticker);
}
