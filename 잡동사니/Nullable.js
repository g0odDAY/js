
config = {min:10};
config.min ?? 10;
config.max ?? 30;
console.log(config);
const typeMap = {
    signin(){
        console.log("okay");
    }
}
const type = "signin";
const excuteQuery = (type)=>{
    typeMap[type]();
}
excuteQuery(type);

