/*! Intersection Events v0.0.1 - (c) 2024 Maurice van Creij - MIT License - https://github.com/WoollyMittens */

// public handler class
export class IntersectionEvents {
	constructor(options) {
		// define the default options
		const defaults = {
			root: null,
			rootMargin: "0px 0px 0px 0px",
			threshold: [0],
		};
		// override the default options
		this.options = { ...defaults, ...options };
		// start the intersection observer
		this.observer = new IntersectionObserver(this.handle.bind(this), this.options);
	}

	// adds an element to the observed list
	watch(elem) {
		// observe the given element
		this.observer.observe(elem);
	}

	// triggers an event for every intersection
	handle(intersections, observer) {
		// for every intersection change
		for (let intersection of intersections) {
			// construct a custom event
			let evt = new CustomEvent("visible", {
				bubbles: true,
				cancelable: false,
				detail: {
					intersection: intersection,
					observer: observer,
				},
			});
			// and dispatch it
			intersection.target.dispatchEvent(evt);
		}
	}
}

// expose the main class (disable if importing)
window.IntersectionEvents = IntersectionEvents;
