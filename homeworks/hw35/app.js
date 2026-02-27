'use strict';

const status = document.getElementById('status');
const selectUser = document.getElementById('userSelect');
const selectAlbum = document.getElementById('albumSelect');
const loadButton = document.getElementById('loadBtn');
const photos = document.getElementById('photos');


window.addEventListener('DOMContentLoaded', () => {
    status.textContent = 'Loading users...';
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(data => setSelectUserData(selectUser, data.json()));
    status.textContent = '';
});

selectUser.addEventListener('change', () => {
    photos.textContent = '';
    selectAlbum.disabled = true;
    loadButton.disabled = true;
    status.textContent = 'Loading albums...'
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${selectUser.id}`)
        .then(data => setSelectAlbumData(selectAlbum, data));
    selectAlbum.disabled = false;
    status.textContent = '';
})

selectAlbum.addEventListener('change', () => {
    loadButton.disabled = !(selectAlbum.value !== null || selectAlbum.value !== '');
})

const setSelectUserData = (select, data) => {
    data.forEach(element => temp(element))
    const temp = (element) => {
        select.text = element.name;
        select.value = element.id;
    }
}

const setSelectAlbumData = (select, data) => {
    data.forEach(element => {
        select.text = element.title;
        select.value = element.id;
    })
}

