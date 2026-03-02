'use strict';

const status = document.getElementById('status');
const selectUser = document.getElementById('userSelect');
const selectAlbum = document.getElementById('albumSelect');
const loadButton = document.getElementById('loadBtn');
const photos = document.getElementById('photos');
let allPhotos = [];
let offset = 0;
const LIMIT = 12;


window.addEventListener('DOMContentLoaded', () => {
    setStatus('Loading users...');
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('HTTP ' + response.status);
            }
            return response.json();
        })
        .then(data => setSelectUserData(selectUser, data))
        .catch(error => status.textContent = 'Error: ' + error.message)
        .finally(() => clearStatus());
});

selectUser.addEventListener('change', () => {
    photos.textContent = '';
    selectAlbum.disabled = true;
    loadButton.disabled = true;
    setStatus('Loading albums...');
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${selectUser.value}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('HTTP ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            setSelectAlbumData(selectAlbum, data);
            selectAlbum.disabled = false;
        })
        .catch(error => status.textContent = 'Error: ' + error.message)
        .finally(() => clearStatus());

})

selectAlbum.addEventListener('change', () => {
    loadButton.disabled = !selectAlbum.value;
})

loadButton.addEventListener('click', () => {
    photos.textContent = '';
    setStatus('Loading photos...');
    offset = 0;
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${selectAlbum.value}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('HTTP ' + response.status);
            }
            return response.json();
        })
        .then(data => {
                allPhotos = data;
                loadPhotos();
            }
        )
        .catch(error => status.textContent = 'Error: ' + error.message)
        .finally(() => clearStatus());
})

const setSelectUserData = (select, data) => {
select.innerHTML = '';
    data.forEach(element => {
        const option = document.createElement('option');
        option.value = element.id;
        option.textContent = element.name;
        select.appendChild(option);
    });
}

const setSelectAlbumData = (select, data) => {
    select.innerHTML = '';
    data.forEach(element => {
        const option = document.createElement('option');
        option.value = element.id;
        option.textContent = element.title;
        select.appendChild(option);
    });
}

const loadPhotos = () => {
    const photoToDisplay = allPhotos.slice(offset, offset + LIMIT);
    photoToDisplay.forEach(photo => {
        const card = createPhotoCard(photo);
        photos.appendChild(card);
    });
    offset += LIMIT;

    if (offset < allPhotos.length) {
        const loadMoreBtn = document.createElement('button');
        loadMoreBtn.id = 'loadMoreBtn';
        loadMoreBtn.textContent = 'Load more';
        loadMoreBtn.addEventListener('click', () => {
            loadMoreBtn.remove();
            loadPhotos();
        });
        photos.appendChild(loadMoreBtn);
    }
}
const setStatus = (inputStatus) => {
    status.textContent = inputStatus;
    console.log('Status: ' + inputStatus)
}

const clearStatus = () => {
    status.textContent = '';
    console.log('Status: cleared')
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
