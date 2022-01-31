import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowRight);

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import Weather from './components/Weather.vue';

// import axios from 'axios';

// createApp(App).use(axios).mount('#app')

const app = createApp(App);

    // .use(axios)
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('weather', Weather);

app.mount('#app');