


// classes ex
////////////
class CompanySalaries{
    constructor(CEO,Manager,Workers){
        this.CEO=CEO 
        this.Manager=Manager
        this.Workers=Workers
    }

    displaySalaries(){
        console.log(`CEO salary = ${this.CEO} rupees`);
        console.log(`Manager salary = ${this.Manager} rupees`);
        console.log(`Workers salary = ${this.Workers} rupees`)
    }
}

let AprilMonthSalary = new CompanySalaries("50.000","25.000","10.000");
AprilMonthSalary.displaySalaries()




//Array function ex
//////////////

const numbers = [1,2,3,4,5,6];

const squares = numbers.map((element) => Math.pow(element,2) );

const cubes = numbers.map((element) => Math.pow(element,3) );
console.log(cubes)