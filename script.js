// if condition
// age=19
// if (age>=18){
//     console.log("your age is above 18")

// }

// if else

// age=17
// if(age>=18){
//     console.log("your age is above 18")
// }else{
//     console.log("your age is below 18")
// }

//if else if ladder

// let number=25
// if (number==20){
//     console.log("the number is 20")
// }else if(number==30){
//     console.log("the number is 30")
// }else{
//     console.log("given the numbers is wrong")
// }

//nested if

// let username="adminu"
// let password="123456"

// if(username==="admin"){
//     //success
//     if(password==="123456"){
//         console.log("password succesful")
//     }else{
//         console.log("Invalid password")
//     }

// }else{
//     console.log("invalid username")
// }

// let num1=30
// let num2=40
// let num3=50

// if(num1>num2){
//     if(num1>num3){
//         console.log("num1 is greater")
//     }else{
//         console.log("num3 is greater")
//     }
// }else if (num2>num3){
//     console.log("num2 is greater")
// }else{
//     console.log("number 3 is gretaer")
// }

//switch case

// let today="friday"
// switch (today){
//     case "Monday":
//         console.log("today is monday")
//         break;
//     case "Tuesday":
//         console.log("today is tuesday")
//         break;
//     case  "Wenesday":
//         console.log("today is wenesday")
//         break;
//     case "Thursday":
//         console.log("today is thursday")
//         break;
//     case "friday":
//         console.log("today is friday")
//         break;
//     case "saturday":
//         console.log("today is saturday")
//         break;
//     default:
//         console.log("today is sunday")

// }
    

//for loop

// for(let i=1;i<=100;i++){
//     console.log(i)
// }

// for(let i=1;i<=100;i++){
//     console.log(i*2)
// }

// for(let i=1;i<=10;i++){
//     console.log(i+2)
// }

//while loop

// let i=5;

// while(i<=10){
//     console.log("printing",i)
//     i++;
// }

//do while loop

// let i=0;

// do{
//     console.log(i)
//     i++;
// }while(i<=10);

// let array =["apple","orange","banana","apple","orange","banana"]

// console.log(array.length);
// for( i=0; i<array.length;i++){
//     console.log(array[i])
// }


// for of loop

// for(i of array){
//     console.log(i);
// }

let person ={
    name: "abhi",
    age: 22,
    place: "kollam",
    phn: 8589913698,
};

//for in loop

for (value in person){
    console.log(person[value]);
}
