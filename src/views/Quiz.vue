<script setup>
import { ref, reactive, computed } from 'vue';
// import { allQuestions } from '../assets/data/data';
import { useQuizStore } from '../stores/QuizStore';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

const quizStore = useQuizStore();
const router = useRouter();

const allQuestions = [...quizStore.questions];

const questionIndx = ref(0);
const question = ref(null);
const score = ref(0);
const timer = ref(0);
const timerLength = ref(0);

const numQuestions = allQuestions.length;
let timerIntervalId = null;
let timerBarIntervalId = null;
let finalTimer = null;

const classes = reactive([
    {correct: false, incorrect: false},
    {correct: false, incorrect: false},
    {correct: false, incorrect: false},
    {correct: false, incorrect: false},
    {correct: false, incorrect: false},
]);

function resetClasses() {
    classes.forEach((c) => {
        c.correct = false;
        c.incorrect = false;
    });
}

newQuestion();

const handleAnswer = (idx) => {
    checkAnswer(idx);
};

function checkAnswer(idx) {
    if (idx && question.value.answer == idx + 1) {
        score.value += 100;
        classes[idx].correct = true;
    } else {
        if (idx != null) classes[idx].incorrect = true;
        console.log(parseInt(question.value.answer));
        classes[parseInt(question.value.answer) - 1].correct = true;
    }
    setTimeout(() => {
        newQuestion();
    }, 1000);
}

const questionBarWidth = computed(() => {
    return {
        width: `${Math.floor(questionIndx.value / numQuestions * 100)}%`,
    };
});

function newQuestion() {
    clearTimeout(finalTimer);
    clearInterval(timerIntervalId);
    clearInterval(timerBarIntervalId);
    resetClasses();

    if (allQuestions.length == 0) {
        quizStore.setCurrentScore(score.value);
        router.push('/save');
        return;
    }
    questionIndx.value++;
    question.value = allQuestions.pop();
    timer.value = question.value.time;
    timerLength.value = 100;

    timerIntervalId = setInterval(() => {
        timer.value--;
    if (timer.value == 0) {
        checkAnswer();
    }
    }, 1000);

    timerBarIntervalId = setInterval(() => {
        timerLength.value = parseInt((timer.value / question.value.time) * 100);
    }, 1000);
}
</script>

<template>
    <section class="container" id="quiz-section" style="height: auto;">
        <div id="quiz" class="justify-center flex-column">
            <div id="quiz-info">
                <div class="quiz-info-item">
                    <p id="progressText" class="quiz-info-prefix">Question {{ `${questionIndx} of ${numQuestions}` }}</p>
                    <div id="progressBar">
                        <div id="progressBarFull" :style="questionBarWidth"></div>
                    </div>
                </div>
                <div class="quiz-info-item">
                    <p class="quiz-info-prefix">Score</p>
                    <h1 class="quiz-info-main-text" id="score">{{ score }}</h1>
                </div>
            </div>
            <div style="margin-left: auto;">
                <h1 id="timer" style="margin-bottom: 3px">{{ timer }}</h1>
            </div>
            <div id="timer-progress" style="margin-bottom: 30px">
                <div id="timer-progressFull" :style="{ width: timerLength + '%' }"></div>
            </div>
            <h1 id="question">{{ question.question }}</h1>
            <div    
                v-for="(choice, i) in question.choices" :key="i"
                @click="handleAnswer(i)"
                class="choice-container"
                :class="classes[i]"
            >
                <p class="choice-prefix">{{ String.fromCharCode(65 + i) }}</p>
                <p class="choice-text">{{ choice }}</p>
            </div>
        </div>
    </section>
</template>

<style></style>