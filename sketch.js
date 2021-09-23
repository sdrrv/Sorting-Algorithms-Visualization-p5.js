function setup() {
    createCanvas(windowWidth, windowHeight);
    sizeSlider = createSlider(10, 95, 25, 5);
    sizeSlider.position(windowWidth * 0.01, windowHeight * 0.01);
    sizeSlider.style('width', '100px');
    size = 25;
    numList = populateNumList(size, 100);


    noStroke();
    fill(250);
    sortButton = createButton("Sort!");
    sortButton.position(windowWidth * 0.95, windowHeight * 0.02);
    sortButton.size(windowWidth / windowHeight * 25);
    sortButton.mousePressed(sortList);
}

function draw() {
    background(220);
    //----Size-Text----------
    strokeWeight(1);
    textSize(25);
    fill(0);
    text(sizeSlider.value(), sizeSlider.size().width / 2, windowHeight * 0.08);
    //-----------------------
    if (sizeSlider.value() != size) {
        size = sizeSlider.value();
        numList = populateNumList(size, 100);
    }

    drawNumList();
}

function shadow(xoff, yoff) {
    drawingContext.shadowOffsetX = xoff;
    drawingContext.shadowOffsetY = yoff;
    drawingContext.shadowBlur = 2;
    drawingContext.shadowColor = "black";
}

function populateNumList(listSize, maxNum) {
    resList = [];
    for (var i = 0; i < listSize; i++) {
        resList[i] = random(1, maxNum);
    }
    return resList;
}

function drawNumList() {

    currentPosX = windowWidth * (0.39 - (0.38 / 70) * (size - 25));
    currentPosY = windowHeight * 0.98;
    for (var i = 0; i < size; i++) {
        strokeWeight(10);
        stroke(0);
        line(currentPosX, currentPosY, currentPosX, currentPosY - 2 * numList[i]);
        currentPosX += 15;
    }
}

function sortList() {
    numList.sort();
}