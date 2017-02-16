import scrollMonitor from 'scrollmonitor';



// Preload an image and fire a callback
const preloadImage = (src, cb = () => {}) => {

    const image = new Image();

    image.onload = cb;

    image.src = src;

};


// Load images and animate them when they're ready.
const startTime = new Date();
// Get all images with `.js-load-image`
const imagesToLoad = [...document.querySelectorAll('.js-load-image')];



imagesToLoad.forEach((img, imgIndex) => {

    let delay = 60 * imgIndex;

    // the src, whether it's a `data-src` or `src`
    const src = img.dataset.src || img.src;

    // When we're done we'll add a class to a target or the original img
    const target = img.dataset.target ? document.querySelector(img.dataset.target) : img;

    // Add the `data-class` or default to `is-animating`;
    const targetClass = img.dataset.class || 'is-animating';


    // Create a watcher to load the images when in view.
    const elementWatcher = scrollMonitor.create(img, 50);

    elementWatcher.enterViewport(() => {

        // Load the image in mem
        preloadImage(src, () => {

            // Apply the src to the real image tag
            imagesToLoad[imgIndex].src = src;

            // Update the delay by taking into account how long it's been since we
            // started loading the page. Prevent stagered loading from making it
            // seem longer.
            delay = Math.max(0, delay - (new Date() - startTime));

            // After waiting a tick apply the targetClass to the target
            window.setTimeout(() => {
                window.requestAnimationFrame(() => {
                    target.classList.add(targetClass);
                });
            }, delay);

        });

        // We don't need the watcher anymore
        elementWatcher.destroy();

    });

    window.addEventListener('load', function load() {

        // Preload the image anyways once the site has loaded.
        preloadImage(src, () => {
            // If we've preloaded the image, we don't want to delay it's animation anymore
            delay = 0;
        });

        // We don't need the load eveny anymore
        window.removeEventListener('load', load, false);

    });

});
