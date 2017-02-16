const test = "ontouchstart" in window || navigator.msMaxTouchPoints;

document.documentElement.classList.add(test ? 'touch' : 'no-touch');
