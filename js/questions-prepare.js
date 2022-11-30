function fillQuestionArrays() {

  let questionFile = $('#questions-choose').prop('files').item(0);
  let compensatoryQuestionFile = $('#compensatory-questions-choose').prop('files').item(0);

  if (questionFile === null || compensatoryQuestionFile === null){
    alert('nahrajte oba soubory s otázkami');
    return;
  }

  let fr1 = new FileReader();
  let fr2 = new FileReader();
  fr1.readAsText(questionFile, 'UTF-8');

  fr1.onload = function () {
    let result = prepareQuestionObjectArray(fr1.result);

    if(result !== false){
      fr2.readAsText(compensatoryQuestionFile, 'UTF-8');
      questions = result;
    }
    else {
      alert('špatný formát souboru s hlavními otázkami');
      location.reload();
    }
  };
  fr2.onload = function () {
    let result2 = prepareQuestionObjectArray(fr2.result);
    if(result2 !== false){
      compensatoryQuestions = result2;
      initGame();
    }
    else {
      alert('špatný formát souboru s náhradními otázkami');
      location.reload();
    }
  };
}


function prepareQuestionObjectArray(fileContent) {
  let resultQuestionObjectArray = [];
  let resultQuestionObject;
  let propertiesCounter = 0;

  for (let fileRow of formatFileStringInArray(fileContent)) {

    //vytvori novy prazdny objekt, pokud neexistuje
    if(resultQuestionObject === undefined) {
      resultQuestionObject = {title:'',question:'',correctAnswer:''};
    }

    // resetuje objekt a zapise ho, pokud narazi na prazdny string
    if(fileRow.length === 0){
      resultQuestionObjectArray.push(resultQuestionObject);
      resultQuestionObject = undefined;
      propertiesCounter = 0;
      continue;
    }

    let editedRowString;
    if(fileRow.match('^(question:)')){
      editedRowString = fileRow.replace('question:', '');
      editedRowString = editedRowString.trim();
      resultQuestionObject.question = editedRowString;
    }
    else if(fileRow.match('^(title:)')){
      editedRowString = fileRow.replace('title:', '');
      editedRowString = editedRowString.trim();
      resultQuestionObject.title = editedRowString;
    }
    else if(fileRow.match('^(correctAnswer:)')){
      editedRowString = fileRow.replace('correctAnswer:', '');
      editedRowString = editedRowString.trim();
      resultQuestionObject.correctAnswer = editedRowString;
    }
    else if(fileRow.match('^(image:)')){
      editedRowString = fileRow.replace('image:', '');
      editedRowString = editedRowString.trim();
      resultQuestionObject.image = editedRowString;
      resultQuestionObject.question = undefined;
    }
    else {
      console.log(fileRow);
      return false
    }

    propertiesCounter++;
  }

  return resultQuestionObjectArray;
}

function formatFileStringInArray(fileString) {
  let fileContentArr = fileString.trim().split("\n");

  for (let i = 0; i < fileContentArr.length; i++) {
    fileContentArr[i] = fileContentArr[i].trim();
    fileContentArr[i] = fileContentArr[i].replaceAll('\s /gm', '');
  }

  for (let i = 0; i < fileContentArr.length-1; i++) {
    if(fileContentArr[i].length === 0 && fileContentArr[i+1].length === 0){
      fileContentArr.splice(i+1,1);
      i--;
    }
    if(i>1 && fileContentArr[i].match('^(title:)') && fileContentArr[i-1].length !== 0){
      fileContentArr.splice(i, 0, "");
    }
  }
  //TODO: Tohle je hotfix zasadni chyby v logice, vyresit
  fileContentArr.push('');
  return fileContentArr;
}




