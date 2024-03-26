/**/
var firstBet=10;  //Первая ставка // first bet
var secondBet=10; //Вторая ставка // second bet
var firstX=1.1;   //Первый Х      // first X
var secondX=1.2;  //Второй Х      // second X
/**/ 

var successF = 0;
var successS = 0;
var profF = 0;
var profS = 0;
var profT = 0;
var AMNT = document.querySelector("#crash_amount");
var autoCashOut = document.querySelector("#crash_auto_cashout");
var elem1 = document.querySelectorAll('.crash-bet-text')[0]
var elem2 =document.querySelectorAll('.crash-bet-text')[1]
var elem3 = document.querySelector(".crash-history")
var targetColor = "color:black; background-color: yellow;"


var config = { childList: true, subtree: true};


var betbtn = document.querySelectorAll('.crash-bet-click');
    var config = { childList: true, subtree: true};
    //first
                    AMNT.value = firstBet;
                    autoCashOut.value = firstX;
                    betbtn[0].click();
let observer1 = new MutationObserver(mutationRecords => {
                    if(mutationRecords[0].target.textContent == "СДЕЛАТЬ СТАВКУ #1" || mutationRecords[0].target.textContent == "PLACE BET #1"){
                    AMNT.value = firstBet;
                    autoCashOut.value = firstX;
                    betbtn[0].click();
                    }
                  })
observer1.observe(elem1, config);
//second
                  AMNT.value = secondBet;
                    autoCashOut.value = secondX;
                    betbtn[1].click();
let observer2 = new MutationObserver(mutationRecords => {
                  if(mutationRecords[0].target.textContent == "СДЕЛАТЬ СТАВКУ #2" || mutationRecords[0].target.textContent == "PLACE BET #2"){
                    AMNT.value = secondBet;
                    autoCashOut.value = secondX;
                    betbtn[1].click();
                  }
                  
                  
                  
                  })
observer2.observe(elem2, config);
//Info area 
let observer3 = new MutationObserver(mutationRecords => { 
  let temp_ = Number(document.querySelector(".crash-history>li>span").textContent);
  
console.log("%cNow crash is: "+temp_,targetColor )
let now = Number(document.querySelector(".crash-history>li>span").textContent);
if(now >= firstX){
    successF++;
    log("s", "first bet claim successful"+" you claim "+successF+" bets")
    profF += (firstX * firstBet) - firstBet
    log("w","profit from 1 bet: "+((firstX * firstBet)- firstBet))
    log("i", "total profit from 1 bet: "+profF)

}else{
  log("e", "The first bet was not played")
  profS -=firstBet;
}
if(now >= secondX){
    successS++;
    log("s","second bet claim successful"+" you claim "+successS+" bets")
    profS += (secondX * secondBet) - secondBet;
    log("w","profit from 2 bet: "+((secondX * secondBet) - secondBet))
    log("i","total profit from 2 bet: "+profS)

}else{
  log("e", "The second bet was not played")
  profF -= secondBet;
}
profT = profF + profS;
log("w", "total profit from all bets: "+profT)
 });
 observer3.observe(elem3, config);

 function log(status,message) {
  status = status || "black";
  switch (status) {
    case "s":  
    status = "Green"; 
         break;
    case "i":     
    status = "Yellow";  
         break;
    case "e":   
    status = "Red";     
         break;
    case "w":  
    status = "Orange";   
         break;
    default: 
    status = status;
}
  console.log("%c"+message,"color: "+status+";")
  }
