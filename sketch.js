let sortingAlgorithms = ["Selection Sort", "Bubble Sort", "Quick Sort", "Merge Sort"]
let sorting = false;
let sortedList = [];

let currentIndex = 0;
let step = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    // -----------Size-Slider----------------
    sizeSlider = createSlider(10, 95, 50, 5);
    sizeSlider.position(windowWidth * 0.01, windowHeight * 0.04);
    sizeSlider.style('width', '100px');
    size = 25;
    numList = populateNumList(size, 100);
    // ------------Speed-Slider-------------------------
    speedSlider = createSlider(10, 100, 50, 10);
    speedSlider.position(windowWidth * 0.2, windowHeight * 0.04);
    speedSlider.style('width', '100px');
    // --------------------------------------------------
    chooseBar(windowWidth * 0.85, windowHeight * 0.02) // choose algo
    noStroke();
    fill(250);
    sortButton = createButton("Sort!");
    sortButton.position(windowWidth * 0.95, windowHeight * 0.02);
    //sortButton.style('background-color', color(25, 23, 200, 50));
    //sortButton.size(windowWidth / windowHeight * 25);
    sortButton.mousePressed(sortList);
    // ---------------------------------------------------
    reShuffleButton = createButton("ReShuffle");
    reShuffleButton.position(windowWidth * 0.78, windowHeight * 0.02);
    reShuffleButton.mousePressed(reShuffle);
}

function draw() {
    background(220);
    stroke(0);
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
        reShuffle();
    }

    if (sorting) {
        if (currentIndex >= size - 1) {
            step = 0;
            sorting = false;
            //reShuffle();
        } else if (step <= 0) {
            numList = sortList[currentIndex];
            step = (110 - sizeSlider.value());
        } else {
            step += 1;
        }
        drawNumList();
    } else {
        drawNumList();
    }
}


function populateNumList(listSize, maxNum) { // Remake a list
    let resList = [];
    for (var i = 0; i < listSize; i++) {
        resList[i] = [];
        resList[i][0] = random(1, maxNum);
        resList[i][1] = color(0, 0, 0);
    }
    return resList;
}

function drawNumList() { // Draw the list

    let currentPosX = windowWidth * (0.39 - (0.38 / 70) * (size - 25));
    let currentPosY = windowHeight * 0.98;
    for (var i = 0; i < size; i++) {
        strokeWeight(10);
        stroke(numList[i][1]);
        line(currentPosX, currentPosY, currentPosX, currentPosY - 2 * numList[i][0]);
        currentPosX += 15;
    }
}


function sortList() {
    sortedList = selectionSort(numList);
    sorting = true;
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

function reShuffle() {
    numList = populateNumList(size, 100);
}

function selectionSort(inputArr) { // 
    let n = inputArr.length;

    for (let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (inputArr[j] < inputArr[min]) {
                min = j;
            }
        }
        if (min != i) {
            // Swapping the elements
            let tmp = inputArr[i];
            inputArr[i] = inputArr[min];
            inputArr[min] = tmp;
        }
    }
    return inputArr;
}