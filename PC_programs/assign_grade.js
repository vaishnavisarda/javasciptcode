// Check the results of your assignGrade function from the conditionals exercise by logging every value from 60 to 100: your log should show "For 88, you got a B. For 89, you got a B. For 90, you got an A. For 91, you got an A.", etc., logging each grade point in the range.

let someModule=require("./grade_assigner");


//someModule.getGrade(num);

for(let num=30;num<101;num++){
    //console.log(someModule.getGrade(90));
    //console.log(someModule.getGrade(num));
    console.log(`For ${num} you got a ${someModule.getGrade(num)}`);
}


