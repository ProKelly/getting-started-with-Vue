<template>
    <div v-on:click="countClicks">
        <h2>{{ foodName }}</h2>
        <h2>{{ foodDesc }}</h2>
        <h1>{{ isFav }}</h1>
        <p id="red">clicked {{ click }} times </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                click: 0
            }
        },
        // props: [
        //     'foodName',
        //     'foodDesc',
        //     'isFav'
        // ], 
        props: {
            foodName: {
                type: String,
                required: true
            },
            foodDesc: String,
            isFav: Boolean
        },
        methods: {
            countClicks() {
                this.click++
            }
        }
    };
</script>

<style>
 #red {
    font-weight: bold ;
    color: rgb(144, 12, 12);
  }
</style>