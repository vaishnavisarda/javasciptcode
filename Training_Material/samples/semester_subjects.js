let S1 = 1;//1 0001
 let S2 = 2;//2 0010
 let S3 = 4;//4 0100
 let S4 = 8;//8 1000

 let SEM1 =["english","maths","science"];
 let SEM2 =["histroy","geograpy","drawing"];
 let SEM3 =["gujrati","marathi","sst"];
 let SEM4 =["chemistry","physics","hindi"];

 let condi=S2|S1;
 //0001|0010=0011
let S5=S2|S1 

 if(condi==S5){
     console.log(SEM1,SEM2);
 }
 if(condi==S2){
    console.log(SEM2);
}

if(condi==S3){
    console.log(SEM3);
}
if(condi==S4){
    console.log(SEM4);
}
else
{
    console.log("No valid sub selected");
}



  
