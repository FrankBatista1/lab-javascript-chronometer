class Chronometer {
  constructor() {
    currentTime = 0;
    intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() =>{//
      this.currentTime++;// sums every iteration
      if (callback) {//chacks if there is a callback in the parameter.
        callback();//does the callback if there is one
      }
      }, 1000);//itme that it takes for every 
      console.log(this.currentTime)//prints the current Id
    }
    
  
  getMinutes() {
    return Media.floor(this.currentTime / 60)
  }

  getSeconds() {
    return thss.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    if(value > 10){
    return "0" + value 
  }
  return `${value}`;
  }

  stop() {
    clearInterval.currentTime(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    return `${minutes}:${seconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
