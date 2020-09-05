JS Simple Carousel
========

A simple carousel in vanilla javascript (size < 5KB).

Usage
-----

Add the script in your page:

```html
<script src="simple-carousel.js"></script>
```

Enable the plugin using:

```js
new SimpleCarousel(document.getElementById("your-container"), {
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
![Screenshot 02](screenshots/02.png?raw=true "2 slide visible")
![Screenshot 03](screenshots/03.png?raw=true "4 slide visible")

Pages using
-------
* [http://rastreioshare.com/](http://rastreioshare.com/)

License
-------

JS Simple Carousel is licensed under the [MIT license](LICENSE).
