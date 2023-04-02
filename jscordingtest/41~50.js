

//41
const num41 = 113;
const sosu = (num) =>{
    for(let i = 2; i < num; i++){
        if(num % i === 0)"소수가 아닙니다.";
    }
    return "소수입니다.";
}
//console.log(sosu(num41));



let outer1 = () =>{
    let a = 1;
    let inner1 = () =>{
        return ++a;
    }
    return inner1;
}
let outer2 = outer1();
console.log(outer2());
console.log(outer2());

let car ={
    fuel : Math.ceil(Math.random() * 10 + 10),
    power : Math.ceil(Math.random() * 3 + 2),
    moved : 0,
    run : ()=>{
        let km = Math.ceil(Math.random() * 6);
        let wasteFuel = km / this.power;
        if(car.fuel < wasteFuel){
            console.log("이동불가");
            return;
        }
        car.fuel -= wasteFuel;
        car.moved += km;
        console.log(`${km}km 이동 (총 ${car.moved}km) 남은 연료 : ${car.fuel}L`);
    }
}
const coffeeMakingMap = {
    'americano' : () => '물'+','+'커피원두',
    'cafeLatte' : () => '우유'+','+'커피원두',
}
export default function makeCoffee(orderMenu,orderCount){
    const result = [];
    for(let i = 0; i < orderCount; i++){
        result.push(coffeeMakingMap[orderMenu]());
    }
    return result;
}
console.log(makeCoffee('americano',2));