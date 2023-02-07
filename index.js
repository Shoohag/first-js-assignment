// Problem =1: 

function mindGame(number){
    let theProduct = number * 3;
    let theSum = theProduct + 10;
    let quotient = theSum / 2;
    let subtraction = quotient - 5;
    return subtraction;
}



//  end problem number 1

// Problem =2:


function evenOdd(stringName){
    let nameOfType = stringName.length;
    if(nameOfType % 2 == 0){
        return 'even';
    }
    else{
        return 'odd';
    }
}


// end problem number 2

// problem =3:

function isLGSeven(number){
    let quotient = number - 7;
    let newQuotient = number *2;
    return newQuotient;
}

// end problem number 3.

// problem = 4:


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


// end problem number 4.


// Problem =5:

