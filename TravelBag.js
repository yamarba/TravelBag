const updateTravelBag = (update) => { // creating an arrow function
    let main = document.querySelector("main");
    main.innerHTML = markup(travelBag);
    console.info(update);
};

const travelBag = {
    name: "Travel Duffle Bag",
    volume: 52,
    color: "bourbon",
    dimensions: {
        length: 30,
        height: 35,
        width: 25
    },
    box: {
        name: "gift box",
        color: "purple",
        shape: "square",
        size: "medium",
        content: "watch"
    },
    zipperOpen: false,
    toggleZipper: function(zipperStatus) {
        this.zipperOpen = zipperStatus;
    },
    newDimensions: function(dimensionsLength, dimensionsHeight, dimensionsWidth){
        this.dimensions.length = dimensionsLength;
        this.dimensions.height = dimensionsHeight;
        this.dimensions.width = dimensionsWidth;
    },
}

export default travelBag;
