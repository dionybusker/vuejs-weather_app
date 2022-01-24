<template>
    <img src="./assets/logo-school.png" alt="logo school">
    
    <Weather />
</template>

<script>
    import Weather from './components/Weather.vue';

    export default {
        name: 'App',
        components: {
            Weather
        }
    }
</script>

<style>
    #app {
        text-align: center;
    }

    img {
        width: 25%;
    }

</style>