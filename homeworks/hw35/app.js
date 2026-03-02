'use strict';

const status = document.getElementById('status');
const selectUser = document.getElementById('userSelect');
const selectAlbum = document.getElementById('albumSelect');
const loadButton = document.getElementById('loadBtn');
const photos = document.getElementById('photos');

let allPhotos = [];
let offset = 0;
const LIMIT = 12;

const setStatus = (inputStatus) => {
    status.textContent = inputStatus;
    console.log('Status: ' + inputStatus);
}

const clearStatus = () => {
    status.textContent = '';
    console.log('Status: cleared');
}

const paginate = (array, offset, limit) => array.slice(offset, offset + limit);

const createLoadMoreButton = (callback) => {
    const btn = document.createElement('button');
    btn.id = 'loadMoreBtn';
    btn.textContent = 'Load more';
    btn.addEventListener('click', callback);
    return btn;
}

const createPhotoCard = (photo) => {
    const div = document.createElement('div');

    const img = document.createElement('img');
    img.src = photo.thumbnailUrl;

    const title = document.createElement('p');
    title.textContent = photo.title.length > 40
        ? photo.title.slice(0, 40) + '...'
        : photo.title;

    const link = document.createElement('a');
    link.href = photo.url;
    link.target = '_blank';
    link.textContent = 'Open';

    div.append(img, title, link);
    return div;
}

const fetchUsers = () =>
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            if (!res.ok) throw new Error('HTTP ' + res.status);
            return res.json();
        });

const fetchAlbums = (userId) =>
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
        .then(res => {
            if (!res.ok) throw new Error('HTTP ' + res.status);
            return res.json();
        });

const fetchPhotos = (albumId) =>
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        .then(res => {
            if (!res.ok) throw new Error('HTTP ' + res.status);
            return res.json();
        });

const setSelectUserData = (select, data) => {
    select.innerHTML = '<option value="">Select user...</option>';
    data.forEach(user => {
        const option = document.createElement('option');
        option.value = user.id;
        option.textContent = user.name;
        select.appendChild(option);
    });
}

const setSelectAlbumData = (select, data) => {
    select.innerHTML = '<option value="">Select album...</option>';
    data.forEach(album => {
        const option = document.createElement('option');
        option.value = album.id;
        option.textContent = album.title;
        select.appendChild(option);
    });
}

const loadPhotos = () => {
    const photoToDisplay = paginate(allPhotos, offset, LIMIT);

    photoToDisplay.forEach(photo => {
        const card = createPhotoCard(photo);
        photos.appendChild(card);
    });

    offset += LIMIT;

    const tempForBtn = document.getElementById('loadMoreBtn');
    if (tempForBtn) tempForBtn.remove();

    if (offset < allPhotos.length) {
        const loadMoreBtn = createLoadMoreButton(loadPhotos);
        photos.appendChild(loadMoreBtn);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    setStatus('Loading users...');
    fetchUsers()
        .then(data => setSelectUserData(selectUser, data))
        .catch(error => status.textContent = 'Error: ' + error.message)
        .finally(() => clearStatus());
});

selectUser.addEventListener('change', () => {
    photos.innerHTML = '';
    selectAlbum.disabled = true;
    loadButton.disabled = true;

    setStatus('Loading albums...');
    fetchAlbums(selectUser.value)
        .then(data => {
            setSelectAlbumData(selectAlbum, data);
            selectAlbum.disabled = false;
        })
        .catch(err => status.textContent = 'Error: ' + err.message)
        .finally(() => clearStatus());
});

selectAlbum.addEventListener('change', () => {
    loadButton.disabled = !selectAlbum.value;
});

loadButton.addEventListener('click', () => {
    photos.innerHTML = '';
    offset = 0;

    setStatus('Loading photos...');
    fetchPhotos(selectAlbum.value)
        .then(data => {
            allPhotos = data;
            loadPhotos();
        })
        .catch(err => status.textContent = 'Error: ' + err.message)
        .finally(() => clearStatus());
});