var arrAmnts = [];
var arrFrom = [];
var arrTo = []
var sumFrom = 0;
var sumTo = 0;
var promo = 0;
var cryptoS = 0;
var tarF = 0;
var tarT = 0;

/*Settings*/
var tar = 0;//Значения 0 или 1
var tId = 0;// Id Пользоваетля
var maxInfo = 0;//Значения 0 или 1
var allTrs = 1;//Значения 0 или 1
/*End of settings*/

var data = document.querySelectorAll(".table_from");
var amtData = document.querySelectorAll(".table_amount");

var cnt2 = 1;
for(let i=0, cnt = 0; i<data.length/2;i++, cnt+=2){
    arrFrom[i]=data[cnt].textContent;
}

for(let i=0, cnt = 1; i<data.length/2; i++, cnt+=2){
    arrTo[i]=data[cnt].textContent;
}

for(let i=0; i<amtData.length; i++){
    arrAmnts[i]=amtData[i].textContent;
}

var maxFrom = Number(arrAmnts[0]);
var maxTo = Number(arrAmnts[0]);

for(let i = 0; i<arrAmnts.length;i++){
    if(arrFrom[i] != 'YOU' && arrTo[i] == 'YOU' && arrFrom[i] != '#CRYPTO_WALLET' && arrFrom[i] != '#рефералы'){
        sumFrom+=Number(arrAmnts[i]); 
         if(maxFrom < Number(arrAmnts[i])){
             maxFrom = Number(arrAmnts[i]);
         }
    }
    if(arrFrom[i] == 'YOU' && arrTo[i] != 'YOU'){
        sumTo+=Number(arrAmnts[i])
         if(maxTo < Number(arrAmnts[i])){
             maxTo = Number(arrAmnts[i]);
         }
    }
    if(arrFrom[i] == '#бонускоды' || arrFrom[i]=='#промокоды'){
        promo+=Number(arrAmnts[i])
    }
    if(arrFrom[i] == '#CRYPTO_WALLET'){
        cryptoS+=Number(arrAmnts[i])
    }
    if(arrFrom[i] == tId){
         tarF+=Number(arrAmnts[i])
    }
    if(arrTo[i] == tId){
        tarT+=Number(arrAmnts[i])
    }

}



console.log('Вы отправили монет: ', sumTo);
console.log('Вы получили монет: ', sumFrom);
console.log('Монет получено с промокодов: ', promo);
console.log("Вы получили монет вместе с промо: ", promo + sumFrom)
    if(maxInfo){
        console.log('Вы отправили максимум за 1 перевод: ', maxTo)
        console.log('Вы получили максимум за 1 перевод: ', maxFrom)
    }
    if(tar){
        console.log("Пользователю с ID=",tId," Вы получили: ",tarF, "Монет")
        console.log("Пользователю с ID=",tId," Вы отправили: ",tarT, "Монет")
    }
    if(allTrs)
        console.log("Всего операций обмена: ", arrAmnts.length)
