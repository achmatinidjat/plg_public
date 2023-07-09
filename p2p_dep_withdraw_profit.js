var amnt = document.querySelectorAll(".table_amount");
var tpe = document.querySelectorAll(".table_prestrong");
var stus = document.querySelectorAll(".table_status:not(.gray)");
var ids = document.querySelectorAll(".padded")

var ArrAll = Array();
var ArrType = Array()
for(var i = 0;i<stus.length;i++){
    ArrAll.push(stus[i].textContent);
}
for(var i = 1; i<tpe.length;i+=3){
    ArrType.push(tpe[i].textContent);
}



var withdraw = 0;
var deposit = 0;
for(var i = 0; i < ids.length; i++){
    if((ArrType[i] == "DEPOSIT") && (ArrAll[i] == "Отменен")){
        console.log(ArrType[i],">",ArrAll[i])
        i++;
    }else if((ArrType[i] == "WITHDRAW") && (ArrAll[i] == "Отменен")){
        console.log(ArrType[i],">",ArrAll[i]);
        i++;
    }
        if(ArrType[i] == "WITHDRAW" && ArrAll[i] == "Завершен"){
        withdraw+=Number(amnt[i].textContent);

    }else if(ArrType[i] == "DEPOSIT" && ArrAll[i] == "Завершен"){
        deposit+=Number(amnt[i].textContent);
    }
}
  
console.log("withdraw >>",withdraw)
console.log("deposit >>",deposit)
console.log("Profit >>", withdraw - deposit)
