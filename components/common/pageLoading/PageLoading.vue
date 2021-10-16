<template>
    <div class="loading"><img src="./img/loading.png" /></div>
</template>
<style lang="scss" scoped>
.loading {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    text-align: center;
    line-height: 100vh;
    vertical-align: middle;
    img {
        animation: turn 1s ease infinite;
        width: 100px;
        height: 100px;
    }
}
@keyframes turn {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
