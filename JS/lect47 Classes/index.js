
class Human {

    //properties
    age = 13;  //public
    #weight = 80;  //private
    ht = 15;

    constructor(newAge, newHeight, newWeigth){
        this.age = newAge;
        this.ht = newHeight;
        this.#weight = newWeigth;
    }

    //behaviour
    walking(){
        console.log("I am Walking", this.#weight);
    }
    running(){
        console.log("I am Running");
        
    }

    get fetchWeigth(){
        return this.#weight;
    }

    set modifyWeight(val){
        this.#weight = val;
    }
}
let obj = new Human(50, 190, 90);

console.log(obj.fetchWeigth);
obj.walking();

