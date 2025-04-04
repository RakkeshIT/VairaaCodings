
/*
    Conditional Statements
    1] if-else
    2] Terinary Operator
    3] if-else-Ladder

    => if -> if have a condition and it Return code if condition is true

    => else -> Its Return a Code if Condition is False

    1] if-else SYNTAX

    if(condition){
        //TRUE
    }else{
        //FALSE
    }

    2] Terinary Operator

    (condition) ? TRUE : FALSE


    3] if-else-Ladder

    => Check the Multiple Conditions
    if(condition 1){
        //CODE
    }else if(condition 2) {
        //code
    }else if(condition 3){
    
    }else {
        //FALSE CODE        
    }
*/

let Mark = 550;

if(Mark >= 250){
    console.log("PASS");
}else{
    console.log("FAIL");  
}

// Terinay Operator
(Mark >= 250) ? console.log("Pass") : console.log("fail")

// If Else Ladder

let Grade = "B";

if(Grade === "A"){
    console.log("Grade A");
}else if(Grade === "B"){
    console.log("Grade B");
    
}else if(Grade === "C"){
    console.log("Grade C");
}else {
    console.log("Fail");
}