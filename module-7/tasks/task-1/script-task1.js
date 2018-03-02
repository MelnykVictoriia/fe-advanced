function createElement() {
    const card = document.createElement('div');
    card.classList.add('card');

    const memberCard = document.createElement('div');
    memberCard.classList.add('member-card');

    const image = document.createElement('img');
    image.classList.add('member-img');
    image.setAttribute('src', 'https://wallpaperscraft.com/image/blue-eyed_brunette_scarf_85288_1024x1024.jpg');
    image.setAttribute('alt', 'Photo of gir');

    const memberDesc = document.createElement('p');
    memberDesc.classList.add('member-descr');
    memberDesc.textContent = 'Claudia Cardinale';

    const about = document.createElement('span');
    about.classList.add('member-about');
    about.textContent = '29 Philadelphia, PA';

    const list = document.createElement('ul');
    list.classList.add('stats');

    const itemStrawberry = document.createElement('li');

    const iconStrawberry = document.createElement('span');
    iconStrawberry.classList.add('icon', 'icon-strawberry');

    const iconDescStrawberry = document.createElement('span');
    iconDescStrawberry.classList.add('icon-desc');
    iconDescStrawberry.textContent = '19';

    const itemLime = document.createElement('li');

    const iconLime = document.createElement('span');
    iconLime.classList.add('icon', 'icon-lime');

    const iconDescLime = document.createElement('span');
    iconDescLime.classList.add('icon-desc');
    iconDescLime.textContent = '5';

    const itemTouch = document.createElement('li');

    const iconTouch = document.createElement('span');
    iconTouch.classList.add('icon', 'icon-touch');

    itemTouch.append(iconTouch);
    itemLime.append(iconLime, iconDescLime);
    itemStrawberry.append(iconStrawberry, iconDescStrawberry);
    list.append(itemStrawberry, itemLime, itemTouch);
    memberDesc.append(about);
    memberCard.append(image, memberDesc);
    card.append(memberCard, list);

    return card;
}

document.querySelector('body').append(createElement());