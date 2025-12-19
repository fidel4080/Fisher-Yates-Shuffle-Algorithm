//A Program To Shuffle Elements in Arrays

//Fisher-Yates algorithm 

const myArray = ['A', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'B', 'F', 'v' ]; 


function shuffle(myArray){
    for(let i = myArray.length - 1; i > 0; i--){
        let random = Math.floor(Math.random() * (i + 1));
        [myArray[i], myArray[random]] = [myArray[random], myArray[i]];   // Also the contents in the for loop can be written as.....

    /*    let temp = myArray[i];
        myArray[i] = myArray[random];
        myArray[random] = temp;       
    */    

    }
}

shuffle(myArray);
console.log(myArray);





