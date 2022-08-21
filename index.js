
let count = 0;
function myFunction(elemnt, playerName) {
    switch(count){
        case 0:
            var x = document.createElement(elemnt);
            var t = document.createTextNode(playerName);
            x.appendChild(t);
            document.getElementById("myList").appendChild(x);
            count += 1 
            break
        case 1:
            var x = document.createElement(elemnt);
            var t = document.createTextNode(playerName);
            x.appendChild(t);
            document.getElementById("myList").appendChild(x);
            count += 1
            break 
        case 2:
            var x = document.createElement(elemnt);
            var t = document.createTextNode(playerName);
            x.appendChild(t);
            document.getElementById("myList").appendChild(x);
            count += 1
            break 
        case 4:
            var x = document.createElement(elemnt);
            var t = document.createTextNode(playerName);
            x.appendChild(t);
            document.getElementById("myList").appendChild(x);
            count += 1
            break 
        case 5:
            var x = document.createElement(elemnt);
            var t = document.createTextNode(playerName);
            x.appendChild(t);
            document.getElementById("myList").appendChild(x);
            count += 1 
            break;
        default:
            count +=1
            break
        

    }
    console.log(count)

}




    

