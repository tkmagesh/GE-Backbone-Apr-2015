var products = [
    {id: 5, name : "Pen", cost : 50, units : 40, category : 2},
    {id: 8, name : "Pencil", cost : 60, units : 30, category : 1},
    {id: 3, name : "Marker", cost : 40, units : 80, category : 2},
    {id: 5, name : "Stylus", cost : 80, units : 50, category : 1},
    {id: 7, name : "Tablet", cost : 90, units : 70, category : 2},
    {id: 9, name : "Scrible Pad", cost : 20, units : 90, category : 1}
]

//1. write a function to filter the products based on ANY criteria


//2. Create an object "spinner" that exhibits the following behavior:

var spinner = //fill in the blanks;
spinner.up() // => 1
spinner.up() // => 2
spinner.up() // => 3
spinner.up() // => 4

spinner.down() // => 3
spinner.down() // => 2
spinner.down() // => 1
spinner.down() // => 0

//3. Given the following

var emp1 = {
    name : "Magesh"
}

function whoAmI(){
    console.log("I am ", this.name);
}

//what does it take to exhibit the following behavior
whoAmI() //=> "I am Magesh"




    



