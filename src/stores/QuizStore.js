import { defineStore } from "pinia";

export const useQuizStore = defineStore('quizStore', {
    state: () => ({
        questions: [
            {
                question: "What does PHP stand for?",
                choices: [
                    "Personal Hypertext Processor",
                    "PHP: Hypertext Preprocessor",
                    "Private Home Page",
                ],
                time: 10,
                multiple: false,
                answer: "2"
            },
            {
                question: "How do you write `Hello World` in PHP?",
                choices: [
                    "Document.Write('Hello Wordld');",
                    "echo 'Hello World';",
                    "'Hello World'",
                ],
                time: 10,
                multiple: false,
                answer: "2"
            },
            {
                question: "How do you get information from a form that is submitted using the 'get' method?",
                choices: [
                    "Request.Form",
                    "Request.QueryString",
                    "$_GET[]",
                ],
                time: 10,
                multiple: false,
                answer: "3"
            },
            {
                question: "Include files must have file extension *.inc?",
                choices: [
                    "True",
                    "False",
                ],
                time: 10,
                multiple: false,
                answer: "2"
            },
            {
                question: "Which keyword is used to refer to properties or methods within the class itself?",
                choices: [
                    "Private",
                    "Public",
                    "Protected",
                    "$this",
                ],
                time: 10,
                multiple: false,
                answer: "4"
            },
            {
                question: "How can we call the parent constructor in PHP?",
                choices: [
                    "parent:__construct()",
                    "parent:construct()",
                    "parent::construct()",
                    "parent::__construct()",
                ],
                time: 10,
                multiple: false,
                answer: "4"
            },
            {
                question: "Which of the following is used to convert all applicable characters to HTML entities?",
                choices: [
                    "html_entities",
                    "html_elements",
                    "htmlentities",
                    "htmlelements",
                ],
                time: 10,
                multiple: false,
                answer: "3"
            },
            {
                question: "Which of the following is the Scope Resolution Operator?",
                choices: [
                    "\"",
                    "::",
                    ":",
                    "^",
                ],
                time: 10,
                multiple: false,
                answer: "2"
            },
            {
                question: "What keyword prevents a method from being redefined by a child class?",
                choices: [
                    "abstract", 
                    "protected", 
                    "final", 
                    "static",
                ],
                time: 10,
                multiple: false,
                answer: "3"
            },
            {
                question: "What is the correct way to end a PHP statement?",
                choices: [
                    ";",
                    ".",
                    "New line",
                    "None of the above",
                ],
                time: 10,
                multiple: false,
                answer: "1"
            },
            {
                question: "PHP server scripts are surrounded by delimiters, which?",
                choices: [
                    "<?php...?>",
                    "<&>...</&>",
                    "<?php>...</?>",
                    "<script>...</script>",
                ],
                time: 10,
                multiple: false,
                answer: "1"
            },
        ],
        scores: [],
        loading: true,
        currentScore: null,
    }),
    getters: {
        topScores(top = 3) {
            return this.scores.sort((a, b) => b.score - a.score).slice(0, top);
        }
    },
    actions: {
        async getQuestions() {
            this.loading = true;
            const res = await fetch('http://localhost:3000/questions');
            const questions = await res.json();
            this.questions = questions;
            this.loading = false;
        },
        setCurrentScore(score) {
            this.currentScore = score;
        },
        saveScore(name) {
            this.scores.push({name, score: this.currentScore});
            this.currentScore = null;
        }
    },
})