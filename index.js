// Use Array Methods to solve the tasks below 🎉

const toppings = ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese'];

console.log('---------Task 1--------')
//TASK 1 🚀
// The customer would like to see the topping options, console log out each of the toppings one by one in the array above 
console.log('Mushrooms');
console.log('Tomoatoes');
console.log('Eggs');
console.log('Chili');
console.log('Lettuce');
console.log('Avocado');
console.log('Chiles');
console.log('Bacon');
console.log('Pickles');
console.log('Onions');
console.log('Cheese');




console.log('---------Task 2--------')
//TASK 2 🚀
// // write a function that accepts an array and an item and removes that item from the array
// for example you no longer have any onions and need to remove it from the list of toppings
// Use .forEach() - hint - you will need to include the index in the callback

const itemRemover = (arr, topping) => {
    let index= 0;
    toppings.forEach(function(item){
        if(item === topping){
          toppings.splice(index, 1)  
        }
        index++
      });  
      console.log(arr)
}

itemRemover(toppings,'Eggs');




console.log('---------Task 3--------')
//TASK 3 🚀
// Sort the topping alphabetically and return them in a new array 
toppings.sort(); 
    
console.log(toppings);

const vacations = [
    {city: 'Toronto', country: 'Canada', region: 'North America', temperature: 86, beach: true, sea: false, wifi:'strong', hiking: false, overall_rating: 6,},
    {city: 'Miami', country: 'United States', region: 'North America', temperature: 95, beach: true, sea: true, wifi:'strong', hiking: false, overall_rating: 8,},
    {city: 'Tel Aviv', country: 'Israel', region: 'Middle East', temperature: 102, beach: true, sea: true, wifi:'strong', hiking: true, overall_rating: 10,},
    {city: 'Istanbul', country: 'Turkey', region: 'Europe', temperature: 86, beach: false, sea: false, wifi:'medium', hiking: true, overall_rating: 7,},
    {city: 'Bangkok', country: 'Thailand', region: 'South East Asia', temperature: 101, beach: false, sea: false, wifi:'medium', hiking: false, overall_rating: 5,},
    {city: 'Lima', country: 'Peru', region: 'South America', temperature: 86, beach: false, sea: false, wifi:'weak', hiking: true, overall_rating: 7,},
    {city: 'Muscat', country: 'Oman', region: 'Middle East', temperature: 105, beach: true, sea: true, wifi:'strong', hiking: true, overall_rating: 9,},
    {city: 'Sydney', country: 'Australia', region: 'Oceania', temperature: 92, beach: true, sea: true, wifi:'strong', hiking: true, overall_rating: 8,},
    {city: 'Cape Town', country: 'South Africa', region: 'Africa', temperature: 87, beach: true, sea: true, wifi:'medium', hiking: true, overall_rating: 10,},
    {city: 'Cancun', country: 'Mexico', region: 'North America', temperature: 95, beach: true, sea: true, wifi:'medium', hiking: false, overall_rating: 7,},
];



console.log('---------Task 4--------')
/*
TASK 4 🚀
// The travel agent would like to send a couple on their honeymoon to a location with a beach and a temperature above 90 degrees. return their options in a new array 
*/
const honeymoonDestination = (arr) => {
    let newArr = arr.filter(i=> i.temperature > 90 && i.beach === true); 
    console.log(newArr);
}

honeymoonDestination(vacations);



console.log('---------Task 5--------')
/*
TASK 5 🚀
// A developer decides to become a digital nomad for a year, they would like to live in a place with strong wifi, a beach, and good hiking, return their options
*/
const digitalNomad = (arr) => {
    let newArr = arr.filter(i=> i.wifi === 'strong' && i.beach === true && i.hiking === true); 
    console.log(newArr);
}
digitalNomad(vacations);


console.log('---------Task 6--------')
/* 
TASK 6 🚀
// write a function that allows a user to sort their vacations by hiking opportunities, beach access or a mix of both and return their options
*/
const filter = (arr) => {

    const beachArr = arr.filter(i=> i.beach === true);
    console.log('places with beach:');
    console.log(beachArr); 

    const hikingArr = arr.filter(i=> i.hiking === true);
    console.log('places with hiking:');
    console.log(hikingArr);

    const bothArr = arr.filter(i=> i.hiking === true && i.beach === true);
    console.log('places with both');
    console.log(bothArr);
}
filter(vacations);




console.log('---------Task 7--------')
/* 
TASK 7 🚀
// write a function that finds the average of overall ratings in a given array. The function should take an array as its argument and should return the average of the overall ratings in that array 
hint - use .reduce()
*/
function overallRatingAvgGetter(arr){
    function ratingGetter(item){
        return item.overall_rating;
    }

    function addRating (accumulator, rating){
        return accumulator + rating;
    }
    const ratingArr = arr.map(ratingGetter);
    const ratingTotal = ratingArr.reduce(addRating,0);
    const overallRatingAvg = ratingTotal/ratingArr.length;

    return overallRatingAvg
}

console.log(overallRatingAvgGetter(vacations));



console.log('---------Task 8--------')
/*
TASK 8 🚀
Find the airport codes for each of the cities in the vacation array and write a function to add them to the objects in the array
hint - your function should include array, index and code as parameters
you will need to invoke the function each time you wish to add a new code
*/
// function addAirportCodes(arr){
//    const aiportCodes = ['YYZ','MIA','TLV', 'IST', 'BKK', 'LIM', 'MCT', 'SYD', 'CPT', 'CUN'];
//     for(let i=0; i<arr.length; i++){
//         arr[i]['Airport_Code'] = aiportCodes[i];
//     }
//     return arr
// }
// console.log(addAirportCodes(vacations));

function addAirportCode(arr, index, code){
    arr[index]['Airport_code'] = code;
    return arr
}

console.log(addAirportCode(vacations, 0, 'YYZ'));
