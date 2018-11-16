<template>
  <div class="about">
    <h1>Hello {{ their_name }}, This is an about page</h1>
    <p>This is the skill count {{ skillCount }}</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali...</p>
  </div>
</template>

<script>
import { store } from '../store.js';
import { mapState } from 'vuex';

    export default {
    store,
    computed: mapState({
        skillCount: 'count'
    }),
    name: 'Skills',
    data(){
        return {
            their_name: this.$route.params.name
             }
        }
    }
</script>