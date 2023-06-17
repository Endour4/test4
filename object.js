// const person = {     //Nested Object
//     firstname:"Emma",
//     lastname:"Benard",
//     cars: {
//         carA:"Toyota",
//         carB:"Benz",
//         carC:"Honda"
//     }
// }
// let x = person.cars.carC

// const Obj = {
//     name:"Ben",
//     age:20,
//     cars: [{
//         name:"Volvo",
//         models:"Tito"
//     }]
// }
// let x = Obj.cars[0]
// let y = console.log(x)

// const person = {
//     name: "Sam",
//     age: 30,

//     greet: function(name1, age1){
        
//         return (`Hi, I am ${age1} years`)
//     }

    
// }
// let person1 = person.greet("Osas", 12)
// const username = console.log(person1)

// const car = {
//     name: 'Ford',
//     year: 2022,
//     color: 'hash',
//     description : function(){ 
//         return (`${this.name} - ${this.year}`)
//     }
// }

const Vehicle = {               // : COLON      ;  SEMI COLON  //debugging == troubleshooting
    type:'SUV',                 //  Bug == Problem
    color:"red",
    brand:'Lexuz',
    year:2010,

    start: function(){
        return ("Vroom! Vroom! Vehicle have started")
    },

    stop: function(){
        return "Vehicle Stopped"
    },

    PickupPassenter: function(){
        return "Passenger picked up"
    }

}
