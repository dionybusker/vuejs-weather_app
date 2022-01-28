<template>
    <!-- {{ msg }} -->

    <div id="weatherApp">
        <form v-on:submit.prevent="getWeather">
            <input type="text" name="location" v-model="location">
            <button>
                <font-awesome-icon :icon="['fas', 'arrow-right']" />
            </button>
        </form>

        <div v-if="displayWeather">

            <h1>{{ weather.location.name }}</h1>

            <h3>Temperature (C): {{ weather.current.temp_c }} degrees</h3>
            <h3>Wind speed: {{ weather.current.wind_kph }} km/h</h3>
            <h3>Wind direction: {{ weather.current.wind_dir }}</h3>

            <div>
                <img :src="weather.current.condition.icon" />
                {{ weather.current.condition.text }}
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Weather',
        data: function () {
            return {
                location: 'Dordrecht',
                apiKey: 'f33fe9b45c2f4a9098791733222401',
                weather: [],
                displayWeather: false
            }
        },
        methods: {
            getWeather: function () {
                axios
                    .get('http://api.weatherapi.com/v1/current.json?key=' + this.apiKey + '&q=' + this.location)
                    .then((response) => {
                        this.weather = response.data;
                        this.displayWeather = true
                        console.log(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                        this.displayWeather = false;
                    })

                // return fetch('http://api.weatherapi.com/v1/current.json?key=' + this.apiKey + '&q=' + this.location)
                //     .then(response => response.json())
                //     .then(data => {
                //         this.weather = data;
                //         console.log(data);
                //         this.displayWeather = true;
                    // }
                // );
            }
        },
    }
</script>

<style>

</style>