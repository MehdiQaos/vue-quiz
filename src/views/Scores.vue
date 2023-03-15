<template>
    <section class="container section" id="high-scores-section">
        <div id="highScores" class="flex-center flex-column">
            <h1 id="finalScore">Leaderboard</h1>
            <ul id="highScoresList">
                <li v-for="(score, i) in topScores" :key="i">
                    <h2>{{ `#${i+1} ${score.name}: ${score.score}` }}</h2>
                </li>
            </ul>
            <RouterLink :to="{ name: 'Home' }" id="highscores_to_home" class="btn">Go Home<i class="fas fa-home"></i></RouterLink>
        </div>
    </section>
</template>

<script setup>
    import { useQuizStore } from '../stores/QuizStore';
    import { storeToRefs } from 'pinia';

    const quizStore = useQuizStore();

    const { topScores } = storeToRefs(quizStore);
</script>