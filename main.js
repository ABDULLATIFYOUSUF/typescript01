"use strict";
// NO.1
// installed Node.js, TypeScript and VS Code
Object.defineProperty(exports, "__esModule", { value: true });
// NO.2
console.log('Answer No.2 > > > > > > > ');
let personName = "Abdul Latif";
let message = `Hello ${personName}, would you like to learn some python today?`;
console.log(message);
// NO.3
console.log('Answer No.3 > > > > > > > ');
let lowerCase = personName.toLowerCase();
console.log(lowerCase);
let upperCase = personName.toUpperCase();
console.log(upperCase);
let caseOne = personName.split(" ");
let titleCase = " ";
for (let i = 0; i < caseOne.length; i++) {
    titleCase += caseOne[i].charAt(0).toUpperCase() + caseOne[i].slice(1).toLowerCase() + " ";
}
console.log(titleCase);
// NO.4
console.log('Answer No.4 > > > > > > > ');
console.log('Hazrat Umer (R.A) once said “No amount of guilt can change the past and no amount of worrying can change the future.”');
// NO.5
console.log('Answer No.5 > > > > > > > ');
let famous_person = "Hazrat Umer (R.A)";
let message2 = "No amount of guilt can change the past and no amount of worrying can change the future.";
console.log(`${famous_person} once said "${message2}"`);
// NO.6
console.log('Answer No.6 > > > > > > > ');
let personsName = "\t    Abdul Latif    \n";
console.log("person's Name with whitespace =>", personsName);
let strippedName = personsName.trim();
console.log("Person's Name without whitespace =>", strippedName);
// NO.7
console.log('Answer No.7 > > > > > > > ');
let addition = 4 + 4;
console.log(addition);
let substration = 16 - 8;
console.log(substration);
let multiplication = 2 * 4;
console.log(multiplication);
let division = 16 / 2;
console.log(division);
// NO.8
console.log('Answer No.8 > > > > > > > ');
console.log(4 + 4);
console.log(16 - 8);
console.log(2 * 4);
console.log(16 / 2);
// NO.9
console.log('Answer No.9 > > > > > > > ');
let favoriteNumber = 19;
let printMessage = `my favorite number is ${favoriteNumber}`;
console.log(printMessage);
// NO.10
console.log('Answer No.10 > > > > > > > ');
//  Stored number in a variable. used that variable, created a message that reveals stored number.
let favoriteNumber1 = 19;
let printMessage1 = `my favorite number is ${favoriteNumber1}`;
console.log(printMessage1);
// Addition, subtraction, multiplication, and division operations that each result in the number 8.
let addition1 = 4 + 4;
console.log(addition1);
let substration1 = 16 - 8;
console.log(substration1);
let multiplication1 = 2 * 4;
console.log(multiplication1);
let division1 = 16 / 2;
console.log(division1);
// NO.11
console.log('Answer No.11 > > > > > > > ');
let friendsName = ['Yousuf', 'Dawood', 'Rafiq', 'Shoaib'];
console.log(friendsName[0]);
console.log(friendsName[1]);
console.log(friendsName[2]);
console.log(friendsName[3]);
// NO.12
console.log('Answer No.12 > > > > > > > ');
let friendsName1 = ['Yousuf', 'Dawood', 'Rafiq', 'Shoaib'];
for (let name of friendsName1) {
    console.log(`Assalamoalaikum ${name}`);
}
// NO.13
console.log('Answer No.13 > > > > > > > ');
let transportation = [['Vigo', 'Car'], ['Corolla', 'Car'], ['Suzuki', 'Bike']];
transportation.forEach(([brand, transport]) => {
    console.log(`I would like to own a ${brand} ${transport}`);
});
// NO.14
console.log('Answer No.14 > > > > > > > ');
let favoriteGuest = ['Yousuf', 'Dawood', 'Rafiq', 'Shoaib'];
for (let guest of favoriteGuest) {
    console.log(`Dear ${guest}, you are invited for dinner at restaurant`);
}
// NO.15
console.log('Answer No.15 > > > > > > > ');
// guest who cant join dinner
let guestCantJoin = 'Shoaib';
let serialNumberofShoaib = favoriteGuest.indexOf(guestCantJoin);
// new guest
let newGuest = 'Qasim';
favoriteGuest.splice(serialNumberofShoaib, 1, newGuest);
for (let guest of favoriteGuest) {
    // new messages and invitation list
    console.log(`Dear ${guest}, you are invited for dinner at restaurant`);
}
// NO.16
console.log('Answer No.16 > > > > > > > ');
for (let guest of favoriteGuest) {
    // announcement for new big table
    console.log(`Dear ${guest}, we found bigger dinner table `);
}
//add new guest to beginning of array
let addNewInBeginning = 'Muhammad';
favoriteGuest.unshift(addNewInBeginning);
// add new guest to middle of array
let addNewInMiddle = 'Haroon';
let middleOfArray = Math.floor(favoriteGuest.length / 2);
favoriteGuest.splice(middleOfArray, 0, addNewInMiddle);
// add new guest to end of array
let addNewInEnd = 'Karim';
favoriteGuest.push(addNewInEnd);
// print new invition message
for (let guest of favoriteGuest) {
    console.log(`Dear ${guest}, you are invited for dinner at restaurant`);
}
// NO.17
console.log('Answer No.17 > > > > > > > ');
console.log('i can invite only two people for dinner');
// remove guest from list
while (favoriteGuest.length > 2) {
    let removedGuest = favoriteGuest.pop();
    console.log(`i am sorry ${removedGuest} i can't invite you for dinner`);
}
// invitation message to guest
for (let guest of favoriteGuest) {
    console.log(`Dear ${guest}, you are still invited for dinner`);
}
// remove last guest names in list
favoriteGuest.pop();
favoriteGuest.pop();
console.log('guest list after programme =>', favoriteGuest);
// NO.18
console.log('Answer No.18 > > > > > > > ');
let favoritePlaces = ['Makkah', 'Madinah', 'Baghdad', 'Ajmer', 'Turkey'];
console.log('Original List =>', favoritePlaces);
console.log('List in Alphabetical Order =>', [...favoritePlaces].sort());
console.log('Original List =>', favoritePlaces);
console.log('List in Reverse Alphabetical Order', [...favoritePlaces].sort().reverse());
console.log('Original List =>', favoritePlaces);
console.log('change list in reverse =>', favoritePlaces.reverse());
console.log('back to original list =>', favoritePlaces.reverse());
console.log('stored in alphabetical order =>', favoritePlaces.sort());
console.log('stored in alphabetical order =>', favoritePlaces.reverse());
// NO.19
console.log('Answer No.19 > > > > > > > ');
let favoriteGuestOld = ['Yousuf', 'Dawood', 'Rafiq', 'Shoaib'];
console.log(`we are inviting ${favoriteGuestOld.length} guest for dinner`);
// NO.20
console.log('Answer No.20 > > > > > > > ');
let languages = ['Urdu', 'Memon', 'Sindhi', 'Punjabi', 'Balochi', 'Pashtu'];
console.log('List of Languages...');
for (let language of languages) {
    console.log(language);
}
// NO.21
console.log('Answer No.21 > > > > > > > ');
const student = {
    name: 'Muhammad Qasim',
    Age: 25,
    Address: 'Liaquatabad'
};
let students = [];
students.push(student);
const student2 = {
    name: 'Muhammad Bilal',
    Age: 21,
    Address: 'Nazimabad'
};
students.push(student2);
const student3 = {
    name: 'Muhammad Hussain',
    Age: 20,
    Address: 'FB Area'
};
students.push(student3);
const student4 = {
    name: 'Muhammad Nazeer',
    Age: 25,
    Address: 'New Karachi'
};
students.push(student4);
console.log(students);
// NO.22
console.log('Answer No.22 > > > > > > > ');
let friends = ['qasim', 'latif', 'yousuf', 'bilal', 'hussain'];
const findFriend = 7;
console.log(friends[findFriend]);
// NO.23
console.log('Answer No.23 > > > > > > > ');
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru');
console.log("Is car != 'corolla'? I predict True.");
console.log(car != 'corolla');
console.log("Is car == 'corolla'? I predict False.");
console.log(car == 'corolla');
console.log("Is car != 'city'? I predict True.");
console.log(car != 'city');
console.log("Is car == 'city'? I predict False.");
console.log(car == 'city');
console.log("Is car != 'premio'? I predict True.");
console.log(car != 'premio');
console.log("Is car == 'premio'? I predict False.");
console.log(car == 'premio');
console.log("Is car != 'mercedes'? I predict True.");
console.log(car != 'mercedes');
console.log("Is car == 'mercedes'? I predict False.");
console.log(car == 'mercedes');
// NO.24
console.log('Answer No.24 > > > > > > > ');
let name1 = 'Latif';
let name2 = 'latif';
console.log(name1 != name2);
console.log(name1 == name2);
console.log(name1.toLowerCase() == name2);
console.log(name1.toLowerCase() != name2);
let num1 = 5;
let num2 = 4;
let num3 = 3;
console.log(num1 != num2);
console.log(num1 == num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
console.log(num1 > num2 && num2 > num3);
console.log(num1 < num2 && num2 < num3);
console.log(num1 < num2 || num2 > num3);
console.log(num1 < num2 || num2 < num3);
const fruits = ['mango', 'banana', 'apple', 'grapes'];
console.log(fruits.includes('mango'));
console.log(fruits.includes('orange'));
console.log(!fruits.includes('orange'));
console.log(!fruits.includes('mango'));
// NO.25
console.log('Answer No.25 > > > > > > > ');
let aliienColor = 'green';
if (aliienColor == 'green') {
    console.log('you earned 5 points');
}
aliienColor = 'blue';
if (aliienColor == 'green') {
    console.log('you earned 5 points');
}
// NO.26
console.log('Answer No.26 > > > > > > > ');
let aliienColor1 = 'green';
if (aliienColor1 == 'green') {
    console.log('you earned 5 points for shooting alien');
}
else {
    console.log('you just earned 10 points for shooting alien');
}
aliienColor1 = 'blue';
if (aliienColor1 == 'green') {
    console.log('you earned 5 points for shooting alien');
}
else {
    console.log('you just earned 10 points for shooting alien');
}
// NO.27
console.log('Answer No.27 > > > > > > > ');
let aliienColor2 = 'green';
if (aliienColor2 == 'green') {
    console.log('you earned 5 points for shooting alien');
}
else if (aliienColor2 == 'yellow') {
    console.log('you earned 10 points for shooting alien');
}
else if (aliienColor2 == 'red') {
    console.log('you earned 15 points for shooting alien');
}
aliienColor2 = 'yellow';
if (aliienColor2 == 'green') {
    console.log('you earned 5 points for shooting alien');
}
else if (aliienColor2 == 'yellow') {
    console.log('you earned 10 points for shooting alien');
}
else if (aliienColor2 == 'red') {
    console.log('you earned 15 points for shooting alien');
}
aliienColor2 = 'red';
if (aliienColor2 == 'green') {
    console.log('you earned 5 points for shooting alien');
}
else if (aliienColor2 == 'yellow') {
    console.log('you earned 10 points for shooting alien');
}
else if (aliienColor2 == 'red') {
    console.log('you earned 15 points for shooting alien');
}
// NO.28
console.log('Answer No.28 > > > > > > > ');
let age = 70;
if (age < 2) {
    console.log('The Person is a baby');
}
else if (age === 2 || age < 4) {
    console.log('The Person is a toddler');
}
else if (age === 4 || age < 13) {
    console.log('The Person is a Kid');
}
else if (age === 13 || age < 20) {
    console.log('The Person is a teenager');
}
else if (age === 20 || age < 65) {
    console.log('The Person is a adult');
}
else
    (age >= 65);
{
    console.log('The Person is a older');
}
// NO.29
console.log('Answer No.29 > > > > > > > ');
let fruits1 = ['Mango', 'Banana', 'Apple'];
if (fruits1.includes('Mango')) {
    console.log('I like Mango');
}
if (fruits1.includes('Banana')) {
    console.log('I like Banana');
}
if (fruits1.includes('Apple')) {
    console.log('I like Apple');
}
if (fruits1.includes('Orange')) {
    console.log('I like Orange');
}
if (fruits1.includes('Grapes')) {
    console.log('I like Grapes');
}
// NO.30
console.log('Answer No.30 > > > > > > > ');
let userName = ['admin', 'yousuf', 'dawood', 'rafiq', 'shoaib'];
for (let name of userName) {
    if (name == 'admin') {
        console.log(`Hello ${name}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${name}, thank you for logging in again.`);
    }
}
// NO.31
console.log('Answer No.31 > > > > > > > ');
let userNamePrev = ['admin', 'yousuf', 'dawood', 'rafiq', 'shoaib'];
for (let name of userNamePrev) {
    if (name == 'admin') {
        console.log(`Hello ${name}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${name}, thank you for logging in again.`);
    }
}
userNamePrev = [];
if (userNamePrev.length === 0) {
    console.log('We need to find some users!');
}
// NO.32
console.log('Answer No.32 > > > > > > > ');
const oldUsers = ['yousuf', 'dawood', 'rafiq', 'shoaib', 'qasim'];
const newUsers = ['yousuf', 'iqbal', 'rafiq', 'haroon', 'latif'];
for (const i of newUsers) {
    if (oldUsers.includes(i)) {
        console.log(`User Name '${i}' is already taken. please enter new user name`);
    }
    else {
        console.log(`User Name '${i}' is available.`);
    }
}
// NO.33
console.log('Answer No.33 > > > > > > > ');
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let ordinal = '';
for (let number of numbers) {
    if (number === 1) {
        ordinal = 'st';
    }
    else if (number === 2) {
        ordinal = 'nd';
    }
    else if (number === 3) {
        ordinal = 'rd';
    }
    else {
        ordinal = 'th';
    }
    console.log(`${number}${ordinal}`);
}
// NO.34
console.log('Answer No.34 > > > > > > > ');
let pizzaFlavor = ['BBQ Chicken', 'Fajita', 'Pepperoni'];
for (let pizza of pizzaFlavor) {
    console.log(pizza);
}
for (let pizza of pizzaFlavor) {
    console.log(`I like ${pizza} pizza`);
}
console.log('I really Love Pizza');
// NO.35
console.log('Answer No.35 > > > > > > > ');
const animals = ['dog', 'cow', 'goat'];
for (const i of animals) {
    console.log(i);
}
for (const i of animals) {
    if (i === 'dog') {
        console.log(`${i} is an excellent pet`);
    }
    else if (i === 'cow') {
        console.log(`${i} is a halal animal and we also get milk from it`);
    }
    else if (i === 'goat') {
        console.log(`${i} is a beautiful animal`);
    }
}
console.log('All of them are known as excellent pets');
// NO.36
console.log('Answer No.36 > > > > > > > ');
const make_shirt = (size, message) => {
    console.log(`size: ${size}, message: ${message}`);
};
make_shirt("Large", "Abdul Latif'Shirt");
// NO.37
console.log('Answer No.37 > > > > > > > ');
make_shirt("Large", "I love TypeScript.");
make_shirt("Medium", "Abdul Latif'Shirt");
make_shirt("Small", "Shirt of small size");
// NO.38
console.log('Answer No.38 > > > > > > > ');
const describe_city = (city, country) => {
    console.log(`${city} is in ${country}`);
};
describe_city("Karachi", "Pakistan");
describe_city("Mumbai", "India");
describe_city("Dhaka", "Bangladesh");
// NO.39
console.log('Answer No.39 > > > > > > > ');
const city_country = (city, country) => {
    return `${city},${country}`;
};
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Mumbai", "India"));
console.log(city_country("Dhaka", "Bangladesh"));
// NO.40
console.log('Answer No.40 > > > > > > > ');
const make_album = (artist, album, track) => {
    if (track !== undefined) {
        console.log(`Artist Name: ${artist}, Album Name: ${album}, Track is ${track}`);
    }
    else {
        console.log(`Artist Name: ${artist}, Album Name: ${album}`);
    }
};
make_album('ABC', 'DEF', 12);
make_album('XYZ', 'GHI', 10);
make_album('ABC', 'DEF');
// NO.41
console.log('Answer No.41 > > > > > > > ');
const megiciansName = ['Aalto', 'Simo.Abbot', 'David', 'Baker', 'Al·Balducci', 'Ed·Cagliostro', 'Alessandro·Calver'];
const show_megicians = (megicians) => {
    for (const i of megicians) {
        console.log(i);
    }
};
show_megicians(megiciansName);
// NO.42
console.log('Answer No.42 > > > > > > > ');
const greatMegicians = (megicians) => {
    for (const i of megicians) {
        console.log(`The Great ${i}`);
    }
};
greatMegicians(megiciansName);
