function mindGame(number){
    let theProduct = number * 3;
    let theSum = theProduct + 10;
    let quotient = theSum / 2;
    let subtraction = quotient - 5;
    return subtraction;
}

let total = mindGame(50);
// console.log(total);


// let evenOdd = 'pheroef';
// let number = evenOdd.length;
// console.log(number);
// if(number % 2 == 0){
//     console.log('even');
// }
// else{
//     console.log('odd');
// }

function evenOdd(names){
// let evenOdd = 'pheroef';
let number = names.length;
// console.log(number);
if(number % 2 == 0){
    // console.log('even');
    return 'even';
}
else{
    // console.log('odd');
    return 'odd';
}
}

let nameof = evenOdd('chatgpt');
// console.log(nameof);



// problem 3


function isLGSeven(number){
    let quotient = number - 7;
    let newQuotient = number *2;
    // console.log(newQuotient);
}

isLGSeven(7);



// problem 4


// let numbers = [-1, 2, -3, 4,-5,6,-7,8,-9,10];
// let count = 0;

// for(let i = 0; i < numbers.length; i++){
//     let newNumber = numbers[i];
//     // console.log(newNumber);

//     if(newNumber < 0){
//         // console.log('bad');
//         count = count+1;
//     }
//     else{
//         // console.log('good');
//     }
// }

// console.log(count);


// // way2


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


let bad=findingBadData([2,-5, 6, 4 , -5 , -1, -9, -22]);

// console.log(bad);




// problem 5


// function gemsToDiamond(){
//     let friends1 = { firstFriend : 10};
//     let friend2 = {secondFriend : 15};
//     let friend3 = {theirdFriend : 20};
// }

// gemsToDiamond();



function gemsToDiamond(friend1, friend2, friend3){
    let countGems = friend1*21 + friend2*32 + friend3*43;
    if(countGems > 2000){
        let daimond = countGems - 2000;
        // console.log(daimond);
        return daimond;
    }
    else{
        return countGems;
    }
    // console.log(countGems);
}


// let num2 = gemsToDiamond(100, 200, 50);
// console.log(num2);



// problem 3 solution


function isLGSeven(number){
    let quotient = number - 7;
    if(quotient >= 6){
        let inputDouble = number * 2;
        console.log(inputDouble);
    }

    else{
        console.log(quotient);
    }
   
}

// let retunvalo = 
isLGSeven(-15)
// console.log(retunvalo);






// function result(){
//     if(mindGame(5)== 7.5 && mindGame(50)== 75 && mindGame(33)== 49.5 && evenOdd('phero')=='odd' && evenOdd('batch7')== 'even' && evenOdd('chatgpt')=='odd' && isLGSeven(6)==-1 && isLGSeven(-15)==-22 && isLGSeven(15)==30 && findingBadData([1,2,3])==0 && findingBadData([2,-5,-7,-13])==3 && findingBadData([-4,-9,-5,-33,55])==5 && gemsToDiamond(1, 1,1,)== 96 && gemsToDiamond(20, 200, 50)==6970 && gemsToDiamond(100, 5, 1)==303 ){
//         return 'all ok'
//     }
//     else{
//         'somthig is worng'
//     }
// }

// console.log(result());