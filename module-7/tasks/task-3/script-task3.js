const user1 = {
    img: 'https://wallpaperscraft.com/image/blue-eyed_brunette_scarf_85288_1024x1024.jpg',
    name: 'Claudia Cardinale',
    age: 29,
    location: 'Philadelphia, PA',
    strawberries: 19,
    lemons: 5
};

const user2 = {
    img: 'https://wallpaperscraft.com/image/chris_hemsworth_actor_photo_shoot_snl_saturday_night_live_2015_100924_1024x1024.jpg',
    name: 'Chris Hemsworth',
    age: 34,
    location: 'Melbourne, Australia',
    strawberries: 31,
    lemons: 7
};

const user3 = {
    img: 'https://wallpaperscraft.com/image/keira_knightley_brunette_face_makeup_eyes_104068_1024x1024.jpg',
    name: 'Keira Knightley',
    age: 32,
    location: 'Teddìngton, UK',
    strawberries: 51,
    lemons: 9
};

function createElement(obj) {
    const card = document.createElement('div');
    card.classList.add('card');

    const memberCard = document.createElement('div');
    memberCard.classList.add('member-card');

    const image = document.createElement('img');
    image.classList.add('member-img');
    image.setAttribute('src', `${obj.img}`);
    image.setAttribute('alt', 'Photo of gir');


    const memberDesc = document.createElement('p');
    memberDesc.classList.add('member-descr');
    memberDesc.textContent = `${obj.name}`;

    const about = document.createElement('span');
    about.classList.add('member-about');
    about.textContent = `${obj.age} · ${obj.location}`;

    const list = document.createElement('ul');
    list.classList.add('stats');

    const itemStrawberry = document.createElement('li');

    const iconStrawberry = document.createElement('span');
    iconStrawberry.classList.add('icon', 'icon-strawberry');

    const iconDescStrawberry = document.createElement('span');
    iconDescStrawberry.classList.add('icon-desc');
    iconDescStrawberry.textContent = `${obj.strawberries}`;

    const itemLime = document.createElement('li');

    const iconLime = document.createElement('span');
    iconLime.classList.add('icon', 'icon-lime');

    const iconDescLime = document.createElement('span');
    iconDescLime.classList.add('icon-desc');
    iconDescLime.textContent = `${obj.lemons}`;

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

document.querySelector('body').append(createElement(user1));
document.querySelector('body').append(createElement(user2));
document.querySelector('body').append(createElement(user3));