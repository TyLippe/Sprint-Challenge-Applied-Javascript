class Carousel {
    constructor(element) {
        this.element = element
        //Select buttons for click event
        this.leftButton = document.querySelector('left-button')
        this.rightButton = document.querySelector('.right-button')
        //Select All Images //Edit, put imgs in an Array?
        this.imgs = Array.from(document.querySelectorAll('.carousel img')).map(img => new CarouselImg(img))
        //Add click events
        this.leftButton.addEventListener('click', () => this.prevImg())
        this.rightButton.addEventListener('click', () => this.nextImg())
    }
    nextImg(){

    }
    prevImg() {
    
    }
}

let carousel = document.querySelector('.carousel')
carousel = new Carousel(carousel)

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
