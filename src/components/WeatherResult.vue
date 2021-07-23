<template>
    <div class="card" v-if="this.result.location">
        <div class="card-body">
            <h5 class="card-title">{{this.result.location.name}}, {{this.result.location.region}}, {{this.result.location.country}}</h5>
            <h6 class="card-subtitle mb-2">Date: {{this.result.forecast.forecastday[0].date}}</h6>

            <p class="card-text">Current temperature: {{this.result.current.temp_c}}<span>&#8451;</span> / {{this.result.current.temp_f}}<span>&#8457;</span></p>
            
            <p class="card-text">Feels Like: {{this.result.current.feelslike_c}}<span>&#8451;</span> / {{this.result.current.feelslike_f}}<span>&#8457;</span></p>

            <p class="card-text">Rain chance: {{this.result.forecast.forecastday[0].day.daily_chance_of_rain}}%</p>

            <p class="card-text">Sun Rise: {{this.result.forecast.forecastday[0].astro.sunrise}}</p>

            <p class="card-text">Sun Set: {{this.result.forecast.forecastday[0].astro.sunset}}</p>

            <div id="img-container">
                <b>{{this.result.current.condition.text}}</b>
                <img :src="'https:' + this.result.current.condition.icon" alt="climate logo">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        result: Object
    }
}
</script>