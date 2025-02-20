


// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");



for (let i=1; i<=10; i++){ // 1, 2, 3, 4, 5, 6 ........9, 10, 11
    console.log("Hello World");
    // console.log(i);
}


let marks =[34, 65, 76, 89, 98, 0, 40, 50]
// console.log(marks[0]);
// console.log(marks[1]);
// console.log(marks[2]);
// console.log(marks[3]);
// console.log(marks[4]);

for(let i = 0; i<=7; i++){ //1, 2, 3, 4, 5
    // console.log(marks[i]);

    if(marks[i] >=80){
        console.log(marks[i]+"=The grade is A+");
    }
    else if(marks[i] >= 70){
        console.log(marks[i]+"=The grade is A");
    }
    else if(marks[i] >= 60){
       console.log(marks[i]+"=The grade is A-");
    }
    else if(marks[i] >= 50){
        console.log(marks[i]+"=The grade is B");
    }
    else if(marks[i] >= 40){
        console.log(marks[i]+"=The grade is C");
    }
    else if(marks[i] >= 32){
        console.log(marks[i]+"=The grade is D");
    }
    else {
        console.log(marks[i]+"=The grade is F");
    }
}


// 34 = ("The grade is D")


// let number = [12, 34, 65, 78, 97, 80, -23, 56, -87]

// let age = [67, 89, 12, 78, 3, 5, 19, 18];

// "Your are eligible for voting"
// "You are not eligible for voting"


// let year =[2005, 2016, 2025, 2023, 2021, 2025];

//=================================================================================

//even & odd number

let numbers=[12, 34, 65, 78, 97, 80, -23, 56, -87]

for(let i=0; i<=8; i++){

    if(numbers[i]%2==0){
        console.log(numbers[i]+"=This is even numbers");
    
    }


    else{
        console.log(numbers[i]+"=This is odd numbers");
    }
}


//positive/negative=====================

let age = [67, 89, 12, 78, 3, 5, 19, 18];


for(let i=0; i<=7; i++){

    if(age[i]>=18){
        console.log(age[i]+"=You are eligible to vote");
    }

    else {
        console.log(age[i]+"=You are not eligible to vote");
    }
}


//leap year =====================================

let year =[2005, 2016, 2025, 2023, 2021, 2025];

for(let i=0; i<=5; i++){

    if(year[i]%4==0){

        console.log(year[i]+"=Leap Year");
    }

    else{
        console.log(year[i]+"=Not a leap Year");
    }
}




