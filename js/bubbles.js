function createBubble() {
    const createElement = document.createElement('span');
    var size = Math.random() * 60;

    createElement.style.width = 20 + size + 'px';
    createElement.style.height = 20 + size + 'px';
    createElement.style.left = Math.random() * innerWidth + 'px';
    section.appendChild(createElement);
    setTimeout(() => {
        createElement.remove();
    }, 10000);
}

setInterval(createBubble, 500);