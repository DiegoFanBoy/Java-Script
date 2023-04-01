let fnew;
const d = new Date();
let year = d.getFullYear();
let month2 = d.getMonth();
let month;
let month1;
let date2;
let date = d.getDate();


document.getElementById("submit").onclick = function(){
    
    fnew = document.getElementById("textbox1").value;
    console.log(fnew);
    month = document.getElementById("textbox2").value;
    month1 = parseInt(month) - 1;
    console.log(month1);
    date2 = document.getElementById("textbox3").value;
    if(date == date2 && month2 == month1){
        console.log("code works");
        document.getElementById("its").innerHTML = "Todays is your birthday";
    } else {
        console.log("code does not work");
    }
}