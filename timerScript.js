const timer = {
    displayValue: "00:00:00",
    startTime: null,
    currentTime: null,
    pauseTimer: false,
    pausedTime: null,
    timeHr: "0",
    timeMin: "0",
    timeSec: "0",
  };
  function inputTime(number){
    if (timer.startTime === null){
      timer.startTime = parseInt(number);
      timer.displayValue = timer.startTime;
      timer.timeHr = parseInt((timer.startTime / 3600000));
      timer.timeMin = parseInt(((timer.startTime / 60000) % 60));
      timer.timeSec = parseInt(((timer.startTime / 1000) % 60));
      console.log(timer);
      
    } else if (timer.startTime != null){
      timer.startTime += parseInt(number);
      timer.displayValue = timer.startTime;
      timer.timeHr = parseInt((timer.startTime / 3600000));
      timer.timeMin = parseInt(((timer.startTime / 60000) % 60));
      timer.timeSec = parseInt(((timer.startTime / 1000) % 60));
      console.log(timer);
    } 
  }
  let sound = new Audio('https://upload.wikimedia.org/wikipedia/commons/9/9a/Music_Box_Sound_Effect.ogg');
  function playSound(){
    if (timer.currentTime == 0){
      sound.play();
    }
  };
   function startTimer() {
       if (timer.startTime === null){
         window.alert("No Time Entered");
       }    
   else if (timer.startTime != null){
     timer.currentTime = timer.startTime;
    let interval = setInterval(function(){
            if (timer.currentTime <= 0){
             playSound();
              clearInterval(interval);
  
             resetTimer();
              updateDisplay();
           return;
       } else if(timer.pauseTimer == true){
         pauseTimer();
         clearInterval(interval);
         return;       
       }
      else {timer.currentTime = timer.currentTime - 1000;
                            console.log(timer.currentTime);
                            timer.displayValue = timer.currentTime
            ;    timer.timeHr = parseInt((timer.currentTime / 3600000));
      timer.timeMin = parseInt(((timer.currentTime / 60000) % 60));
      timer.timeSec = parseInt(((timer.currentTime / 1000) % 60)); updateDisplay()}}, 1000);
     
    }
  };
  function resetTimer(){
    timer.displayValue = "00:00:00";
    timer.startTime = null;
    timer.currentTime = null;
    timer.pauseTimer = false;
    timer.pausedTime = null;
      timer.timeHr = "0";
    timer.timeMin = "0";
    timer.timeSec = "0";
    console.log(timer);  
  }
  function pauseTimer(){
    timer.displayValue = timer.currentTime;
    timer.startTime = timer.currentTime;
    timer.pausedTime = null;
        timer.timeHr = parseInt((timer.currentTime / 3600000));
      timer.timeMin = parseInt(((timer.currentTime / 60000) % 60));
      timer.timeSec = parseInt(((timer.currentTime / 1000) % 60));
    console.log(timer); 
  }
  function updateDisplay() {
  
      const hrDisplay = document.querySelector('#hr');
    if (timer.timeHr < 10) {
      hrDisplay.value = '0' + timer.timeHr;
    }
   else{ hrDisplay.value = timer.timeHr}
    ;
        const minDisplay = document.querySelector('#min');
      if (timer.timeMin < 10) {
      minDisplay.value = '0' + timer.timeMin;
    }
   else{
    minDisplay.value = timer.timeMin;}
          const secDisplay = document.querySelector('#sec');
      if (timer.timeSec < 10) {
      secDisplay.value = '0' + timer.timeSec;
    }
   else{
    secDisplay.value = timer.timeSec;}
  }
  
  
  updateDisplay();
  
  const keys = document.querySelector('.inputs');
  keys.addEventListener('click', (event) => {
     const target = event.target;
  if (!target.matches('button')){
    return;
  } 
    if (target.classList.contains('startButton')){
      timer.pauseTimer = false;
      startTimer();
  updateDisplay();
    return;
  }
    if (target.classList.contains('resetButton')){
  resetTimer();
  updateDisplay();
    return;
  }
      if (target.classList.contains('pauseButton')){
  timer.pauseTimer = true;
        timer.pausedTime = timer.currentTime;
        console.log(timer);
    return;
  }
    inputTime(target.value)
    console.log(timer.startTime);
  updateDisplay(); 
  
    
  });