function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}
var result = kilometerToMeter(10);
console.log('meter :',result);



function budgetCalculator(watch = 50, mobile = 100, laptop = 500){
    var shopping = watch * 50 + mobile * 100 + laptop * 500;
     return shopping;
 }
 var result = budgetCalculator(4,3,2);
 console.log('Total :', result);



 function hotelCost(day){
     var cost = 0;
      if(day <= 10){
         cost = day * 100;
     }
     else if(day <= 20){
         var first10Days = 10 * 100;
        var remaining = day - 10;
         var second10Days = remaining * 80;
         cost = first10Days + second10Days;
     }
     else{
         var first10Days = 10 * 100;
         var second10Days = 10 * 80;
         var remaining = day - 20;
         var othersDay = remaining * 50;
         cost = first10Days + second10Days + othersDay;
     }
     return cost;
 }
 var result = hotelCost(30);
 console.log('cost :', result);




function megaFriend(array){
     return array.split(" ").sort(function(min, max){
        return max.length - min.length;
    })[0];
}
var result = megaFriend('faruk, jahanara, bangladesh, valobashitomay');
console.log('largestName :', result);