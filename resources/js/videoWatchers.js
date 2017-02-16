import scrollMonitor from 'scrollmonitor'; // if you're not using require, you can use the scrollMonitor global.



/**
 * Pause / Play videos if they're in view
 */
const videos = [...document.querySelectorAll('video')];

videos.forEach((video, videoIndex) => {

    const elementWatcher = scrollMonitor.create(video);

    // Play when it's in view
    elementWatcher.fullyEnterViewport(() => {
        video.play();
    });

    // Pause if it's slightly out of view
    elementWatcher.partiallyExitViewport(() => {
        video.pause();
    });

    // Reset the video if its' completly out of view
    elementWatcher.exitViewport(() => {
        videos[videoIndex].currentTime = 0;
    });

});
