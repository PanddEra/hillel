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
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${selectUser.value}`)
        .then(data => setSelectAlbumData(selectAlbum, data.json()));
    selectAlbum.disabled = false;
    status.textContent = '';
})

selectAlbum.addEventListener('change', () => {
    loadButton.disabled = !(selectAlbum.value !== null || selectAlbum.value !== '');
})

loadButton.addEventListener('click', () => {
    photos.textContent = '';
    status.textContent = 'Loading photos...'
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${selectAlbum.value}`)
        .then(data => loadPhotos(data.json()));
})

const setSelectUserData = (select, data) => {
    data.forEach(element =>  select.textContent += `<option value ='${element.id}'>${element.title}</option>`)
}

const setSelectAlbumData = (select, data) => {
    data.forEach(element =>  select.textContent += `<option value ='${element.id}'>${element.name}</option>`)
}

const loadPhotos = (data) => {
    data.forEach(element => {
        photos.textContent += element;
    })
}

