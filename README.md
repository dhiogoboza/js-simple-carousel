JS Simple Carousel
========

A simple carousel in vanilla javascript (size < 5KB).

Usage
-----

Add the script in your page:

```html
<script src="simple-carousel.js"></script>
```

HTML elements:
```html
<div id="carousel">
    <div>
        <img src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png">
        <img style="height: 220px" src="https://homepages.cae.wisc.edu/~ece533/images/arctichare.png">
        <img src="https://homepages.cae.wisc.edu/~ece533/images/baboon.png">
        <img src="https://homepages.cae.wisc.edu/~ece533/images/barbara.png">
        <img src="https://homepages.cae.wisc.edu/~ece533/images/boat.png">
        <img src="https://homepages.cae.wisc.edu/~ece533/images/cat.png">
    </div>
</div>
```

Enable the plugin using:

```js
new SimpleCarousel(document.getElementById("carousel"), {
    // Padding between slides
    itemsPadding: 0,
    // Classes for next slide button
    rightIconClass: '',
    // Classes for previous slide button
    leftIconClass: '',
    // Opacity for controls when they are disabled
    disabledButtonsOpacity: 0.5
}).start();
```

A demo titled `index.html` is included in this repository. Open it to see the end-result. Live demo: [https://dhiogoboza.github.io/js-simple-carousel/](https://dhiogoboza.github.io/js-simple-carousel).

Screenshots
-------

![Screenshot 01](screenshots/01.png?raw=true "1 slide visible")
![Screenshot 02](screenshots/02.png?raw=true "2 slides visible")
![Screenshot 03](screenshots/03.png?raw=true "4 slides visible")

Pages using
-------
* [https://rastreioshare.com/](https://rastreioshare.com/)

License
-------

JS Simple Carousel is licensed under the [MIT license](LICENSE).
