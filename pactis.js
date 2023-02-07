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
        console.log('Bad Data');
        badData = badData+1;
    }
    else{
        console.log('Good Data');
    }
    
   }
   return badData;
}


let bad=findingBadData([2,-5, 6, 4 , -5 , -1, -9, -22]);

console.log(bad);