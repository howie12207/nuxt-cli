<template>
    <div class="layout">
        <HeaderBar />
        <Nuxt />
        <PageLoading v-if="$store.state.pageLoading" />
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    created() {
        if (process.server) {
            this.showMemoryUsageInfo();
        } else {
            this.showVersionInfo();
        }
    },
    methods: {
        showMemoryUsageInfo() {
            const memoryUsage = process.memoryUsage();
            if (process.env.NODE_ENV === 'production')
                /* eslint-disable-next-line */
                console.log('Memory usge :', {
                    rss: this.format(memoryUsage.rss),
                    heapTotal: this.format(memoryUsage.heapTotal),
                    heapUsed: this.format(memoryUsage.heapUsed),
                    external: this.format(memoryUsage.external)
                });
        },
        format(bytes: number) {
            return (bytes / 1024 / 1024).toFixed(2) + ' MB';
        },
        showVersionInfo() {
            if (process.env.NODE_ENV === 'production')
                /* eslint-disable-next-line */
                console.info(
                    'version: %c' + this.$config.APP_VERSION,
                    'color:white;background:#ff9f19;padding: 2px 0.5em; border-radius: 10px'
                );
        }
    }
});
</script>
<style lang="scss" scoped>
.layout {
    color: #333;
}
</style>
