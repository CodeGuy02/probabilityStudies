var wins = 0;
var losses = 0;

function playMontyHall() {
    montyHall = document.getElementById('montyHall');
    montyHall.innerHTML = 
          "<div class='table' id='montyHallplayArea'> "
        +   "<div class='staticRow'>"
        +       "<p class='cellTitle' id='cellTitle'> Select a door and we will show you where one goat is hidden: </p>"
        +       "<div class='staticRow'>"
        +           "<div class='penguinCell'> <div class='simplePenguin'> </div> </div>"
        +           "<div class='doorCell'> <div class='greenDoor' id='doorA' onClick='selectDoor(this)'> </div></div>"
        +           "<div class='doorCell'> <div class='blueDoor' id='doorB' onClick='selectDoor(this)'> </div></div>"
        +           "<div class='doorCell'> <div class='purpleDoor' id='doorC' onClick='selectDoor(this)'> </div></div>"
        +       " </div>"
        +       "<div class='staticRow'>"
        +           "<div class='staticCell'> <p class='cellTitle' id='treasureFoundText'> Treasures Found: </p></div>"
        +       "</div>"
        +       "<div class='staticRow'>"
        +           "<div class='staticCell'> <p class='cellTitle' id='goatsFoundText'> Goats Found: </p></div>"
        +       "</div>"
        +       "<div class='staticRow'>"
        +           "<div class='tryAgainButtonArea'> </div>"
        +       "</div>"
        +   "</div>"
        
        + "</div>";
    montyHall.setAttribute('onClick', 'doNothing()');        
}

function doNothing() {}

function selectDoor(ourDoor) {
    /*alert(Object.prototype.toString.call(ourDoor));*/

    ourDoor.setAttribute('style', 'border-radius:20px');
    console.log(ourDoor);
    console.log(ourDoor.id);
    /*newDoor = document.getElementById('doorA');*/
    newDoor = ourDoor;
    //newDoor.setAttribute('class', 'selectedDoor');
 
    randomDoorValueArray = [];
    HighestValue = 0;
    HighestIndex = 0;
    doorWithHighestValue = '';
    doorAgoat = true;
    doorBgoat = true;
    doorCgoat = true;

    for (let i = 0; i < 3; i++) {
        randomNumber = Math.floor(Math.random() * 10);
        console.log('  pushing ' + randomNumber);
        randomDoorValueArray.push(randomNumber);
        if (randomNumber > HighestValue) {
            HighestValue = randomNumber;
            HighestIndex = i;
        } /*else if 
        (randomNumber == HighestValue) {
            i--;
            randomDoorValueArray.pop();
            console.log("Value popped!");
        }
        */
    }
    console.log('highest index is: ' + HighestIndex);

    if (HighestIndex == 0) {
        doorAgoat = false;
        doorWithHighestValue = 'Door A';
    } else
    if (HighestIndex == 1) {
        doorBgoat = false;
        doorWithHighestValue = 'Door B';
    } else { doorCgoat = false; doorWithHighestValue = 'Door C'; }

    console.log('door with highest value is: ' + doorWithHighestValue);
    console.log(doorAgoat);
    console.log(doorBgoat);
    console.log(doorCgoat);
    console.log(randomDoorValueArray);

    const firstDoorChosen = ourDoor.id;
    //goatDoorToOpen = 'A';
    if (firstDoorChosen == 'doorA') {
        console.log('door A chosen');
        console.log(' A:' + doorAgoat + ' B:' + doorBgoat + ' C:' + doorCgoat);
        
            if (doorBgoat == true) {
                goatDoorToOpen = 'B';
                doorRevealed = document.getElementById('doorB');
                doorRevealed.setAttribute('class', 'selectedDoor');
                console.log('reveal B');
            } else
            if (doorCgoat == true) {
                goatDoorToOpen = 'C';
                doorRevealed = document.getElementById('doorC');
                doorRevealed.setAttribute('class', 'selectedDoor');
                console.log('reveal C');
            }

    } else
    if (firstDoorChosen == 'doorB') {
        console.log('door B chosen');
        console.log(' A:' + doorAgoat + ' B:' + doorBgoat + ' C:' + doorCgoat);
        
            if (doorAgoat == true) {
                goatDoorToOpen = 'A';
                doorRevealed = document.getElementById('doorA');
                doorRevealed.setAttribute('class', 'selectedDoor');
                console.log('reveal A');
            } else
            if (doorCgoat == true) {
                goatDoorToOpen = 'C';
                doorRevealed = document.getElementById('doorC');
                doorRevealed.setAttribute('class', 'selectedDoor');
                console.log('reveal C');
            }
        
    } else
    if (firstDoorChosen == 'doorC') {
        console.log('door C chosen');
        console.log(' A:' + doorAgoat + ' B:' + doorBgoat + ' C:' + doorCgoat);
        
            if (doorAgoat == true) {
                goatDoorToOpen = 'A';
                doorRevealed = document.getElementById('doorA');
                doorRevealed.setAttribute('class', 'selectedDoor');
                console.log('reveal A');
            } else
            if (doorBgoat == true) {
                goatDoorToOpen = 'B';
                doorRevealed = document.getElementById('doorB');
                doorRevealed.setAttribute('class', 'selectedDoor');
                console.log('reveal B');
            }
        
    }

    console.log('Goat door to be opened is:' + goatDoorToOpen);
    /*
    alert('ourDoor');
    for(var i = 0; i < document.styleSheets.length; i++) {
        var sheet = document.styleSheets[i];
        if(sheet.title == unique_title) {

        }
    }
    */

    //selectFinalDoor();
    cellTitle = document.getElementById('cellTitle');
    cellTitle.innerHTML = 'Now, select a final door to reveal your prize!';

    //"<div class='doorCell'> <div class='greenDoor' id='doorA' onClick='selectDoor(this)'> </div></div>"
    
    updateDoor = document.getElementById('doorA');
    if (doorAgoat == true) {
        updateDoor.setAttribute('onClick','winGoat(doorWithHighestValue)');
    } else { updateDoor.setAttribute('onClick', 'winTreasure(doorWithHighestValue)'); }
    updateDoor = document.getElementById('doorB');
    if (doorBgoat == true) {
        updateDoor.setAttribute('onClick','winGoat(doorWithHighestValue)');
    } else { updateDoor.setAttribute('onClick', 'winTreasure(doorWithHighestValue)'); }
    updateDoor = document.getElementById('doorC');
    if (doorCgoat == true) {
        updateDoor.setAttribute('onClick','winGoat(doorWithHighestValue)');
    } else { updateDoor.setAttribute('onClick', 'winTreasure(doorWithHighestValue)'); }

}

function winTreasure(doorWithHighestValue) {
    let winningDoor = '';
    if (doorWithHighestValue == 'Door A') {
        winningDoor = document.getElementById('doorA');
        winningDoor.setAttribute('class', 'treasureDoorOpened');
        wins++;
        treasureFoundText = document.getElementById('treasureFoundText');
        treasureFoundText.innerText = "Treasures Found: " + wins;
    } else 
    if (doorWithHighestValue == 'Door B') {
        winningDoor = document.getElementById('doorB');
        winningDoor.setAttribute('class', 'treasureDoorOpened');
        wins++;
        treasureFoundText = document.getElementById('treasureFoundText');
        treasureFoundText.innerText = "Treasures Found: " + wins;
    } else
    if (doorWithHighestValue == 'Door C') {
        winningDoor = document.getElementById('doorC');
        winningDoor.setAttribute('class', 'treasureDoorOpened');
        wins++;
        treasureFoundText = document.getElementById('treasureFoundText');
        treasureFoundText.innerText = "Treasures Found: " + wins;
    }
    newCellTitle = document.getElementById('cellTitle');
    newCellTitle.innerText = "Congratulations! You've won some treasure!";
    console.log('Treasures: ' + wins);
}

function winGoat(door) {
    if (doorWithHighestValue != 'Door A') {
        winningDoor = document.getElementById('doorA');
        winningDoor.setAttribute('class', 'selectedDoor');
    } 
    if (doorWithHighestValue != 'Door B') {
        winningDoor = document.getElementById('doorB');
        winningDoor.setAttribute('class', 'selectedDoor');
    } 
    if (doorWithHighestValue != 'Door C') {
        winningDoor = document.getElementById('doorC');
        winningDoor.setAttribute('class', 'selectedDoor');
    } 
    
    losses++;
    
    updateDoor = document.getElementById('doorA');
    updateDoor.setAttribute('onclick', 'doNothing()');
    updateDoor = document.getElementById('doorB');
    updateDoor.setAttribute('onclick', 'doNothing()');
    updateDoor = document.getElementById('doorC');
    updateDoor.setAttribute('onclick', 'doNothing()');
    
    goatsFoundText = document.getElementById('goatsFoundText');
    goatsFoundText.innerText = "Goats Found: " + losses;
    
    newCellTitle = document.getElementById('cellTitle');
    newCellTitle.innerText = "You now have a goat!";
    tryAgainButtonArea = document.getElementById('tryAgainButtonArea');
    tryAgainButtonArea.innerHTML = "<button type='button' onclick='playMontyHall()'> Try Again </button> ";
}

function selectFinalDoor() {
    //cellTitle = document.getElementsByClassName('cellTitle');
    //cellTitle.innerHTML = "<p class='cellTitle'> Now, select a final door </p>";
    //cellTitle.setAttribute('data-content', 'Hello');
    //cellTitle.textContent = ' Hello';
    //cellTitle.setAttribute('color', 'blue');
    cellTitle = document.getElementById('cellTitle');
    cellTitle.innerHTML = 'Now, select a final door.';
}

function detectMobile() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    mobileDevice = toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });

    if (mobileDevice) {
        mainTable = document.getElementById('mainTable');
        mainTable.setAttribute('class', 'mobileTable');
    } 

    console.log('Yes, we are loading...');
    console.log('Your user-agent is :' + navigator.userAgent);
}

