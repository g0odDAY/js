//21
let x= new Set('java');
let y=new Set();
console.log(x,y);

//22

//23

//24
const upper = str=> str.toUpperCase();
console.log(upper('mary'));

//25
const radius = num => num*num*3.14;
console.log(radius(3));

//26
const planets = {
    '수성' : 'Mercury',
    '금성' : 'Venus',
    '지구' : 'Earth',
    '화성' : 'Mars',
    '목성' : 'Jupiter',
    '토성' : 'Saturn',
    '천왕성' : 'Uranus',
    '해왕성' : 'Neptune',
};

console.log(planets['수성']);

//27
const keys = ['yujin','hejin'];
const values = [70,100];
let result = {};
for(let i =0;i<keys.length;i++){
    result[keys[i]]=values[i];
}
console.log(result);

//28
const strArray = str => [...str];
const tmp = strArray('javascript')
console.log(tmp);
for(let i = 0;i<tmp.length-1;i++){
    console.log(tmp[i],tmp[i+1]);
}

//29
const translate = char => char.charCodeAt(0)>=97 ? 'No':'YES';
console.log(translate('Z'));

//30

const fruit = 'yummy';
const str = 'applpineapple is yummy';
console.log(str.indexOf(fruit));

