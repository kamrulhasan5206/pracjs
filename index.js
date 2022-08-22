
"use strict";
     
function getidBycls(elem){
    document.getElementById(document.querySelector(elem).id).disabled = true
}



function findPlayerNumber(playerNum){
    if (playerNum <=5){
        return playerNum
    }
    else{
        return 5
    }
}


// Counting and placing element ito selected plear list
let count = 0;
function myFunction(elemnt, playerName, cls) {
    switch(count){
        case 0:
            var x = document.createElement(elemnt)
            var t = document.createTextNode(playerName)
            x.appendChild(t);
            document.getElementById("myList").appendChild(x)
            getidBycls(cls)
            count += 1 
            break
        case 1:
            var x = document.createElement(elemnt)
            var t = document.createTextNode(playerName)
            x.appendChild(t);
            document.getElementById("myList").appendChild(x)
            getidBycls(cls)
            count += 1
            break 
        case 2:
            var x = document.createElement(elemnt)
            var t = document.createTextNode(playerName)
            x.appendChild(t);
            document.getElementById("myList").appendChild(x)
            getidBycls(cls)
            count += 1
            break 
        case 3:
            var x = document.createElement(elemnt)
            var t = document.createTextNode(playerName)
            x.appendChild(t)
            document.getElementById("myList").appendChild(x)
            getidBycls(cls)
            count += 1
            break 
        case 4:
            var x = document.createElement(elemnt);
            var t = document.createTextNode(playerName);
            x.appendChild(t);
            document.getElementById("myList").appendChild(x)
            getidBycls(cls)
            count += 1 
            break;
        default:
            count +=1
            break
        

    }
    document.getElementById('playerNumber').value = findPlayerNumber(count)

    
}




function calculate(){
    const persone = document.getElementById('playerNumber').value
    const payment = document.getElementById('perPlayerCost').value
    return parseFloat(persone).toFixed(2) * parseFloat(payment).toFixed(2)
}
 

const calcButton =  document.getElementById('calc')
calcButton.addEventListener('click', function(){
    //console.log(calculate())
    const result = document.getElementById('result')
    result.value = calculate()
})

