
class Human {

    //properties
    age = 13;  //public
    #weigth = 80;  //private
    heigth = 5

    //behaviour
    walking(){
        console.log("I am Walking", this.#weigth);
    }
    running(){
        console.log("I am Running");
        
    }
}
let obj = new Human();

console.log(obj.age);
obj.walking();

