// Check the results of your assignGrade function from the conditionals exercise 
// by logging every value from 60 to 100: your log should show "For 88, you got a B. For 89, you got a B. For 90, 
// you got an A. For 91, you got an A.", etc., logging each grade point in the range.


function assigngrade(value){
    if( value >=90){
        return 'A';
    }
    else if(value >=80){
        return 'B';
    }
    else if(value >=70){
        return 'C';
    }
    else if(value >=60){
        return 'D';
    }
    else {
        return 'F';
    }
}


for (let i=60; i<=100;i++){
    console.log(`for ${i} you got a ${assigngrade(i)}`);
}