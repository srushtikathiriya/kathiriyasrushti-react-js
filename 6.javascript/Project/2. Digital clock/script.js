function updateClock() {
    var txt = "";
    var Clock = new Date();
    var hours = Clock.getHours().toString().padStart(2, '0');
    var minutes = Clock.getMinutes().toString().padStart(2, '0');
    var seconds = Clock.getSeconds().toString().padStart(2, '0');

      if(hours > 12){
          txt = "PM"
      }
      else{ 
         txt = "AM";
      }

    var timeString = hours + ":" + minutes + ":" + seconds + "\t\t" + txt;
    document.getElementById('clock').textContent = timeString;
}

  // Update the clock every second
  setInterval(updateClock, 1000);

  // Initial call to display the clock immediately
  updateClock();