const info = {
    "name":"kwak",
    "age":25,
    "school":"skhu",
    "phone":"010-2296-7358",
    "birthmonth":5,
    "birthdate":4
}

const print = (info) => {console.log(info)}

print(info);

console.log(`제 생일은 ${info.birthmonth}월 ${info.birthdate}일 입니다.`);

const array = ["1","2","3","4","5","6","7","8","9","10"];

const currect = function(){
    for(var i=0;i<array.length;i++){
        if(array[i]==info.birthmonth){
            console.log(`${array[i]}는 제 생일달과 같습니다.`);
            break;
        }
    }
}

currect();