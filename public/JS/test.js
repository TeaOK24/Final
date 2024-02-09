const questions = [
    {
        question: "Нарезка для жюльена?",
        optionA: "Кубиками",
        optionB: "Баттонэ",
        optionC: "Сизле",
        optionD: "Соломкой",
        correctOption: "optionD"
    },

    {
        question: "Какая польза от добавления соли в кипящую воду?",
        optionA: "Соль способствует быстрому закипанию воды",
        optionB: "Соль увеличивает температуру кипения",
        optionC: "Соль уменьшает температуру кипения",
        optionD: "Никак не влияет",
        correctOption: "optionB"
    },

    {
        question: "С ботанической точки зрения, помидор - это...",
        optionA: "Гриб",
        optionB: "Овощ",
        optionC: "Фрукт",
        optionD: "Ягода",
        correctOption: "optionD"
    },

    {
        question: "Из какой части туши делают стейк?",
        optionA: "Любая",
        optionB: "Грудка",
        optionC: "Спина",
        optionD: "Голень",
        correctOption: "optionC"
    },

    {
        question: "Какой из следующих видов сыра не считается «свежим»?",
        optionA: "Пармезан",
        optionB: "Моцарелла",
        optionC: "Рикотта",
        optionD: "Бри",
        correctOption: "optionD"
    },

    {
        question: "Какой плод созревает только после сбора?",
        optionA: "Авокадо",
        optionB: "Арбуз",
        optionC: "Черешня",
        optionD: "Персик",
        correctOption: "optionA"
    },

    {
        question: "Густой холодный суп из перетертых овощей называется ...",
        optionA: "Борщ",
        optionB: "Харчо",
        optionC: "Гаспачо",
        optionD: "Хаш",
        correctOption: "optionC"
    },

    {
        question: "Название этого скандинавского блюда в переводе со шведского означает «маленькие кусочки на сковороде»",
        optionA: "Питтипанна",
        optionB: "Луссекатт",
        optionC: "Граавилохи",
        optionD: "Сэмла",
        correctOption: "optionA"
    },

    {
        question: "Тархоня — это ...",
        optionA: "французский десерт",
        optionB: "итальянкий аперитив",
        optionC: "финский рыбный суп",
        optionD: "венгерские макаронные изделия",
        correctOption: "optionD"
    },

    {
        question: "Из какого мяса традиционно готовят ростбиф?",
        optionA: "Из свинины",
        optionB: "Из баранины",
        optionC: "Из мяса птицы",
        optionD: "Из говядины",
        correctOption: "optionD"
    },

    {
        question: "Киббех, кеббе или кубэ в традиционной турецкой кухне — это ...",
        optionA: "аналог пельменей с мясной начинкой",
        optionB: "суп из баранины с кусочками ананаса",
        optionC: "котлеты из булгура, со специями",
        optionD: "котлеты, завернутые в баклажаны",
        correctOption: "optionC"
    },

    {
        question: "Из какого теста обычно делают в Германии булочку твейбак?",
        optionA: "Из дрожжевого",
        optionB: "Из песочного",
        optionC: "Из слоёного",
        optionD: "Из пресного",
        correctOption: "optionA"
    },


    {
        question: "В немецкой кухне очень популярны Локоны Шиллера. Что это такое?",
        optionA: "Это вид макарон",
        optionB: "Это деликатесный рыбный продукт",
        optionC: "Это десерт из взбитых сливок и сахарной ваты",
        optionD: "None",
        correctOption: "optionB"
    },

    {
        question: "Чем натирают хрустящий хлеб, когда готовят традиционное итальянское блюдо брускетта?",
        optionA: "Паприкой",
        optionB: "Шафраном",
        optionC: "Перцем",
        optionD: "Чесноком",
        correctOption: "optionD"
    },

    {
        question: "К какой кухне относится курино-луковый суп с забавным названием кокки-ликки?",
        optionA: "К шотландской",
        optionB: "К муксиканской",
        optionC: "К португальской",
        optionD: "К немецкой",
        correctOption: "optionA"
    },

    {
        question: "Национальным блюдом какой страны является паэлья?",
        optionA: "Франция",
        optionB: "Австрия",
        optionC: "Испания",
        optionD: "Англия",
        correctOption: "optionC"
    },

    {
        question: "В какой стране пельмени называют «Дюшбара»?",
        optionA: "Азербайджан",
        optionB: "Болгария",
        optionC: "Армения",
        optionD: "Казахстан",
        correctOption: "optionA"
    },

    {
        question: "Лепешки «Кабартма» из какой страны?",
        optionA: "Румыния",
        optionB: "Венгрия",
        optionC: "Россия",
        optionD: "Белорусь",
        correctOption: "optionC"
    },

    {
        question: "Национальным блюдом какой страны является «Билтонг» - длинные полосы высушенного мяса, приправленного всевозможными специями?",
        optionA: "Казахстан",
        optionB: "Тунис",
        optionC: "Норвегия",
        optionD: "ЮАР",
        correctOption: "optionD"
    },

    {
        question: "Из какого языка происходит слово «Майонез»?",
        optionA: "Фрацузского",
        optionB: "Итальянского",
        optionC: "Английского",
        optionD: "Немецкого",
        correctOption: "optionA"
    },

    {
        question: "Национальным блюдом какой страны является «Паэлья»?",
        optionA: "Франция",
        optionB: "Германия",
        optionC: "Австралия",
        optionD: "Испания",
        correctOption: "optionD"
    },

    {
        question: "Харчо - яркий представитель кавказской кухни. Национальным блюдом какой страны оно является?",
        optionA: "Армения",
        optionB: "Грузии",
        optionC: "Азербайджана",
        optionD: "Абхазия",
        correctOption: "optionB"
    },

    {
        question: "Как называется старинное простонародное кушанье, соединяющее в себе первое и второе блюдо, похожее на густой суп из крупы и овощей с заправкой из сала? Это национальное белорусское блюдо.",
        optionA: "Солянка",
        optionB: "Кулеш",
        optionC: "Колдуны",
        optionD: "Капустница",
        correctOption: "optionB"
    },

    {
        question: "Когда обычно готовят салаты?",
        optionA: "За пару часов",
        optionB: "Их готовт с вечера",
        optionC: "Перед подачей",
        optionD: "За день до подачи",
        correctOption: "optionC"
    },

    {
        question: "Что часто используют в качестве основы для теплого салата?",
        optionA: "Цветную капусту",
        optionB: "Кабачки",
        optionC: "Баклажаны",
        optionD: "Перец",
        correctOption: "optionC"
    }

]


let shuffledQuestions = [] //пустой массив для хранения перетасованных выбранных вопросов

function handleQuestions() { 
    //функция для перетасовки и добавления 10 вопросов в массив перетасованных вопросов
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// функция для отображения следующего вопроса в массиве в dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Плохие оценки, продолжай практиковаться"
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Средние оценки, ты можешь добиться большего"
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Отлично, продолжайте в том же духе"
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}