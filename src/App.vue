<template>
  <div id="app" class="container">
    <form @submit.prevent="search">
		<div class="form-group">
			<input type="text" class="form-control" v-model="location" placeholder="City, Region, Country">
			<button type="submit" class="btn btn-primary">Search</button>
		</div>
		<small v-if="this.errors.message" class="form-text text-danger" v-text="this.errors.message"></small>
		<small v-else-if="display_textbox_error" class="form-text text-danger">Location is required!</small>
	</form>

    <WeatherResult v-bind="{result}"/>
  </div>
</template>

<script>
import WeatherResult from './components/WeatherResult.vue'

const axios = require('axios').default;

export default {
	data() {
		return {
			location: '',
			unit: 'celsius',
			display_textbox_error: false,
			result: {},
			errors: {}
		}
	},
	methods: {
		search() {
			this.errors = {}
			
			if (this.location.length == 0) {
				this.display_textbox_error = true
				return
			}

			let params={
				key: process.env['VUE_APP_WEATHER_API_KEY'],
				q: this.location,
				aqi: 'no',
				days: '1',
				alerts: 'no'
			}

			axios.get(process.env['VUE_APP_WEATHER_API'], {params: params}).then((response) => {
				this.display_textbox_error = false
				this.errors = {}
				this.result = response.data
			}).catch((error) => {
				this.errors = error.response.data.error
			});
		}
	},
	name: 'App',
	components: {
		WeatherResult
	}
}
</script>
