// Credit: Mateusz Rybczonec

const FULL_DASH_ARRAY = 283;
let WARNING_THRESHOLD = 7;
const ALERT_THRESHOLD = 3;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

let TIME_LIMIT = 15;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;
let timerRunning = false;
let standardSoundDuration = 7;
let compensarorySoundDuration = 4;
let standardQuestion = true;

resetTimer();

$('#timer-control').click(function() {
  if(timerRunning){
    timerStandard.pause();
    timerCompensatory.pause();
    onTimesUp();
  }
  else {
    startTimer();
    timerRunning = true;
    $('#timer-control').text('Stop timer');
  }
})

function resetTimer() {
  timePassed = 0;
  timeLeft = TIME_LIMIT;
  timerInterval = null;
  remainingPathColor = COLOR_CODES.info.color;
  timerRunning = false;
  timerStandard.currentTime = 0;
  timerCompensatory.currentTime = 0

  $('#timer-control').text('Start timer');
  document.getElementById("timer").innerHTML = `
    <div class="base-timer">
      <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="base-timer__circle">
          <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
          <path
            id="base-timer-path-remaining"
            stroke-dasharray="283"
            class="base-timer__path-remaining ${remainingPathColor}"
            d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
          ></path>
        </g>
      </svg>
      <span hidden id="base-timer-label" class="base-timer__label"></span>
    </div>
    `;
}

function onTimesUp() {
  clearInterval(timerInterval);
  $('#timer-control').hide();
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    if(standardQuestion && timePassed > standardSoundDuration+1 && timerStandard.paused){
      timerStandard.play();
    }
    else if(!standardQuestion && timePassed > compensarorySoundDuration+1 && timerCompensatory.paused){
      timerCompensatory.play();
    }
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}
