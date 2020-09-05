/*
 * JS Simple Carousel
 * Author: Dhiogo Boza
 * Author URI: https://dhiogoboza.github.io
 */
"use strict";

let SimpleCarousel = class {
    constructor(element, options) {
        this.settings = {
            itemsPadding: 0,
            rightIconClass: '',
            leftIconClass: '',
            disabledButtonsOpacity: 0.4
        };

        this.currentFocus = 0;
        this.element = element;
        this.container = element.children[0];

        for (var key in options) {
            if (options.hasOwnProperty(key)) {
                this.settings[key] = options[key];
            }
        }       

        this.init();
    }

    controlsClick(event) {
        if (event.target.id == "sc-previous") {
            if (this.currentFocus !== 0) {
                this.currentFocus--;
                while (this.currentFocus > 0 && this.slides[this.currentFocus].getBoundingClientRect().left > 0) {
                    this.currentFocus--;
                }
            } else {
                return;
            }
        } else {
            let lastIndex = this.slides.length - 1;
            if (this.currentFocus !== lastIndex) {
                this.currentFocus++;
                while (this.currentFocus < lastIndex && this.slides[this.currentFocus].getBoundingClientRect().left < this.element.getBoundingClientRect().width) {
                    this.currentFocus++;
                }
            } else {
                return;
            }
        }

        this.updateControlsStatus();
        this.slides[this.currentFocus].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });
    }

    updateControlsStatus() {
        if (this.currentFocus === 0) {
            this.previous.style.cursor = "unset";
            this.previous.style.opacity = this.settings.disabledButtonsOpacity + "";
        } else {
            this.previous.style.cursor = "pointer";
            this.previous.style.opacity = "1";

            if (this.currentFocus === this.slides.length - 1) {
                this.next.style.cursor = "unset";
                this.next.style.opacity = this.settings.disabledButtonsOpacity + "";
            } else {
                this.next.style.cursor = "pointer";
                this.next.style.opacity = "1";
            }
        }
    }

    setupControls(child, id, iconClass, beforeOf) {
        child.id = id;
        child.style.display = "block";
        child.style.position = "absolute";
        child.classList.add(...iconClass.split(" "));
        this.element.insertBefore(child, beforeOf);

        child.style.top = ((this.element.getBoundingClientRect().height - child.clientHeight) / 2) + "px";
        child.addEventListener("click", this.controlsClick.bind(this));

        return child;
    }

    init() {
        this.element.style.position = "relative";
        this.element.style.overflowX = this.container.style.overflowX = "hidden";
        this.element.style.overflowY = this.container.style.overflowY = "hidden";

        let greater = 0;
        this.slides = [];
        for (let index in this.container.children) {
            if (this.container.children.hasOwnProperty(index)) {
                let child = this.container.children[index];
                if (child.getBoundingClientRect().height > greater) {
                    greater = child.getBoundingClientRect().height;
                }

                child.style.display = "inline-block";
                child.style.verticalAlign = "middle";
                if (greater !== 0) {
                    child.style.paddingLeft = this.settings.itemsPadding + "px";
                }
                this.slides.push(child);
            }
        }

        this.previous = document.createElement("i");
        this.setupControls(this.previous, 'sc-previous', this.settings.leftIconClass, this.container);

        this.next = document.createElement("i");
        this.next.style.right = "0px";
        this.setupControls(this.next, 'sc-next', this.settings.rightIconClass, this.container.nextSibling);

        this.updateControlsStatus();

        let previousWidth = this.previous.getBoundingClientRect().width * 1.5;
        let nextWidth = this.next.getBoundingClientRect().width * 1.5;

        this.container.style.marginLeft = previousWidth + "px";
        this.container.style.marginRight = nextWidth + "px";

        this.container.style.whiteSpace = "nowrap";
        this.container.style.width = "calc(100% - " + (previousWidth + nextWidth) + ")";
        this.container.style.height = greater + "px";
    }
}
