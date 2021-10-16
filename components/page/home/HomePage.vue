<template>
    <div class="home">
        <div class="cover">
            <img src="./img/logo.png" />
        </div>
        <h1>Welcome to Your Awesome App</h1>
        <div class="meta">
            Before you use it, you must know that in Africa, 60 seconds pass every minute
        </div>
        <h2>Base Usage</h2>
        <div class="li">
            <a href="#">Nuxt</a> 、 <a href="#">Typescript</a> 、 <a href="#">Node express</a> 、
            <a href="#">AWD</a> 、 <a href="#">RWD</a> 、 <a href="#">Jest</a> 、
            <a href="#">Nuxt-i18n</a> 、
            <a href="#">PWA</a>
        </div>
        <h2>Support</h2>
        <div class="li">
            <a href="#">element-UI</a> 、 <a href="#">Eslint</a> 、 <a href="#">Stylelint</a> 、
            <a href="#">Commitlint</a>
        </div>
        <h2>Ecosystem</h2>
        <div class="li">
            <a href="#">Parry</a> 、 <a href="#">Catherine</a> 、 <a href="#">Mars</a> 、
            <a href="#">Howie</a> 、 <a href="#">pretty Yellow</a> 、 <a href="#">浩宇弟</a>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'HomePage'
});
</script>

<style lang="scss" scoped>
.home {
    width: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    .cover {
        background: #dc58b0;
        padding: 30px 0;
        margin: auto;
        margin-bottom: 60px;
    }
    img {
        width: 200px;
        animation: turn 3s forwards;
        margin: auto;
    }
    h1 {
        font-size: 30px;
        font-weight: bold;
    }
    .meta {
        margin-top: 30px;
    }
    h2 {
        margin-top: 30px;
        font-size: 18px;
        font-weight: bold;
    }
    .li {
        margin-top: 30px;
        a {
            color: #42b983;
            text-decoration: underline;
        }
    }
}
@keyframes turn {
    0% {
        transform: scaleY(-1.8);
    }
    100% {
        transform: scaleY(1);
    }
}
</style>
