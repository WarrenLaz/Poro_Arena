// All constants
const iron = 0;
const bronze = 400;
const silver = 800;
const gold = 1200;
const platinum = 1600;
const diamond = 2000;
const masters = 2400;
const grandmasters = 2800;
const challenger = 3200;

//rank nums
const IV = 0;
const III = 100;
const II = 200;
const I = 300;

var sum = 0;
var counter = 0;


//initializing the arrays
document.getElementById("bal").onclick = function(event){
    console.log("hello");
    
    for(var i = 1; i <= 10; i++){
        var name = document.getElementById("name"+i).value;
        if(name != ""){
            counter++;
        }
    }

    var newList = new Array(counter);
    var newRank = new Array(counter);
    var newRanknums = new Array(counter);
    var elolist = new Array(counter);

    var a = 1;
    for(var j = 0; j < newList.length; j++){
        newList[j]=document.getElementById("name"+ a).value;
        newRank[j]=document.getElementById("rank"+a).value;
        newRanknums[j]=document.getElementById("ranknum"+a).value;
        if("N/A"==document.getElementById("rank"+a).value){
            alert("ERROR N/A rank on slot" + a);
        }
        a++;
    }
    console.log(newList);
    console.log(newRank);
    console.log(newRanknums);
    for(var b = 0; b < newList.length; b++){
    switch(newRank[b]){
        case "Iron": elolist[b] = iron ;break;
        case "Bronze": elolist[b] = bronze;break;
        case "Silver": elolist[b] = silver;break;
        case "Gold": elolist[b] = gold;break;
        case "Platinum": elolist[b] = platinum;break;
        case "Diamond": elolist[b] = diamond;break;
        case "Master": elolist[b] = masters;break;
        case "GrandMaster": elolist[b] = grandmasters;break;
        case "Challenger": elolist[b] = challenger;break;
    }

    switch(newRanknums[b]){
        case "IV": elolist[b] += IV; break;
        case "III": elolist[b] += III; break;
        case "II": elolist[b] += II;break;
        case "I": elolist[b] += I; break;
    }
}

console.log(elolist);

sort(elolist, newList, 0, elolist.length-1);

console.log(elolist);
console.log(newList);

var sum1 = 0;
var sum2 = 0;
var j = 0;
var k = 0;
console.log(Math.round(elolist.length/2));

var team1 = new Array(Math.round(elolist.length/2));
var team1names = new Array(team1.length);
var team2 = new Array(elolist.length-team1.length);
var team2names = new Array(team2.length);
console.log(team2.length);


for(var l = elolist.length-1; l >= 0; l-=2){
    if(sum1 <= sum2){
        team2[j] = elolist[l-1];
        team2names[j] = newList[l-1];
        sum2 += elolist[l-1];
        j++;

        team1[k] = elolist[l];
        team1names[k] = newList[l];
        sum1 += elolist[l];
        k++;
    }
    else if(sum1 > sum2){
        team1[j] = elolist[l-1];
        team1names[j] = newList[l-1];
        sum1 += elolist[l-1];
        j++;

        team2[k] = elolist[l];
        team2names[k] = newList[l];
        sum2 += elolist[l];
        k++;
    }
}

/*
if(elolist.length%2==1){
    if(sum1 <= sum2){
        team2[0] = elolist[0];
        team2names[0] = newList[0];
    }
    else if(sum1 > sum2){
        team1[0] = elolist[0];
        team1names[0] = newList[0];
    }
}
else{
    if(sum1 <= sum2){
        team2[0] = elolist[0];
        team2names[0] = newList[0];

        team1[0] = elolist[1];
        team1names[0] = newList[1];

    }
    else if(sum1 > sum2){
        team1[0] = elolist[0];
        team1names[0] = newList[0];

        team2[0] = elolist[1];
        team2names[0] = newList[1];

    }
}
*/




if(isNaN(sum2)){
    sum2 = 0;
    for(var a = 0; a < team2.length-1; a++){
        sum2 += team2[a];
    }
}
else if(isNaN(sum1)){
    sum1 = 0;
    for(var a = 0; a < team1.length-1; a++){
        sum1 += team1[a];
    }
}


console.log(team2.length);
console.log(sum1);
console.log(sum2);

console.log("team1");
console.log(team1names);
console.log(team1);
console.log("team2");
console.log(team2names);
console.log(team2);

var SR=toStringRank(team1,team2);
console.log(SR[0][0]);
console.log(SR[1][0]);
for(var g = 0; g < counter/2; g++){
if(team1names[g] != undefined ) {
 document.getElementById("t1"+(g+1)).style.display = "table-row";
}

if(team2names[g]!= undefined){
 document.getElementById("t2"+(g+1)).style.display = "table-row";
}
 document.getElementById("t1player"+(g+1)).innerHTML= team1names[g];
 document.getElementById("t2player"+(g+1)).innerHTML= team2names[g];
 document.getElementById("t1playerR"+(g+1)).innerHTML= SR[0][g];
 document.getElementById("t2playerR"+(g+1)).innerHTML= SR[1][g];
 document.getElementById("Defeceit").innerHTML = sum1-sum2;

}

counter = 0;
}

function toStringRank(Rank1, Rank2){
    var RankString1 = new Array(Rank1.length);
    var RankString2 = new Array(Rank2.length);
    var temp = "";
    var temp2 = 0;

   for(var i = 0; i < Rank1.length; i++){
    switch(Rank1[i]%400){
        case 0 : temp = "IV"; temp2 = Rank1[i]-IV; break;
        case 100 : temp = "III"; temp2 = Rank1[i]-III; break;
        case 200 : temp = "II"; temp2 = Rank1[i]-II; break;
        case 300 : temp = "I"; temp2 = Rank1[i]-I; break;
    }
    switch(temp2){
        case iron: RankString1[i] = "Iron " + temp;break;
        case bronze: RankString1[i] = "Bronze " + temp;break;
        case silver: RankString1[i] = "Silver " + temp;break;
        case gold: RankString1[i] = "Gold " + temp;break;
        case platinum: RankString1[i] = "Platinum " + temp;break;
        case diamond: RankString1[i] = "Diamond " + temp;break;
        case masters: RankString1[i] = "Masters " + temp;break;
        case grandmasters: RankString1[i] = "Grandmasters " + temp;break;
        case challenger: RankString1[i] = "Challenger " + temp;break;
    }

   }

   for(var i = 0; i < Rank2.length; i++){
    switch(Rank2[i]%400){
        case 0 : temp = "IV"; temp2 = Rank2[i]-IV; break;
        case 100 : temp = "III"; temp2 = Rank2[i]-III; break;
        case 200 : temp = "II"; temp2 = Rank2[i]-II; break;
        case 300 : temp = "I"; temp2 = Rank2[i]-I; break;
    }
    switch(temp2){
        case iron: RankString2[i] = "Iron " + temp;break;
        case bronze: RankString2[i] = "Bronze " + temp;break;
        case silver: RankString2[i] = "Silver " + temp;break;
        case gold: RankString2[i] = "Gold " + temp;break;
        case platinum: RankString2[i] = "Platinum " + temp;break;
        case diamond: RankString2[i] = "Diamond " + temp;break;
        case masters: RankString2[i] = "Masters " + temp;break;
        case grandmasters: RankString2[i] = "Grandmasters " + temp;break;
        case challenger: RankString2[i] = "Challenger " + temp;break;
    }
   }
   return [RankString1,RankString2];
    
}

function part(items, items2, low, high)
	{
		var parvot = items[high]; 
		var i = (low-1); // index of smaller element
		for (var j=low; j<high; j++)
		{
			/* If the current num is smaller than or if its
			 equal to the pivot
			 */
			if (items[j] <= parvot)
			{
				// switch arr[i] and arr[j]
				i++;
				var temp = items[i];
				items[i] = items[j];
				items[j] = temp;
				var tempname = items2[i];
				items2[i] = items2[j];
				items2[j] = tempname;
			}
		}
		// switch arr[i+1] and arr[high]
		var temp = items[i+1];
		items[i+1] = items[high];
		items[high] = temp;
		var tempName = items2[i+1];
		items2[i+1] = items2[high];
		items2[high] = tempName;

		return i+1;
	}
	
	/// This function implements quick sort.
	function sort(items,items2, low, high)
	{
		if (low < high)
		{
			var par = part(items, items2, low, high);
			sort(items, items2, low, par-1);
			sort(items, items2, par+1, high);
		}

	}