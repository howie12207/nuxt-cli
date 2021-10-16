<template>
    <div class="error">Page not find.</div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'Error',
    meta: {
        name: 'error'
    }
});
</script>
<style lang="scss" scoped>
.error {
    color: #333;
    min-height: 50vh;
    padding-top: 100px;
    text-align: center;
    font-size: 24px;
}
</style>
