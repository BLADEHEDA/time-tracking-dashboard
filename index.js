 const data = [
    {
       title :  "Work" ,
       timeframes : {
         daily : {
           current : 5,
           previous : 7
        },
         weekly : {
           current : 32,
           previous : 36
        },
         monthly : {
           current : 103,
           previous : 128
        }
      }
    },
    {
       title :  "Play" ,
       timeframes : {
         daily : {
           current : 1,
           previous : 2
        },
         weekly : {
           current : 10,
           previous : 8
        },
         monthly : {
           current : 23,
           previous : 29
        }
      }
    },
    {
       title :  "Study" ,
       timeframes : {
         daily : {
           current : 0,
           previous : 1
        },
         weekly : {
           current : 4,
           previous : 7
        },
         monthly : {
           current : 13,
           previous : 19
        }
      }
    },
    {
       title :  "Exercise" ,
       timeframes : {
         daily : {
           current : 1,
           previous : 1
        },
         weekly : {
           current : 4,
           previous : 5
        },
         monthly : {
           current : 11,
           previous : 18
        }
      }
    },
    {
       title :  "Social" ,
       timeframes : {
         daily : {
           current : 1,
           previous : 3
        },
         weekly : {
           current : 5,
           previous : 10
        },
         monthly : {
           current : 21,
           previous : 23
        }
      }
    },
    {
       title :  "Self Care" ,
       timeframes : {
         daily : {
           current : 0,
           previous : 1
        },
         weekly : {
           current : 2,
           previous : 2
        },
         monthly : {
           current : 7,
           previous : 11
        }
      }
    }
  ];


// event listener for daily 
// The code below displays the data required when the the timeframe is clicked 
//day1
const days= document.querySelector("#daily");
const weeks= document.querySelector("#weekly");
const months= document.querySelector("#monthly");

let current_day1 = document.querySelector("#current");
let content= document.querySelectorAll(".previous-cont");
let previous_day1 = document.querySelector("#previous1");

// day2
let current_day2 = document.querySelector("#current1");
let previous_day2 = document.querySelector("#previous2");
// day3
let current_day3 = document.querySelector("#current2");
let previous_day3 = document.querySelector("#previous3");

// day4
let current_day4 = document.querySelector("#current3");
let previous_day4 = document.querySelector("#previous4");
// day5
let current_day5= document.querySelector("#current4");
let previous_day5 = document.querySelector("#previous5");
// day6
let current_day6 = document.querySelector("#current5");
let previous_day6 = document.querySelector("#previous6");
days.addEventListener("click" ,  function daily(){

    // this changes the value of the current value 
    current_day1.textContent= data[0].timeframes.daily.current;
    current_day2.textContent= data[1].timeframes.daily.current;
    current_day3.textContent= data[2].timeframes.daily.current;
    current_day4.textContent= data[3].timeframes.daily.current;
    current_day5.textContent= data[4].timeframes.daily.current;
    current_day6.textContent= data[5].timeframes.daily.current;

    //  this changes the value of the prvius day and its text content 
    for( var i=0; i<content.length;i++){
        content[i].textContent= "Last Day ";
    }
previous_day1.textContent= data[0].timeframes.daily.previous;
previous_day2.textContent= data[1].timeframes.daily.previous;
previous_day3.textContent= data[2].timeframes.daily.previous;
previous_day4.textContent= data[3].timeframes.daily.previous;
previous_day5.textContent= data[4].timeframes.daily.previous;
previous_day6.textContent= data[5].timeframes.daily.previous;


 });

//  this displays the current day and week 
weeks.addEventListener("click" ,  function weekly(){

    // this changes the value of the current value 
    current_day1.textContent= data[0].timeframes.weekly.current;
    current_day2.textContent= data[1].timeframes.weekly.current;
    current_day3.textContent= data[2].timeframes.weekly.current;
    current_day4.textContent= data[3].timeframes.weekly.current;
    current_day5.textContent= data[4].timeframes.weekly.current;
    current_day6.textContent= data[5].timeframes.weekly.current;
    //  this changes the value of the prvius day and its text content 
    for( var i=0; i<content.length;i++){
        content[i].textContent= "Last Week ";
    }
    previous_day1.textContent= data[0].timeframes.weekly.previous;
    previous_day2.textContent= data[1].timeframes.weekly.previous;
    previous_day3.textContent= data[2].timeframes.weekly.previous;
    previous_day4.textContent= data[3].timeframes.weekly.previous;
    previous_day5.textContent= data[4].timeframes.weekly.previous;
    previous_day6.textContent= data[5].timeframes.weekly.previous;



 });
 //  this displays the current day and week and month
months.addEventListener("click" ,  function weekly(){

    // this changes the value of the current value 
    current_day1.textContent= data[0].timeframes.monthly.current;
    current_day2.textContent= data[1].timeframes.monthly.current;
    current_day3.textContent= data[2].timeframes.monthly.current;
    current_day4.textContent= data[3].timeframes.monthly.current;
    current_day5.textContent= data[4].timeframes.monthly.current;
    current_day6.textContent= data[5].timeframes.monthly.current;
    //  this changes the value of the prvius day and its text content 
    for( var i=0; i<content.length;i++){
        content[i].textContent= "Last Month ";
    }
    previous_day1.textContent= data[0].timeframes.monthly.previous;
    previous_day2.textContent= data[1].timeframes.monthly.previous;
    previous_day3.textContent= data[2].timeframes.monthly.previous;
    previous_day4.textContent= data[3].timeframes.monthly.previous;
    previous_day5.textContent= data[4].timeframes.monthly.previous;
    previous_day6.textContent= data[5].timeframes.monthly.previous;



 });


