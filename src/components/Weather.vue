<template>
    <div id="weatherApp">
        <form v-on:submit.prevent="getWeather">

            <select name="location" v-model="selected">
                <option v-for="(location, index) in locations" :value="location" :key="index">
                    {{ location.name }}
                </option>
            </select>

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
                apiKey: 'f33fe9b45c2f4a9098791733222401',
                weather: [],
                displayWeather: false,
                locations: [
                    {'name': 'Amsterdam'},
                    {'name': 'Rotterdam'},
                    {'name': 'Utrecht'},
                    {'name': 'Groningen'},
                    {'name': 'Dordrecht'},
                    {'name': 'Nijmegen'}
                ],
                selected: localStorage.getItem('lastLocation') ? localStorage.getItem('lastLocation') : 'Dordrecht'
            }
        },
        methods: {
            getWeather: function () {
                axios
                    .get('http://api.weatherapi.com/v1/current.json?key=' + this.apiKey + '&q=' + this.selected.name)
                    .then((response) => {
                        this.weather = response.data;
                        this.displayWeather = true;
                        console.log(response.data);

                        localStorage.setItem("lastLocation", this.selected.name);
                    })
                    .catch((error) => {
                        console.log(error);
                        this.displayWeather = false;
                    })
            }
        },
        mounted() {
            this.getWeather();

            if (!localStorage.getItem("lastLocation")) {
                localStorage.setItem("lastLocation", this.selected.name);
            }
        },
        computed: {
            lastLocation() {
                return localStorage.getItem("lastLocation");
            }
        },
        created() {
            this.selected = this.locations.find(i => i.name === this.selected);
        }
    }
</script>

<style>

</style>