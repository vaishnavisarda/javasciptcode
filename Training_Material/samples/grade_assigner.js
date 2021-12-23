// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.


function assignGrade(num){
    if(num>=90){
        return `Grade A`;
    }
    if(num>=70){
        return `Grade B`;
    }
    if(num>=55){
        return `Grade C`;
    }
    if(num>=35){
        return ` Grade D`;
    }
    else{
        return ` Grade F`;
    }
}

// console.log(assignGrade(85));
// console.log(assignGrade(65));
// console.log(assignGrade(45));
// console.log(assignGrade(30));
// console.log(assignGrade(96));
// console.log(assignGrade(35));

exports.getGrade= assignGrade;