//OBJECT DESCTRUCURING

// const person = {
// 	name:"Abhi",
// 	age:28,
// 	location:{
// 		city:"Hyd",
// 		temp: 92
// 	}
// }
// const {name: firstName = 'Anonymous',age} = person;
// console.log(`${firstName} is ${age}`);

// const {temp: temprature,city} = person.location;
// console.log(`it's ${temprature} in ${city}`);

// const book={
// 	title: 'Ego is the enemy',
// 	author: 'Ryan Holiday',
// 	publisher:{
// 		//name:'Penguin'
// 	}
// }
// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName)

//
//Array destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [,city,state = 'NY'] = address;

console.log(`You are in ${city} ${state}`);