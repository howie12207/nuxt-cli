<template>
    <header>
        <nuxt-link :to="localePath('/')">Home</nuxt-link> |
        <nuxt-link :to="localePath('/about')">About</nuxt-link>
    </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'Header'
});
</script>

<style lang="scss" scoped>
header {
    width: 100%;
    text-align: center;
    line-height: 16px;
    font-size: 16px;
    padding: 60px 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    font-weight: bold;
    a {
        text-decoration: underline;
        color: #2c3e50;
        &.nuxt-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
