let apple={
    name:'apple',
    'hello':'❤',
    0:1,
    ['hello-bye']:'💫'
}
console.log(apple['hello-bye']);
console.log(apple[0]);
console.log(apple.name);
console.log(apple.hello);
apple.emoji='💟';
console.log(apple['emoji']);
delete apple.emoji;
console.log(apple);