const getPhotos = async() => {
    const response = await fetch('https://api.unsplash.com/photos?per_page=4', {
        method: 'GET',
        headers: {
            "Authorization": 'Client-ID wt660TYZ2fSowr3c53HrFsIUBmhkaufVSRNg9iMDQEU',
        }
    });
    const data = await response.json();
    return data
}

const createCard = (imageData) => {
    const cardEl = document.createElement('div');
    cardEl.className = 'card';
    cardEl.setAttribute('auth', imageData.user.name)
    cardEl.setAttribute('date', dayjs(imageData.created_at).format('DD/MM/YYYY'))
    const getDescriptionOrId = () => {
        if (imageData.description) {
            return imageData.description;
        };
        return imageData.id;
    }
    cardEl.setAttribute('description', getDescriptionOrId())
    cardEl.setAttribute('img', imageData.urls.full)
    cardEl.setAttribute('user-link', imageData.user.links.html)
    document.body.appendChild(cardEl);
}
const generateCards = async() => {
    const photos = await getPhotos();
    photos.map(p => {
        createCard(p);
    })
}
generateCards();