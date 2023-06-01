// Format SatSchedule
class scheduleEvent {
    constructor(title, start) {
        this.title = title;
        this.startTime = start;
    }

}

var saturday = [];
var sunday = [];


// track = {main, ws} where ws is workshop
saturday.push(new scheduleEvent("Registration Opens", "1<sup>st</sup> June <br>12:00 IST", "main"));
saturday.push(new scheduleEvent("Registration Closes", "9<sup>th</sup> June <br>12:00 IST", "main"));
saturday.push(new scheduleEvent("Kick-Off Session", "9<sup>th</sup> June <br>20:00 IST", "main"));
saturday.push(new scheduleEvent("Round 1 starts", "9<sup>th</sup> June <br>23:59 IST", "main"));
saturday.push(new scheduleEvent("Round 1 closes", "11<sup>th</sup> June <br>23:59 IST", "main"));
saturday.push(new scheduleEvent("Round 1 Results", "12<sup>th</sup> June <br>13:00 IST", "main"));
saturday.push(new scheduleEvent("Round 2 ", "13<sup>th</sup> June <br>", "main"));
saturday.push(new scheduleEvent("Final Result ", "13<sup>th</sup> June <br> ", "main"));

// sunday.push(new scheduleEvent("No workshops today", "00:00", "17:00", "ws"));

// saturday.sort((a,b) => (a.startTime >= b.startTime) ? 1: -1);
// sunday.sort((a,b) => (a.startTime >= b.startTime) ? 1 : -1 );

var str = '<tbody>';
str +=  '<tr><th>Date</th><th>Main track</th></tr>';
saturday.forEach(function(ev, index){
  if (index ==0  || saturday[index-1].startTime != ev.startTime){     
    str += '<tr>';
    if (ev.track == 'ws'){

        str += '<th></th>';
        str += '<td></td>';
    }

  str += '<th>';

  str += ev.startTime 
  if (ev.endTime){
    str+='<br />|<br />' + ev.endTime;
  }
  str += '</th>';
  str += '<td>';
  str += ev.title + '';
  str += '</td>';
  
  if (ev.track == 'main'){
      if(index != saturday.length-1 && ev.startTime == saturday[index+1].startTime){
        str += '<th>';
        str+=saturday[index+1].startTime
        if(saturday[index+1].endTime){
        str +=  '<br />|<br />' + saturday[index+1].endTime;
      }
    
  str += '</th>';
  str += '<td>' + saturday[index+1].title+ '</td>';
    }
  else{
  str +='<th></th>';
  str += '<td></td>';
  }}
  
  str += '</tr>';
  
  }

});
str += '</tbody>';
window.document.getElementById("saturdayContainer").innerHTML = str;

// var str = '<tbody>';
// str +=  '<tr><th>Date</th><th>Main track</th></tr>';
// sunday.forEach(function(ev, index){
//   if (index ==0  || (sunday[index-1].startTime != ev.startTime || sunday[index-1].track == ev.track) ){     
//     str += '<tr>';
//     if (ev.track == 'ws'){

//         str += '<th></th>';
//         str += '<td></td>';
//     }
    
    

//   str += '<th>';

//   str += ev.startTime 
//   if (ev.endTime){
//     str+='<br />|<br />' + ev.endTime;
//   }
//   str += '</th>';
//   str += '<td>';
//   str += ev.title + '';
//   str += '</td>';
  
//   if (ev.track == 'main'){
//     if (index != sunday.length-1 && ev.startTime == sunday[index+1].startTime && ev.track != sunday[index+1].track){
//         str += '<th>';
//         str+=sunday[index+1].startTime
//         if(sunday[index+1].endTime){
//         str +=  '<br />|<br />' + sunday[index+1].endTime;
//       }
    
//   str += '</th>';
//   str += '<td>' + sunday[index+1].title+ '</td>';
    
//   }
//   else{
//   str +='<th></th>';
//   str += '<td></td>';
//   }}
  
//   str += '</tr>';
  
//   }

// });
// str += '</tbody>';
// window.document.getElementById("sundayContainer").innerHTML = str;