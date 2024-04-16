# Intersection Events

Simplifies the intersection observer so it can be used as an event.

## Example

https://woollymittens.github.io/intersection-events/

## Instructions

``` javascript
import { IntersectionEvents } from "./intersection-events.js";

const intersectionEvents = new IntersectionEvents({
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: [0],
});

intersectionEvents.watch(YOUR_ELEMENT);

YOUR_ELEMENT.addEventListener("visible", (evt) => {
    console.log('do this when YOUR_ELEMENT scrolls into view', evt);
});
```

## License

&copy; Maurice van Creij. Licensed under [The MIT License](https://opensource.org/licenses/MIT).
