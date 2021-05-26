


//used to set/show results of slide movement and selection
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML=rateval;
}


//compute total amount of money 
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

//validate user input to make sure a positive number is entered
    if(principal < 1) 
    {
        alert("Enter A positive number");
        document.getElementById("principal").focus();
    }
    else
    {
    //prints out results of computing the user input
        document.getElementById("result").innerHTML="If you deposit \<mark\>"+principal+"\</mark\>,\<br\>at an interest rate of \<mark\>"+rate+"%\</mark\>.\<br\>Your will recieve an amount of \<mark\>"+interest+"\</mark\>,\<br\>in the year \<mark\>"+year+"\</mark\>\<br\>";
    
    } 


}
        