<style>
</style>
<template>
    <section class="section" id="readytoplay-section" style="height: auto;">
        <div class="container">
        <div id="home" class="flex-column flex-center">
            <h1>Ready to play?</h1>
            <RouterLink :to="{ name: 'Quiz' }" id="play-btn" class="btn">Play</RouterLink>
            <RouterLink :to="{ name: 'Home' }" id="goback-btn" class="btn">Go back</RouterLink>
            <RouterLink :to="{ name: 'Leaderboard' }" id="highscores-btn" class="btn yellow-btn">High Scores<i class="fas fa-crown"></i></RouterLink>
        </div>
        </div>
    </section>
</template>