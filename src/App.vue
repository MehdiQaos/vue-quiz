<script setup>
  import { useQuizStore } from './stores/QuizStore';

  const quizStore = useQuizStore();
  // quizStore.getQuestions();
</script>

<template>
  <router-view/>
</template>