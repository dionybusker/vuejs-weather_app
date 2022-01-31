<template>
    <img class="logo" src="./assets/logo-school.png" alt="logo school">
    
    <weather />
</template>

<script>
    export default {
        name: 'App',
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

    #app {
        text-align: center;
        font-family: 'Roboto', sans-serif;
    }

    img.logo {
        width: 25vh;
    }
</style>