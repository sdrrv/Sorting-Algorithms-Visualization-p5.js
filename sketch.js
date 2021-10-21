let sortingAlgorithms = ["Buble Sort", "Merge Sort", "Quick Sort"]

function setup() {
    createCanvas(windowWidth, windowHeight);
    // -----------Size-Slider----------------
    sizeSlider = createSlider(10, 95, 25, 5);
    sizeSlider.position(windowWidth * 0.01, windowHeight * 0.04);
    sizeSlider.style('width', '100px');
    size = 25;
    numList = populateNumList(size, 100);
    // ------------Speed-Slider-------------------------
    speedSlider = createSlider(0, 100, 50, 5);
    speedSlider.position(windowWidth * 0.2, windowHeight * 0.04);
    speedSlider.style('width', '100px');
    speed = 50;
    // --------------------------------------------------



    chooseBar(windowWidth * 0.85, windowHeight * 0.02)
    noStroke();
    fill(250);
    sortButton = createButton("Sort!");
    sortButton.position(windowWidth * 0.95, windowHeight * 0.02);
    sortButton.size(windowWidth / windowHeight * 25);
    sortButton.mousePressed(sortList);


    print(speedSlider.x)
}

function draw() {
    background(220);
    //----Array-Size---------
    strokeWeight(1);
    textSize(15);
    fill(0);
    text("Array Size", sizeSlider.x + (sizeSlider.width / 2), windowHeight * 0.03);
    //----Size-Text----------
    strokeWeight(1);
    textSize(25);
    fill(0);
    text(sizeSlider.value(), sizeSlider.x + (sizeSlider.width / 2), windowHeight * 0.1);
    //----Speed---------
    strokeWeight(1);
    textSize(15);
    fill(0);
    text("Speed", speedSlider.x + (speedSlider.width / 2), windowHeight * 0.03);
    //----Speed-Text----------
    strokeWeight(1);
    textSize(25);
    fill(0);
    text(speedSlider.value() + "%", speedSlider.x + (speedSlider.width / 2), windowHeight * 0.1);
    //-----------------------

    if (sizeSlider.value() != size) {
        size = sizeSlider.value();
        numList = populateNumList(size, 100);
    }

    drawNumList();
}


function populateNumList(listSize, maxNum) {
    let resList = [];
    for (var i = 0; i < listSize; i++) {
        resList[i] = random(1, maxNum);
    }
    return resList;
}

function drawNumList() {

    let currentPosX = windowWidth * (0.39 - (0.38 / 70) * (size - 25));
    let currentPosY = windowHeight * 0.98;
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

function chooseBar(X, Y) {
    textAlign(CENTER);
    background(200);
    sel = createSelect();
    sel.position(X, Y);
    for (var i in sortingAlgorithms) {
        sel.option(sortingAlgorithms[i])
    }
    //sel.selected('kiwi');
    //sel.changed(mySelectEvent);
}