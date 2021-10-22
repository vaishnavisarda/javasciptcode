// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", 
// picking the right suffix for the number based on what it is.



let choices=["Mango","banana","Apple","Kiwi","Lichi"];
for(let i=0;i<=choices.length;i++){
    console.log( `My # ${i} choice  is ${choices[i]}`);

}


for(let i =0;i<=choices.length;i++){
    let choice = i+1;
    let choice_suffix ;
    if(choice ==1){

    choice_suffix='st';
    }
    else if(choice==2){
        choice_suffix='nd';
    }
    else if(choice==3){
        choice_suffix ='rd';

    }
    else {
        choice_suffix='th';
    }

    console.log(`My  ${choice} ${choice_suffix} choice is  ${choices[i]}`);
    
}