<script setup>
  import { useQuizStore } from './stores/QuizStore';

  const quizStore = useQuizStore();
</script>

<template>
  <router-view/>
</template>