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
}

loop(3, myfunction);

console.log("======= Task 2 =======");

const calculateArea = (sidelength = 5, numsides = 3)=>{

    let areaCalc = Math.round(numsides*Math.pow(sidelength, 2)/(4*Math.tan(Math.PI/(numsides))));
    const obj = {
        'area': areaCalc,
        'figure': 'Правильный многоугольник',
        'input': {'Длина стороны' : sidelength, "Кол-во сторон" :numsides}
    }

    console.log(obj);
}

calculateArea(15, 4);