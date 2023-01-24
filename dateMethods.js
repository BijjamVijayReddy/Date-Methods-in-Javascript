const date=new Date()
console.log("Today's Date" , date.getDate())  //Returns numeric Day;
console.log(date.getDay())   // Shows the current day in Week;
console.log(date.getMonth()) // Returns the current Month;
console.log(date.getFullYear())  // shows the current Year.
console.log(date.getHours()) // Returns the hours (0-23) on that day.
console.log(date.getMinutes()); // Returns the mintues;


// Indian Time 
var ISToffSet = 330; //IST is 5:30; i.e. 60*5+30 = 330 in minutes 
offset= ISToffSet*60*1000;
var ISTTime = new Date(date.getTime()+offset);
console.log("IST Date",ISTTime);


// get month full name in JS
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let monthName = months[date.getMonth()];
console.log("Current Month: ", monthName)

// current day
const week=["Sunday","Monday","Tuesday","wednesday","Thursday","Firday","Saturday"]
const day=week[date.getDay()];
console.log("Today is" , day)

