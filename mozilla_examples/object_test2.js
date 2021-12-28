// Ibnclude at least two albums in the albums array.

// Once you've done this, you should then write a string to the variable bandInfo, which will contain a small biography detailing their name, nationality, years active, and style, and the title and release date of their first album.

    let bandInfo;
    let curr_year=2021;
    let active_year=0;
let band={
 
    name : "Vaishnavi_s band",
    nationality :"Indian",
    genre:"Indian music",
    members : 2,
    formed :  2018,
    split :false,
    albums :[{
        name :"Sooryavansham",
        released : 1998
    },
    {
        name: "Welcome",
        released : 2001
    }]   
 
}
active_year=curr_year-band.formed;

   bandInfo= ('Hi we are ' + band.name + " .We are "+band.nationality+" . We play " + band.genre + " , we have "+ band.members +" members in our band .We have been working since "+active_year+" active years . Our album was realeased on " +band.albums[0].released );
    
    console.log(bandInfo);
    
    