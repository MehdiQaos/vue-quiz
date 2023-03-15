<template>
    <section class="container section" id="high-scores-section">
        <div id="highScores" class="flex-center flex-column">
            <h1 id="finalScore">Leaderboard</h1>
            <ul id="highScoresList"></ul>
            <RouterLink :to="{ name: 'Home' }" id="highscores_to_home" class="btn">Go Home<i class="fas fa-home"></i></RouterLink>
        </div>
    </section>
</template>