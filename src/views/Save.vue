<template>
    <section class="section" id="score-saving-section">
        <div class="container">
        <div id="end" class="flex-center flex-column">
            <h1 id="finalScore">0</h1>
            <form @submit.prevent="saveResult" class="end-form-container">
                <h2 id="end-text">Save your score?</h2>
                <input v-model="name" type="text" id="username" placeholder="Enter your name">
                <button class="btn" id="save_score_Btn">Save</button>
            </form>
            <RouterLink :to="{ name: 'Quiz' }" id="saving_to_quiz" class="btn">Play again</RouterLink>
            <RouterLink :to="{ name: 'Home' }" id="saving_to_home" class="btn">Go Home <i class="fas fa-home"></i></RouterLink>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { useQuizStore } from '../stores/QuizStore';
    import { storeToRefs } from 'pinia';

    const quizStore = useQuizStore();
    const name = ref('');
    const router = useRouter();

    function saveResult() {
        console.log(name.value);
        quizStore.saveScore(name.value);
        router.push('/home');
    }
</script>