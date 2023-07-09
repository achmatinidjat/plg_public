var a = document.querySelectorAll(".table_amount_coins")
var b = document.querySelectorAll(".table_status")

var arrPrices = [];
var arrStatuses = [];
var cnt = 0;
for(var i = 0; i<a.length; i++){
    arrPrices[i] = a[i].textContent;
}
for(var j = 0; j<b.length;j++){
    arrStatuses[j] = b[j].textContent;
}
console.log(a.length, " : ", b.length)
var maxDep = Number(arrPrices[0]);
for(var k = 0; k<arrPrices.length;k++){
    if(arrStatuses[k] == 'Confirmed' || arrStatuses[k] == 'Success'){
        cnt+=Number(arrPrices[k])
			if(maxDep < arrPrices[k]){
				maxDep = Number(arrPrices[k])
    }
    }
   
}

console.log("Всего монет: ",cnt)
console.log("В $: ", cnt/1350)
console.log("Максимальный депозит|вывод: ",maxDep)
console.log("Максимальный вывод|депозит в $: ",maxDep/1350)

