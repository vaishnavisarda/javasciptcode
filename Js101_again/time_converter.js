function timeConversion(s) {
    //console.log(s);
    s=s.split(":");
   let hours = parseInt(s[0]);
   //let minutes =s[1].slice(2);
   let seconds = s[2].slice(0,2);
   let am_pm =s[2].slice(2);
   
   if((am_pm=="PM") &&(hours!==12)){
       hours+=12;
   }
   if((am_pm =="AM") && (hours==12)){
       hours=="00";
   }
   else if(hours < 10){
       hours="0"+hours.toString();
   }
   else{
       hours=hours.toString();
   }
   
console.log([hours ,s[1] ,seconds].join(":"));
}

timeConversion("07:05:00 PM");