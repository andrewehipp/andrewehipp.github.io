const keyCodes = {
    left: 37,
    right: 39,
};


const next = document.querySelector('.js-next-page');
const prev = document.querySelector('.js-prev-page');


if (next && prev) {
    window.addEventListener('keydown', (event) => {

        switch(event.keyCode) {
            case keyCodes.left:
                window.location = prev.href;
                break;
            case keyCodes.right:
                window.location = next.href;
                break;
            default:
                break;
        }
    })
}
