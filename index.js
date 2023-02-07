// Answer to problem number 1: 

function mindGame(number){
    let theProduct = number * 3;
    let theSum = theProduct + 10;
    let quotient = theSum / 2;
    let subtraction = quotient - 5;
    return subtraction;
}


// Answer to problem number 2:

function evenOdd(stringName){
    let nameOfType = stringName.length;
    if(nameOfType % 2 == 0){
        return 'even';
    }
    else{
        return 'odd';
    }
}


// Answer to problem number 3:

function isLGSeven(number){
    let subtraction = number - 7;
    if(subtraction >= 6){
        let doubleInput = number * 2;
        return doubleInput;
    } 
    else{
        return subtraction;
    }
}


// Answer to problem number 4:


function findingBadData(allData){
    let badData = 0;
    for(let i = 0; i < allData.length; i++){
    let data = allData[i];
    if(data < 0){
        // console.log('Bad Data');
        badData = badData+1;
    }
    else{
        // console.log('Good Data');
    }
   }
   return badData;
}


// Answer to problem number 5:

function gemsToDiamond(firstFriendGems, secondFriendGems, theirdFriendGems){
    let totalGems = firstFriendGems * 21 + secondFriendGems * 32 + theirdFriendGems * 43;
    if(totalGems > 2000){
        let minusExtraGems = totalGems - 2000;
        return minusExtraGems;
    }
    else{
        return totalGems;
    }
}

// ----------------
// -----------------End Assignment
// ------------------------------------------
// ---------------------------------------------------