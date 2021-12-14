// // Write a JavaScript program to create a Clock. Go to the editor
// // Note: The output will come every second.
// // Expected Console Output :
// // "14:37:42"
// // "14:37:43"
// // "14:37:44"
// // "14:37:45"
// // "14:37:46"
// "14:37:47"

setInterval(Time,1000);

    function Time(){
        let time = new Date();
        let hour = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();
        am_pm ="AM";

        if(hour > 12){
            hour= hour-12;
            am_pm= "PM";
        }
        if(hour ==0){
            hr =12;
            am_pm ="AM";
        }
         hour =hour < 10 ? "0"+ hour : hour;
         min= min <10 ? "0" + min : min;
         sec = sec <10 ? "0" + sec : sec;

        let curr_time = hour + ":" 
        +min + ":"+sec +am_pm;
        console.log(curr_time);
    }

Time();

  