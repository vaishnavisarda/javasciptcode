let convertTime12to24 = time12h => {
    let [time, modifier] = time12h.split(" ");
   
    let [hours, minutes] = time.split(":");
   
    if (hours =="12") {
      hours = "00";
    }
   
    if (modifier == "PM") {
      hours = parseInt(hours, 10) + 12;
    }
   
    return `${hours}:${minutes}`;
  };
   
  let convertedTime = convertTime12to24("01:45 PM");
  console.log(convertedTime);