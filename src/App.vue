<template>
    <img src="./assets/logo-school.png" alt="logo school">
    
    <HelloWorld msg="Hello World!"/>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'App',
        components: {
            HelloWorld
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