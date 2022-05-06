let day=2;
let dayName;
switch(day){
    case 0:
    dayName="월요일";
    break;
    case 1:
    dayName="화요일";
    break;
    case 2:
    dayName="수요일";
    break;
    case 3:
    dayName="목요일";
    break;
    case 4:
    dayName="금요일";
    break;
    case 5:
    dayName="토요일";
    break;
    case 6:
    dayName="일요일";
    break;
}
console.log(dayName);

let condition ='okㅇㅇay';
let text;
switch(condition){
    case 'okay':
    case 'good':
    text='좋음';
    break;

    case 'bad':
    text='나빠';
    break;

    default:
    console.log('컨디션ㅇ ㅣ뭔지 모르겟어');
}
console.log(text);