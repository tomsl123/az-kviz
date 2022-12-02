let questionElem;
let teamOnTurn;

let questions = [
  {
    title: 'Doplň větu správnou spojkou když',
    question: 'Ich bin immer sehr glücklich, ______ wir etwas spielen.',
    correctAnswer: 'WENN'
  },
  {
    title: 'Doplň větu správnou spojkou když',
    question: '______ er in den Alpen war, ist er Ski gefahren',
    correctAnswer: 'ALS'
  },
  {
    title: 'Doplň větu správnou spojkou když',
    question: 'Sie haben sich geärgert, ______ Müller gestern gefoult hat.',
    correctAnswer: 'ALS'
  },
  {
    title: 'Doplň správné sloveso',
    question: 'Ich besuche einen Tanzkurs. Ich ________ gern',
    correctAnswer: 'TANZE'
  },
  {
    title: 'Doplň správné sloveso',
    question: 'Ich bin an der Kletterwand. Ich ________ zweimal pro Woche.',
    correctAnswer: 'KLETTERE'
  },
  {
    title: 'Doplň správné sloveso',
    question: 'Ich fahre oft mit meinem Vater zum See. Er mag Fische, er ______ gern.',
    correctAnswer: 'ANGELT'
  },
  {
    title: 'Doplň zvratné sloveso ve správném tvaru',
    question: 'Kannst du ______ bitte beeilen?',
    correctAnswer: 'DICH'
  },
  {
    title: 'Doplň zvratná slovesa ve správném tvaru',
    question: 'Ich mache _______ Sorgen, weil er ______ nie entspannt.',
    correctAnswer: 'MIR, SICH'
  },
  {
    title: 'Doplň zvratné sloveso ve správném tvaru',
    question: 'Er ärgert _______ immer über alles.',
    correctAnswer: 'SICH'
  },
  {
    title: 'Doplň schön ve správném tvaru',
    question: 'Ich finde Hamburg ______ als Köln.',
    correctAnswer: 'SCHÖNER'
  },
  {
    title: 'Doplň schnell ve správném tvaru',
    question: 'Reisen mit dem Auto ist ______ als mit dr Bus.',
    correctAnswer: 'SCHNELLER'
  },
  {
    title: 'Jaký sport je na obrázku?',
    image: 'tauchen.png',
    correctAnswer: 'Tauchen',
  },
  {
    title: 'Jaký sport je na obrázku?',
    image: 'fechten.jpg',
    correctAnswer: 'Fechten',
  },
  {
    title: 'Jaké oblečení je na obrázku?',
    image: 'anzug.jpg',
    correctAnswer: 'der Anzug',
  },
  {
    title: 'Jaké oblečení je na obrázku?',
    image: 'stiefel.jpg',
    correctAnswer: 'die Stiefel',
  },
  {
    title: 'Jaké oblečení je na obrázku?',
    image: 'kleid.jpg',
    correctAnswer: 'das Kleid',
  },
  {
    title: 'Jaké oblečení je na obrázku?',
    image: 'hemd.jpg',
    correctAnswer: 'das Hemd',
  },
  {
    title: 'Jaké jídlo je na obrázku?',
    image: 'schinken.jpg',
    correctAnswer: 'der Schinken',
  },
  {
    title: 'Jaké jídlo je na obrázku?',
    image: 'kase.jpg',
    correctAnswer: 'der Käse',
  },
  {
    title: 'Jaké jídlo je na obrázku?',
    image: 'suppe.jpg',
    correctAnswer: 'die Suppe',
  },
  {
    title: 'Jaké jídlo je na obrázku?',
    image: 'schweine.jpg',
    correctAnswer: 'der Schweinebraten, Kraut und Knödel',
  },
  {
    title: 'Uhodni, o jaké místo se jedná',
    question: 'Es ist ein Schloss in Bayern. Es wurde von den Ludwig II. gebaut. Es ist ein touristisches Ziel und es ist in mehreren Märchen - inspiration für Disney',
    correctAnswer: 'Neuschwanstein'
  },
  {
    title: 'Was ist das Hauptstadt von Deutschland',
    question: '',
    correctAnswer: 'Berlin'
  },
  {
    title: 'Für welchen Sport brauchen wir Stöckchen?',
    question: '',
    correctAnswer: 'Skifahren'
  },
  {
    title: 'Wer macht die besten Kuchen',
    question: '',
    correctAnswer: 'Atacakes'
  }
];

let compensatoryQuestions = [
  {
    title: 'Je tato věta napsána správně?',
    question: 'Er hat ins Kino gegehen.',
    correctAnswer: 'NEIN'
  },
  {
    title: 'Ist Jan Trna der geduldigsten Lehrer in der Schule?',
    question: '',
    correctAnswer: 'JA'
  },
  {
    title: 'Ist der Großglockner der höchste Berg Deutschlands?',
    question: '',
    correctAnswer: 'NEIN'
  },
  {
    title: 'Hat Jakub Myslivec den Professor stündlich gefragt, wie geht es?',
    question: '',
    correctAnswer: 'JA'
  },
  {
    title: 'Je tato věta napsána správně?',
    question: 'Wir haben keine größe Hund.',
    correctAnswer: 'NEIN'
  },
  {
    title: 'Je tato věta napsána správně?',
    question: 'Er ist nach Deutschland nich gefahren, weil er Frankreich lieber mag.',
    correctAnswer: 'JA'
  },
  {
    title: 'Hat die deutsche Flagge verticale Streifen?',
    question: '',
    correctAnswer: 'NEIN'
  },
  {
    title: 'Hat Deutschland ein Meer?',
    question: '',
    correctAnswer: 'JA'
  },
  {
    title: 'Ist deutsch die Amtssprache nur in Deutschland?',
    question: '',
    correctAnswer: 'NEIN'
  },
  {
    title: 'Tragen Jungs beim Gymnastik ein Trikot?',
    question: '',
    correctAnswer: 'JA'
  },
  {
    title: 'Je tato věta napsána správně?',
    question: 'Ich bin Grippe.',
    correctAnswer: 'NEIN'
  }
]

const welcomeTheme = new Audio('az-kviz-znelka.mp3');
const timerStandard = new Audio('timer-normal.mp3');
const timerCompensatory = new Audio('timer-short.mp3');

$(function (){
  welcomeTheme.load();
  timerStandard.load();
  timerCompensatory.load();

  // init parts - hide not needed ones before init
  $('#question-wrapper').hide();
  $('.hex').hide();
  $('#logo').hide();
  $('#timer-control').hide();
  $('#timer').hide();

  $('#turn-info').click(fillQuestionArrays);
});

function initGame() {
  welcomeTheme.play();
  $('#turn-info').hide().css('cursor', 'default').unbind('click');

  $('#question-choose-wrapper').hide();

  $('#logo').show();
  $('#logo').css('transform', 'scale(10)');

  setTimeout(function () {
    $('#logo').hide();
    teamOnTurn = Math.random() < 0.5 ? 'blue' : 'orange';
    changeTurn()

    $('.middle').click(hexClicked);
    $('#correct').click(questionCorrect);
    $('#opponent-correct').click(questionOpponentCorrect);
    $('#wrong').click(questionWrong);

    let originalColor;
    $('.middle').hover(function () {
      let sound = new Audio('click.mp3');
      sound.load();
      sound.play();
      originalColor = $(this).css('background-color')
      $(this).css('background-color', '#b8bab4')
      $(this).parent().find('.bottom').css('border-top-color', '#b8bab4')
      $(this).parent().find('.top').css('border-bottom-color', '#b8bab4')
    }, function () {
      $(this).css('background-color', originalColor)
      $(this).parent().find('.bottom').css('border-top-color', originalColor)
      $(this).parent().find('.top').css('border-bottom-color', originalColor)
    });

    let allHexes = $('.hex');
    let currentHex = 0;
    $('.hex').first().fadeIn( 300, function showNext() {
      currentHex++;
      if(currentHex === allHexes.length) {
        $('#turn-info').show();
      }
      else {
        $( allHexes[currentHex] ).fadeIn( 300, showNext );
      }
    });
  }, 11000);


}

function hexClicked() {

  if(demoMode) {
    return;
  }
  if((questions.length === 0 && !$(this).hasClass('wrong')) || (compensatoryQuestions.length === 0 && $(this).hasClass('wrong'))){
    alert('Došly otázky');
    return;
  }
  questionHex = $(this);

  $(this).off('mouseenter mouseleave');

  questionElem = $(this);
  $('#quiz-wrapper').hide();

  resetQuestion();
  resetTimer();

  if($(this).hasClass('wrong')) {
    TIME_LIMIT = 10;
    WARNING_THRESHOLD = 5;
    standardQuestion = false;
    prepareCompensatoryQuestion()
  }
  else {
    TIME_LIMIT = 15;
    WARNING_THRESHOLD = 7;
    standardQuestion = true;
    prepareQuestion();
  }

  $('#question-wrapper').show();
  $('#timer-control').show();
  $('#timer').show();
}

function questionCorrect() {

  let sound = new Audio('correct.mp3');
  sound.load();

  let top = $(questionElem).parent().children()[0];
  $(top).css('border-bottom-color', teamOnTurn);

  let middle = $(questionElem).parent().children()[1];
  $(middle).css('background-color', teamOnTurn).addClass(teamOnTurn);

  let bottom = $(questionElem).parent().children()[2];
  $(bottom).css('border-top-color', teamOnTurn);

  changeTurn();
  $(questionElem).off('click');
  $(questionElem).css('cursor', 'default');

  $('#question-wrapper').hide();
  $('#timer-control').hide();
  $('#timer').hide();
  $('#quiz-wrapper').show();
  if(!checkWin()){
    sound.play();
  }
}

function questionOpponentCorrect() {

  let sound = new Audio('correct.mp3');
  sound.load();

  let hexColor = teamOnTurn === 'blue' ? 'orange' : 'blue';

  let top = $(questionElem).parent().children()[0];
  $(top).css('border-bottom-color', hexColor);

  let middle = $(questionElem).parent().children()[1];
  $(middle).css('background-color', hexColor);
  $(middle).addClass(hexColor);

  let bottom = $(questionElem).parent().children()[2];
  $(bottom).css('border-top-color', hexColor);

  $(questionElem).off('click');
  $(questionElem).css('cursor', 'default');

  $('#question-wrapper').hide();
  $('#timer-control').hide();
  $('#timer').hide();
  $('#quiz-wrapper').show();
  if(!checkWin()){
    sound.play();
  }
}

function changeTurn() {
  console.log('changing turn')
  let infoElem = $('#turn-info');

  if(teamOnTurn === 'blue') {
    $(infoElem).css('background-color', 'orange');
    $(infoElem).text('Oranžový na tahu');
  }
  else {
    $(infoElem).css('background-color', 'blue');
    $(infoElem).text('Modrý na tahu');
  }

  teamOnTurn = teamOnTurn === 'blue' ? 'orange' : 'blue';
}

function questionWrong() {

  let sound = new Audio('wrong.mp3');
  sound.load();
  sound.play();

  let top = $(questionElem).parent().children()[0];
  $(top).css('border-bottom-color', 'black');

  let middle = $(questionElem).parent().children()[1];
  $(middle).css('background-color', 'black');
  $(middle).css('color', 'white');
  $(middle).addClass('wrong');

  let bottom = $(questionElem).parent().children()[2];
  $(bottom).css('border-top-color', 'black');

  changeTurn();

  $('#question-wrapper').hide();
  $('#timer-control').hide();
  $('#timer').hide();
  $('#quiz-wrapper').show();
  checkWin()
}

function prepareQuestion() {
  let question = questions[Math.floor(Math.random()*questions.length)];
  let questionIndex = questions.indexOf(question);
  questions.splice(questionIndex, 1);

  $('#question-title').text(question.title);

  if(question.image === undefined) {
    $('#question-image-container').hide();
    $('#text-question-container').show();
    $('#text-question').text(question.question);
    $('#text-answer').click(function () {
      $(this).text(question.correctAnswer);
    })
  }
  else {
    $('#text-question-container').hide();
    $('#question-image-container').show();
    $('#question-image-container').css('cursor', 'pointer');
    $('#question-image').attr('src', 'img/'+question.image);
    //todo: ten onclick se predela sam???
    $('#question-image-container').click(function () {
      $('#question-image').hide();
      $('#image-answer').text(question.correctAnswer);
    })
  }
}

function prepareCompensatoryQuestion() {
  let question = compensatoryQuestions[Math.floor(Math.random()*compensatoryQuestions.length)];
  let questionIndex = compensatoryQuestions.indexOf(question);
  compensatoryQuestions.splice(questionIndex, 1);

  $('#question-image-container').hide();
  $('#text-question-container').show();
  $('#opponent-correct').hide();

  $('#question-title').text(question.title);
  $('#text-question').text(question.question);
  $('#text-answer').click(function () {
    $(this).text(question.correctAnswer);
  })
}

function resetQuestion() {
  $('#text-question-container').show();
  $('#question-image-container').show();
  $('#image-answer').text('');
  $('#question-image').show();
  $('#text-answer').text('Ukázat odpověď');
  $('#opponent-correct').show()
}

let side1Connected = false;
let side2Connected = false;
let side3Connected = false;
let checkingNumbers = [];
let side1Numbers = [1,2,4,7,11,16,22];
let side2Numbers = [1,3,6,10,15,21,28];
let side3Numbers = [22,23,24,25,26,27,28];

function checkWin() {
  side1Connected = false;
  side2Connected = false;
  side3Connected = false;
  let orangeNumbers = [];
  let blueNumbers = [];
  let otherNumbers = [];

  for(let hex of $('.middle').toArray()) {
    if($(hex).hasClass('blue')) {
      blueNumbers.push(parseInt($(hex).text()))
    }
    else if($(hex).hasClass('orange')){
      orangeNumbers.push(parseInt($(hex).text()))
    }
    else {
      otherNumbers.push(parseInt($(hex).text()))
    }
  }
  checkingNumbers = teamOnTurn === 'blue' ? orangeNumbers : blueNumbers;

  findConnectingPieces();

  if(teamOnTurn !== 'blue') {
    if(side1Connected && side2Connected && side3Connected){
      $('.middle').each(function() {
        if(!$(this).hasClass('blue')) {
          $(this).parent().animate({opacity: 0.2}, 1000);
          $(this).off('click').off('mouseenter mouseleave');
          $(this).css('cursor', 'default');
          $('#turn-info').hide()
        }
      });
      let winAudio = new Audio('win.mp3');
      winAudio.load();
      winAudio.play();
      return true;
    }
  }
  else {
    if(side1Connected && side2Connected && side3Connected){
      $('.middle').each(function() {
        if(!$(this).hasClass('orange')) {
          $(this).parent().animate({opacity: 0.2}, 1000);
          $(this).off('click').off('mouseenter mouseleave');
          $(this).css('cursor', 'default');
          $('#turn-info').hide()
        }
      });
      let winAudio = new Audio('win.mp3');
      winAudio.load();
      winAudio.play();
      return true;
    }
  }
  return false
}

function findConnectingPieces(piece = null) {

  let number = piece !== null ? piece : parseInt($(questionElem).text());
  console.log(number);
  if(!checkingNumbers.includes(number)) return;

  checkingNumbers = checkingNumbers.filter(elem => elem !== number);

  if(side1Numbers.includes(number)){
    side1Connected = true;
  }
  if(side2Numbers.includes(number)){
    side2Connected = true;
  }
  if(side3Numbers.includes(number)){
    side3Connected = true;
  }

  let connectingToNumber = [];
  let rowNumber = parseInt($('#'+number).parent().attr('id'));
  if(!side1Numbers.includes(number)){
    connectingToNumber.push(number-1);
    connectingToNumber.push(number-rowNumber);
  }
  if(!side2Numbers.includes(number)){
    connectingToNumber.push(number+1);
    connectingToNumber.push(number-rowNumber+1);
  }
  if(!side3Numbers.includes(number)){
    connectingToNumber.push(number+rowNumber);
    connectingToNumber.push(number+rowNumber+1);
  }

  connectingToNumber = connectingToNumber.filter(elem => checkingNumbers.includes(elem));

  for (let connectingNumber of connectingToNumber) {
    console.log(connectingNumber);
    findConnectingPieces(connectingNumber);
  }

}
