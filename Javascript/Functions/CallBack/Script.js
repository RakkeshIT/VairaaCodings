// CALLBACK FUNCTION

// Funtaction A

function Animal(callback){
    console.log("I am a DOG");
    callback()
}

// Funtaction B

function Dog(){
    console.log("WOW");
}

Animal(Dog)


const Numbers = [1,2,3,4,5,6]

// MAP METHOD
Numbers.map((value)=>console.log(value))

const userDate = [
    {name:"Arun", age:'22',Deparment:"CS"},
    {name:"Vimal", age:23, Deparment:'BCOM'},
    {name:'Abinaya', age:22, Deparment:"MCOM"},
    {name:'Ram', age:23,Deparment:"MSC"},
]

userDate.map((val)=>{
    console.log(`User Name : ${val.name} , User Age : ${val.age}, Department : ${val.Deparment}`);
})