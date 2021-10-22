// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

function assignGrade(score){

    if(score >=85){
        console.log("you got grade A");
    }
    else if(score >=70){
        console.log("you got grade B");
    }
    else if(score >= 55){
        console.log("you got grade C");
    }
    else if(score >= 35){
        console.log("you got grade D")
    }
    else {
        console.log("you got grade F");
    }
}

assignGrade(45);
assignGrade(30);
assignGrade(85);
assignGrade(66);
assignGrade(78);
