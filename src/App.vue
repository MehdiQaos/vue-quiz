<script setup>
  import { ref, computed } from 'vue';
  import { allQuestions } from './assets/data/data';

  let questionIndx = ref(0);
  let score = ref(0);
  let choiceLetterAscii = 65;
  const numQuestions = allQuestions.length;

  const handleAnswer = (idx) => {
    choiceLetterAscii = 65;
    if (allQuestions[questionIndx.value].answer == idx + 1)
      score.value += 100;
    questionIndx.value++;
  };

  const currentQuestion = computed(() => {
    return allQuestions[questionIndx.value];
  });

  const questionBarWidth = computed(() => {
    return {
      width: `${Math.floor(questionIndx.value / (numQuestions - 1) * 100)}%`,
    };
  })

  function choiceLetter() {
    return String.fromCharCode(choiceLetterAscii++);
  };
</script>

<template>
  <section class="container" id="quiz-section" style="height: auto;">
    <div id="quiz" class="justify-center flex-column">
        <div id="quiz-info">
            <div class="quiz-info-item">
                <p id="progressText" class="quiz-info-prefix">Question {{ `${questionIndx + 1} of ${numQuestions}` }}</p>
                <div id="progressBar">
                    <div id="progressBarFull" :style="questionBarWidth"></div>
                </div>
            </div>
            <div class="quiz-info-item">
                <p class="quiz-info-prefix">Score</p>
                <h1 class="quiz-info-main-text" id="score">{{ score }}</h1>
            </div>
        </div>
        <h1 id="question">{{ currentQuestion.question }}</h1>
        <div @click="handleAnswer(i)" v-for="(choice, i) in currentQuestion.choices" :key="i" class="choice-container">
            <p class="choice-prefix">{{ choiceLetter() }}</p>
            <p class="choice-text" data-number="1">{{ choice }}</p>
        </div>
    </div>
  </section>
</template>

<style>
</style>