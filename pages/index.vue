<template>
    <div class="home">
        <HomePage />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'Home',
    meta: {
        layout: 'home'
    }
});
</script>

<style lang="scss" scoped>
.home {
    color: #333;
}
</style>
