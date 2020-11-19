console.log("Hello, world");
//задать переменные / declare a variable 
let name = "Harry Potter";
let age  = 18;
let survived = true;
let city = "London";
let commentary = "";
let drivinglicense = "";
//console.log("Character: ", name, ". Age: ", age, ". City ", city);
console.log(`Character: ${name}. Age: ${age}. City: ${city}. `);

if(survived){
    commentary = "survived the battle for Hogwarts.";
} else {
    commentary = "died in the battle for Hogwarts.";
}

console.log(`character ${name} ${commentary}`)

if(age < 18) {
   drivingLicense = `${name} is too young to drive a car.`;
} else {
   drivingLicense = `${name} is old enough to drive a car`;
}
console.log(drivingLicense);

const html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>City: ${city}</li>
        <li>He ${commentary}</li>
        <li>${drivingLicense}</li>
    </ul>  



`;


document.body.innerHTML = html;