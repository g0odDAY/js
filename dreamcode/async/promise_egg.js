function fetchEgg(chicken){
    return Promise.resolve(`${chicken}=>egg`);
}
function fryEgg(egg){
    return Promise.resolve(`${egg}=>fry`);
}
function getChicken(){
    return Promise.reject(new Error('치킨을 가지고 올 수없을 !'));
    //return Promise.resolve(`garden=>chicken`);
}
getChicken()
.catch(()=>'hen')
.then(fetchEgg)
.then(fryEgg)
.then(console.log);