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

let welcomeTheme = new Audio('az-kviz-znelka.mp3');

$(function (){
  console.log('js loaded');
  welcomeTheme.load();

  // init parts - hide not needed ones before init
  $('#question-wrapper').hide();
  $('.hex').hide();
  $('#logo').hide();

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
  if(questions.length === 0 || compensatoryQuestions.length === 0){
    alert('Došly otázky');
    return;
  }

  console.log('hex clicked');
  questionHex = $(this);

  $(this).off('mouseenter mouseleave');

  questionElem = $(this);
  $('#quiz-wrapper').hide();

  resetQuestion();

  if($(this).hasClass('wrong')) {
    prepareCompensatoryQuestion()
  }
  else {
    prepareQuestion();
  }

  $('#question-wrapper').show();
}

function questionCorrect() {
  let top = $(questionElem).parent().children()[0];
  $(top).css('border-bottom-color', teamOnTurn);

  let middle = $(questionElem).parent().children()[1];
  $(middle).css('background-color', teamOnTurn);

  let bottom = $(questionElem).parent().children()[2];
  $(bottom).css('border-top-color', teamOnTurn);

  changeTurn();
  $(questionElem).off('click');
  $(questionElem).css('cursor', 'default');

  $('#question-wrapper').hide();
  $('#quiz-wrapper').show();
}

function questionOpponentCorrect() {
  let hexColor = teamOnTurn === 'blue' ? 'orange' : 'blue';

  let top = $(questionElem).parent().children()[0];
  $(top).css('border-bottom-color', hexColor);

  let middle = $(questionElem).parent().children()[1];
  $(middle).css('background-color', hexColor);

  let bottom = $(questionElem).parent().children()[2];
  $(bottom).css('border-top-color', hexColor);

  $(questionElem).off('click');
  $(questionElem).css('cursor', 'default');

  $('#question-wrapper').hide();
  $('#quiz-wrapper').show();
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
  $('#quiz-wrapper').show();
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


/**
 * Delay for a number of milliseconds
 */
function sleep(delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}
