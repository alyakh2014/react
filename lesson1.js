console.log("======= Task 1 =======");

const myfunction = (num)=>{
    console.log("Done " + num);
    return;
};


const loop = (times = 0, callback = 'null') =>{
    if(!times || callback == null) return;

    let j = 0;
    while(j < times){
        callback(j);
        j++;
    }
};

loop(3, myfunction);

console.log("======= Task 2 =======");

const calculateArea = (sidelength = 5, numsides = 3)=>{

    let areaCalc = Math.round(numsides*Math.pow(sidelength, 2)/(4*Math.tan(Math.PI/(numsides))));
    const obj = {
        'area': areaCalc,
        'figure': 'Правильный многоугольник',
        'input': {'Длина стороны' : sidelength, "Кол-во сторон" :numsides}
    };

    console.log(obj);
};

calculateArea(15, 4);

console.log("======= Task 3 =======");

class Human{
    constructor(name, age, dateOfBirth){
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
    }

    displayINfo = ()=>{
        return "Name:" + this.name + ". Age:" + this.age + ". Date of birth: " + this.dayOfBirth + ". ";
    }
}

class Employee extends Human{
    constructor(salary, department){
        super();
        this.salary = salary;
        this.department = department;
    }
}
class Developer extends Employee{
    constructor(managerId){
        super();
        this.managerId = managerId;
    }

    getManager = (managerId)=>{
        return (new Manager()).get(managerId);
    };

    setManager = (newManagerId)=>{
        this.managerID = newManagerId;
    }

}

class Manager extends Employee{
    constructor(){
        super();
    }
    develoepers = [];

    developerAdd = (id)=>{
        develoepers.push(id);
    };
    developerDel = (id)=>{
        develoepers = develoepers.filter(item => item !== id);
    };

    get = ()=>{
        return this;
    }
}

console.log("======= Task 4 =======");

const promicesArray = [];
const xhr = new XMLHttpRequest();
for(let i = 1; i < 11; i++){
    promicesArray[i] = new Promise((resolve, reject)=>{
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/'+ i, false);
        xhr.send();
        if (xhr.status != 200) {
            console.log(xhr.status + ': ' + xhr.statusText);
        }else console.log(xhr.responseText);
    })
}


Promise.all(promicesArray).then(result=>{
    console.log(result);
});