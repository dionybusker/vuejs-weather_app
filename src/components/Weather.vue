<template>
    <!-- {{ msg }} -->

    <div id="weatherApp">
        <form v-on:submit.prevent="getWeather">
            <input type="text" name="location" v-model="location">
            <button>Search</button>
        </form>

        <div v-if="displayWeather">

            <h1>{{ weather.location.name }}</h1>

            <h3>Temperature: {{ weather.current.temp_c }}</h3>
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
                return fetch('http://api.weatherapi.com/v1/current.json?key=' + this.apiKey + '&q=' + this.location)
                    .then(response => response.json())
                    .then(data => {
                        this.weather = data;
                        console.log(data);
                        this.displayWeather = true;
                    }
                );
            }
        },
    }
</script>

<style>

</style>