
var myQuestions = [
    {
        question: "Q1: Pakistan is located in the?",
        answers: {
            a: "East Asia",
            b: "West Asia",
            c: "South Asia",
        },
        correctAnswer: 'c'
    },
    {
        question: "Q2: In Urdu, the name “Pakistan” literally means?",
        answers: {
            a: 'Pure land',
            b: ' Land of the pure',
            c: 'Land of the truthfulness'
        },
        correctAnswer: 'b'
    },
    {
        question: "Q3: The largest dam in Pakistan is?",
        answers: {
            a: 'Bhasha Dam',
            b: 'Mangla Dam',         
            c: 'Tarbela Dam'
        },
        correctAnswer: 'c'
    },
    {
        question: "Q4: Urdu was made national language of Pakistan in the constitution of?",
        answers: {
            a: '1973',
            b: '1952',
            c: '1962'
        },
        correctAnswer: 'a'
    },
    {
        question:  "Q5: Pakistan is the only country in the world that was created in the name of?",
        answers: {
            a: 'Justice',
            b: 'Islam',
            c: 'Humanity'
        },
        correctAnswer: 'b'
    },
];


var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        var output = [];
        var answers;

        for(var i=0; i<questions.length; i++){
          
            answers = [];
         
            for(letter in questions[i].answers){

                answers.push(
                    '<label class = " blk btn  btn-group btn-group-toggle"  >'
                        + '<input  type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                   
                );
            }

    
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
 
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        var userAnswer = '';
        var numCorrect = 0;

        for(var i=0; i<questions.length; i++){

           
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
        
            if(userAnswer===questions[i].correctAnswer){
               
                numCorrect++;
                

                answerContainers[i].style.color = 'lightgreen' ;
            }
    
            else{
                answerContainers[i].style.color = 'red';
            }
        }

        resultsContainer.innerHTML = '<img src="trophy.png" alt="" height="70px" width="70px"> '+' Wow! You got <br>' + numCorrect + ' out of ' + questions.length;
    }

    showQuestions(questions, quizContainer);
    

    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}









