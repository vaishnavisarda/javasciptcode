// 's like IMDB, but much much smaller!

// Create an object to store the following information about your 
// favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 
// 30 minutes. Stars: Puff, Jackie, Living Sneezes."

let movie ={
    "title" :"3 idiots",
    "duration" :90,
    "stars" :["Amir khan","R Madhvan","Sharman Joshi"]
};

function printMovie(mov){
    console.log(`${movie.title} lasts for ${movie.duration} minutes `);
    let starsString ="Stars :";
    for(let i =0;i< movie.stars.length; i++){
        starsString += movie.stars[i];
        if(i !=movie.stars.length-1){
            starsString += " , ";
        
        }

    } 
    console.log(starsString);
}
printMovie(movie);