// const apple={
//     name:'apple',
//     diplay:function(){
//         console.log(`${this.name}: 🍎😒`);
//     }
// };
// const orange={
//     name:'orange',
//     diplay:function(){
//         console.log(`${this.name}: 🍊😒`);
//     }
// }
function Fruit(name,emoji){
    this.name=name;
    this.emoji=emoji;
    this.display=()=>{
        console.log(`${this.name}:${this.emoji}`);
    }
};
const apple=new Fruit('apple','🍊');
apple.display();