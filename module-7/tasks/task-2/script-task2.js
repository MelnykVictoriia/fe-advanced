function createUserCard() {
    const strHtml = `
    <div class="card">
        <div class="member-card">
            <img class="member-img" src="https://wallpaperscraft.com/image/blue-eyed_brunette_scarf_85288_1024x1024.jpg" alt="">
            <p class="member-descr">Claudia Cardinale<span class="member-about">29 Philadelphia, PA</span></p>
        </div>
        <ul class="stats">
            <li><span class="icon icon-strawberry"></span><span class='icon-desc'>19</span></li>
            <li><span class="icon icon-lime"></span><span class='icon-desc'>5</span></li>
            <li><span class="icon icon-touch"></li>
	  	</ul>
    </div>
    `
    return strHtml;
}

document.querySelector('body').insertAdjacentHTML('afterbegin', createUserCard());