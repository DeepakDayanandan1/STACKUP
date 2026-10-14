const prompt = require("readline-sync");

let questions = [
            {
                question: "Which keyword is used to declare a variable in JavaScript?",
                options: "1. int\n2. let\n3. string\n4. define",
                answer: "2. let",
                ansOption: "2"
            },
            {
                question: "Which function is used to display output in the browser console?",
                options: "1. print()\n2. display()\n3. console.log()\n4. show()",
                answer: "3. console.log()",
                ansOption: "3"
            },
            {
                question: "Which data type is used to store text in JavaScript?",
                options: "1. Number\n2. String\n3. Boolean\n4. Undefined",
                answer: "2. String",
                ansOption: "2"
            },
            {
                question: "Which symbol is used for a single-line comment in JavaScript?",
                options: "1. <!--\n2. ##\n3. //\n4. **",
                answer: "3. //",
                ansOption: "3"
            },
            {
                question: "Which keyword is used to declare a constant in JavaScript?",
                options: "1. var\n2. let\n3. const\n4. constant",
                answer: "3. const",
                ansOption: "3"
            }
        ];

        console.log("===== JAVASCRIPT QUIZ =====");

        let totalQuestions = 0;
        let correctAnswers = 0;
        let incorrectAnswers = 0;

        for (let i=0;i<questions.length;i++){
            console.log(questions[i].question);
            console.log(questions[i].options);
            let chosen = prompt.question("Enter your answer (1-4):");
            if (chosen == questions[i].ansOption){
                console.log("Correct Answer!");
                totalQuestions+=1;
                correctAnswers+=1;
            }else{
                console.log("Incorrect Answer!");
                console.log("Answer:",questions[i].answer);
                totalQuestions+=1;
                incorrectAnswers+=1;
            }
        }

        console.log("===== QUIZ RESULT =====");
        console.log("Total Questions:",totalQuestions);
        console.log("Correct Answers:",correctAnswers);
        console.log("Incorrect Answers:",incorrectAnswers);
        console.log("Final Score:",correctAnswers,"/",totalQuestions);
        console.log("Percentage:",(correctAnswers/totalQuestions)*100,"%");