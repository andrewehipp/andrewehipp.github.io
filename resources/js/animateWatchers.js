import scrollMonitor from 'scrollmonitor';



// Lazy load the images.
const nodes = [...document.querySelectorAll('.js-animate')];

nodes.forEach((node) => {

    const elementWatcher = scrollMonitor.create(node);
    const target = document.querySelector(node.dataset.target) || node;

    // Play when it's in view
    elementWatcher.enterViewport(() => {
        target.classList.add('is-animating');

        elementWatcher.destroy();
    });

});
