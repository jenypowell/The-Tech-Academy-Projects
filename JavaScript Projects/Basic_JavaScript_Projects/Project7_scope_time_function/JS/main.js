var J = 13;     //Create global variable
function Add_Numbers_1()  {
    document.write(20+J+"<br>");    
}

function Add_Numbers_2()    {
    document.write(J + 100+"<br>");    //Call global variable value into a new function
}

Add_Numbers_1();    //Display value of function

Add_Numbers_2();    //Display value of function

function Add_Numbers_3()    {
    var L = 67;
    console.log(20 + L + "<br>"); //create local variable 
}

function Add_Numbers_4()    {
     console.log(220 + L + "<br>"); //Call local variable to use console log to see error
}

Add_Numbers_3();    //Display value of function
Add_Numbers_4();    //Display value of function (doesn't 
                    //work, variable defined locally in different function)

function get_date() {
    if (new Date().getHours() < 18) {
    document.getElementById("Greeting").innerHTML = "How are you today?";   //create function with conditional 
                                                                            //statement to display if it is earlier than 6pm
    }
}

function get_date_1() {
    var time_of_day = new Date().getHours();
    if (time_of_day < 15) {
    document.getElementById("Greeting_1").innerHTML = "Enjoy your work day!";   //create function with conditional 
                                                                            //statement to display if it is later than 6am
    }
}


function Age_Function() {
    Age=document.getElementById("Age").value;   //call age from input 
if (Age >= 18) {
    Vote = "You are old enough to vote!";   //display message if true
}
else {
    Vote = "You are not old enough to vote!";    //display message if false
}
document.getElementById("How_old_are_you").innerHTML = Vote;

}


function Appraisal_Function() {
    Appraised=document.getElementById("Appraised").value;   //call appraisal value from input 
if (Appraised >= 330000) {
    Sale = "Your sale can go through, your appraisal was high enough!";   //display message if true
}
else {
    Sale = "Your sale cannot go through, your appraisal was not high enough!";    //display message if false
}
document.getElementById("Value_of_Appraisal").innerHTML = Sale;

}

function Time_function()    {
    var Time = new Date().getHours(); //defining variable to get local time
    var Reply;  //creating variable to use in if statements
    if(Time < 6 == Time > 0)    {
        Reply ="It is morning.";
    }   //display this reply if time is between midnight and 6AM
    else if(Time > 6 == Time < 15)    {
        Reply ="It is during working hours.";
    }   //display this reply if time is between 6AM and 3PM
    else   {
        Reply ="It is evening time.";
    }   //display this reply if time is outside of hours listed above
    document.getElementById("Time_of_day").innerHTML = Reply;
}