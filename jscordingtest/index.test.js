import test from 'node:test';
import assert from 'node:assert';
import {makeCoffee} from './41~50.js';

test('makeCoffee 커피를 잘 만드는지 확인', () => {
    //given
    const orderCount = 3;
    const orderMenu = 'americano';
    //when
    const result = makeCoffee(orderMenu,orderCount);
    //then
    const expected = ['물,커피원두','물,커피원두','물,커피원두'];

    assert.deepStrictEqual(result,expected);
})

let debounce = (eventName,func,wait)=>{
    let timeoutId = null;
    return (e)=>{
        let self = this;
        console.log(eventName,'이벤트 발생');
        clearTimeout(timeoutId);
        timeoutId = setTimeout(func.bind(self,e),wait);
    }
}